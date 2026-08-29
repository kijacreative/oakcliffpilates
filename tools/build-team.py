#!/usr/bin/env python3
"""Generate the team roster partial from the Arketa staff export.

    python3 tools/build-team.py [path/to/Team_List.csv]

The export carries staff emails, phone numbers and birthdays. NONE of that is
written into the site — only name, role and start year, which is all a public
team page needs. Keep it that way.

Booking/system accounts in the export (Private Pilates, OCP Events, the shared
front-desk logins, test accounts) are not people and are filtered out below.
"""
from __future__ import annotations

import csv
import html
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "partials" / "team-roster.html"
DEFAULT_CSV = Path.home() / "Downloads" / "Team_List (2).csv"

# Not people — shared logins, booking placeholders and test rows.
NOT_PEOPLE = {
    "front desk",
    "staff general account",
    "private pilates",
    "ocp events",
    "charley test",
}

# The three with published headshots lead the page; everyone else is listed.
FEATURED = {
    "amanda mecsey": ("Owner / Instructor", "/img/team-amanda.jpg"),
    "charley carroll": ("General Manager / Instructor", "/img/team-charley.jpg"),
    "kiel jared": ("Owner / Operations", "/img/team-kiel.jpg"),
}

GROUPS = [
    ("Instructor", "Instructors", "The people on the box with you."),
    ("Admin", "Leadership", "Running the studios behind the scenes."),
    ("Manager", "Management", ""),
    ("Front Desk", "Front desk", "The first face you see, every visit."),
]


def load(path: Path) -> list[dict[str, str]]:
    rows = list(csv.DictReader(path.open(encoding="utf-8-sig")))
    if not rows:
        raise SystemExit(f"no rows in {path}")
    name_key = list(rows[0].keys())[0]
    people = []
    for r in rows:
        if (r.get("Is Archived") or "").strip().lower() == "yes":
            continue
        name = (r.get(name_key) or "").strip()
        if not name or name.lower() in NOT_PEOPLE:
            continue
        people.append(
            {
                "name": name,
                "role": (r.get("Role") or "").strip(),
                "year": (r.get("Start Date") or "").strip()[:4],
            }
        )
    return people


def main() -> int:
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_CSV
    if not src.exists():
        raise SystemExit(f"missing staff export: {src}")
    people = load(src)
    featured_names = set(FEATURED)

    out: list[str] = []
    for role, heading, blurb in GROUPS:
        members = [
            p
            for p in people
            if p["role"] == role and p["name"].lower() not in featured_names
        ]
        if not members:
            continue
        members.sort(key=lambda p: p["name"].split()[-1])
        out.append('<div class="roster-group">')
        out.append(f"  <h3 class=\"dsp\">{html.escape(heading)}</h3>")
        if blurb:
            out.append(f'  <p class="lede roster-blurb">{html.escape(blurb)}</p>')
        out.append('  <ul class="roster">')
        for p in members:
            since = (
                f'<span class="roster__since">Since {p["year"]}</span>'
                if p["year"]
                else ""
            )
            out.append(
                f'    <li class="roster__item"><span class="roster__name">'
                f'{html.escape(p["name"])}</span>{since}</li>'
            )
        out.append("  </ul>")
        out.append("</div>")

    OUT.write_text("\n".join(out) + "\n")
    counts = {h: sum(1 for p in people if p["role"] == r) for r, h, _ in GROUPS}
    print(f"wrote {OUT.relative_to(ROOT)}")
    print(f"  {len(people)} people (after filtering system accounts): {counts}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
