#!/usr/bin/env python3
"""Pull Google reviews for the three studios into src/data/reviews.json.

    export GOOGLE_MAPS_API_KEY=...
    python3 tools/fetch-reviews.py
    python3 tools/build-reviews.py && python3 tools/build.py

Why a build step and not a script in the page: the Places API needs a key, and
anything the browser can read is public. Fetching here keeps the key on the
machine running the build and ships the reviews as plain HTML — no third-party
JavaScript, no layout shift, and crawlers see the text.

Two limits worth knowing, both Google's, not ours:

  * The Places API returns at most **five** reviews per place. Three studios is
    therefore a ceiling of fifteen, which is why the page shows a selection
    rather than claiming to list everything.
  * Places content may not be cached for more than 30 days, so re-run this
    monthly. `make reviews` or a cron on the build box is enough.

The place IDs live in PLACES below. Find one by searching the studio on Google
Maps and taking the `place_id` from the URL, or via the Place Search endpoint.
"""
from __future__ import annotations

import json
import os
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "data" / "reviews.json"

ENDPOINT = "https://maps.googleapis.com/maps/api/place/details/json"

# label -> Google place ID. Fill these in; see the module docstring.
PLACES = {
    "Bishop Arts": "",
    "Uptown": "",
    "Lower Greenville": "",
}

# Only publish reviews at or above this rating. Google returns all of them;
# a five-star wall of text is not the point, but nor is a one-star on the
# homepage. Set to 0 to publish everything the API returns.
MIN_RATING = 4


def fetch(place_id: str, key: str) -> dict:
    url = ENDPOINT + "?" + urllib.parse.urlencode({
        "place_id": place_id,
        "fields": "name,rating,user_ratings_total,reviews,url",
        "reviews_sort": "newest",
        "key": key,
    })
    with urllib.request.urlopen(url, timeout=20) as r:
        payload = json.load(r)
    if payload.get("status") != "OK":
        raise SystemExit(
            f"Places API said {payload.get('status')}: "
            f"{payload.get('error_message', 'no detail')}"
        )
    return payload["result"]


def main() -> int:
    key = os.environ.get("GOOGLE_MAPS_API_KEY", "").strip()
    if not key:
        raise SystemExit(
            "GOOGLE_MAPS_API_KEY is not set.\n"
            "Create a key in Google Cloud with the Places API enabled, then:\n"
            "  export GOOGLE_MAPS_API_KEY=...\n"
            "Do not commit it — this script reads it from the environment so it\n"
            "never reaches the browser or the repository."
        )

    missing = [n for n, pid in PLACES.items() if not pid]
    if missing:
        raise SystemExit(
            "No place ID for: " + ", ".join(missing) + "\n"
            "Fill in PLACES at the top of this file. Find each ID by opening the\n"
            "studio on Google Maps — the place_id is in the share URL."
        )

    reviews, totals = [], []
    for label, pid in PLACES.items():
        result = fetch(pid, key)
        totals.append({
            "studio": label,
            "rating": result.get("rating"),
            "count": result.get("user_ratings_total"),
            "url": result.get("url", ""),
        })
        for rv in result.get("reviews", []):
            if (rv.get("rating") or 0) < MIN_RATING:
                continue
            text = (rv.get("text") or "").strip()
            if not text:
                continue
            reviews.append({
                "studio": label,
                "author": rv.get("author_name", "").strip(),
                "rating": rv.get("rating"),
                "text": text,
                "when": rv.get("relative_time_description", ""),
                "time": rv.get("time", 0),
            })

    reviews.sort(key=lambda r: r["time"], reverse=True)

    # Weighted mean across the studios, so the headline number is the real
    # aggregate rather than an average of averages.
    rated = [t for t in totals if t["rating"] and t["count"]]
    overall = (
        round(sum(t["rating"] * t["count"] for t in rated) / sum(t["count"] for t in rated), 1)
        if rated else None
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({
        "overall": overall,
        "total": sum(t["count"] or 0 for t in totals),
        "studios": totals,
        "reviews": reviews,
    }, indent=2, ensure_ascii=False) + "\n")

    print(f"  {len(reviews)} review(s) from {len(totals)} studio(s)")
    print(f"  overall {overall} across {sum(t['count'] or 0 for t in totals)} ratings")
    print(f"  wrote {OUT.relative_to(ROOT)}")
    print("  next: python3 tools/build-reviews.py && python3 tools/build.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
