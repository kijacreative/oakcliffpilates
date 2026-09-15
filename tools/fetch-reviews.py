#!/usr/bin/env python3
"""Pull the Google reviews for all three studios into src/data/reviews.json.

    python3 tools/fetch-reviews.py
    python3 tools/build-reviews.py && python3 tools/build.py

Source is the RevuBlast / onlinereviews.tech account that already powers the
review widgets — one "seat" per studio. The endpoint the widget's own bundle
calls is public and needs no key:

    {API}/seats/{token}/reviews/widgets?limit=N[&cursor=...]

Reading it here rather than dropping three widget scripts on the homepage buys
three things. The reviews from all three studios end up in **one** feed sorted
by date, instead of three separate carousels a visitor has to work through.
They ship as real HTML, so they render instantly and a crawler can read them.
And they inherit the site's own styling instead of the vendor's white cards and
yellow stars.

Re-run it whenever you want the feed refreshed; monthly is plenty.
"""
from __future__ import annotations

import json
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "data" / "reviews.json"

API = "https://server.onlinereviews.tech/api/v0.0.9"

# studio -> seat token, from the widget embed codes.
SEATS = {
    "Bishop Arts":      "69be051dc3d3eceaf39c816e",
    "Uptown":           "6730f860255d27b71a0d0aa9",
    "Lower Greenville": "69be0561c3d3eceaf39c8183",
}

# How many to pull per studio before filtering. The page shows far fewer; the
# surplus is so the newest-first merge has something to choose from.
PER_SEAT = 50

# Publish reviews at or above this rating. A marketing choice rather than a
# neutral feed — set it to 0 to publish everything the account holds.
MIN_RATING = 4


def get(token: str, limit: int, cursor: str | None = None) -> dict:
    q = {"limit": limit}
    if cursor:
        q["cursor"] = cursor
    url = f"{API}/seats/{token}/reviews/widgets?" + urllib.parse.urlencode(q)
    req = urllib.request.Request(url, headers={"User-Agent": "oakcliffpilates-build/1.0"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.load(r)


def main() -> int:
    reviews, studios, skipped = [], [], 0

    for studio, token in SEATS.items():
        try:
            payload = get(token, PER_SEAT)
        except Exception as e:                                  # noqa: BLE001
            raise SystemExit(f"{studio}: could not reach the reviews API — {e}")

        # avg comes back per source, e.g. [{"_id": "google", "avg": 4.9}]
        avgs = payload.get("avg") or []
        rating = round(sum(a["avg"] for a in avgs) / len(avgs), 1) if avgs else None
        count = payload.get("count") or 0
        entry = {"studio": studio, "rating": rating, "count": count, "url": ""}
        studios.append(entry)

        for rv in payload.get("reviews", []):
            # Every review from a place carries the same maps.google.com CID
            # link, so the first one gives us the studio's own Google listing.
            if not entry["url"] and rv.get("url"):
                entry["url"] = rv["url"]

            text = (rv.get("review_text") or "").strip()
            value = rv.get("rating_value") or 0
            if not text or value < MIN_RATING:
                skipped += 1
                continue
            reviews.append({
                "studio": studio,
                "author": (rv.get("name") or "").strip() or "A member",
                "rating": value,
                "text": text,
                "date": (rv.get("date") or "")[:10],
                "source": rv.get("source", "google"),
                "url": rv.get("url", ""),
            })
        print(f"  {studio:<17} {rating} from {count:,} reviews")

    reviews.sort(key=lambda r: r["date"], reverse=True)

    # Weighted mean across the studios — the real aggregate, not an average of
    # three averages, which would let the smallest studio count as much as the
    # largest.
    rated = [s for s in studios if s["rating"] and s["count"]]
    overall = (round(sum(s["rating"] * s["count"] for s in rated) / sum(s["count"] for s in rated), 1)
               if rated else None)
    total = sum(s["count"] or 0 for s in studios)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({
        "overall": overall,
        "total": total,
        "studios": studios,
        "reviews": reviews,
    }, indent=2, ensure_ascii=False) + "\n")

    print(f"\n  {len(reviews)} publishable, {skipped} skipped (under {MIN_RATING}★ or no text)")
    print(f"  overall {overall} across {total:,} reviews, all three studios")
    print(f"  wrote {OUT.relative_to(ROOT)}")
    print("  next: python3 tools/build-reviews.py && python3 tools/build.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
