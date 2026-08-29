#!/usr/bin/env python3
"""Assemble the static site from src/ into the repo root.

    python3 tools/build.py

Every page in src/pages/ is a body fragment plus a small front-matter block.
The shared chrome (head, header, footer, intro-offer popup) lives once in
src/partials/ and is stitched in here, so the deployed files stay plain static
HTML with no runtime templating.

Front matter is a leading HTML comment:

    <!--
    title: About Oak Cliff Pilates
    description: ...
    path: /about
    nav: about
    og_image: /img/lib/team-bishop-exterior.jpg
    -->

Placeholders available in partials and pages: {{title}}, {{description}},
{{path}}, {{og_image}}, and {{nav_<name>}} which becomes ' aria-current="page"'
on the matching nav link.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
PAGES = SRC / "pages"
PARTIALS = SRC / "partials"

FRONT_MATTER = re.compile(r"\A\s*<!--(.*?)-->", re.S)
INCLUDE = re.compile(r"<!--#include\s+([a-z0-9_-]+)\s*-->")

# Every nav key a page may mark active. Keep in sync with partials/header.html.
NAV_KEYS = ("home", "classes", "studios", "membership", "about", "shop")


def read_front_matter(text: str) -> tuple[dict[str, str], str]:
    match = FRONT_MATTER.match(text)
    if not match:
        raise SystemExit("page is missing its front-matter comment")
    meta: dict[str, str] = {}
    for line in match.group(1).strip().splitlines():
        line = line.strip()
        if not line or ":" not in line:
            continue
        key, value = line.split(":", 1)
        meta[key.strip()] = value.strip()
    return meta, text[match.end():].lstrip("\n")


def expand(text: str, partials: dict[str, str], depth: int = 0) -> str:
    if depth > 5:
        raise SystemExit("include nesting too deep — check for a cycle")

    def sub(match: re.Match[str]) -> str:
        name = match.group(1)
        if name not in partials:
            raise SystemExit(f"unknown partial: {name}")
        return expand(partials[name], partials, depth + 1)

    return INCLUDE.sub(sub, text)


def fill(text: str, meta: dict[str, str]) -> str:
    active = meta.get("nav", "")
    values = {
        "title": meta.get("title", "Oak Cliff Pilates"),
        "description": meta.get("description", ""),
        "path": meta.get("path", "/"),
        "og_image": meta.get("og_image", "/img/og-image.jpg"),
    }
    for key in NAV_KEYS:
        values[f"nav_{key}"] = ' aria-current="page"' if key == active else ""

    def sub(match: re.Match[str]) -> str:
        name = match.group(1)
        if name not in values:
            raise SystemExit(f"unknown placeholder: {{{{{name}}}}}")
        return values[name]

    return re.sub(r"\{\{([a-z0-9_]+)\}\}", sub, text)


FAQ_Q = re.compile(r'<button class="faq-q"[^>]*>\s*<span>(.*?)</span>', re.S)
FAQ_A = re.compile(r'<(p|div) class="faq-a">(.*?)</\1>', re.S)
TAGS = re.compile(r"<[^>]+>")


def plain(html: str) -> str:
    """Strip tags and unescape the few entities the copy actually uses."""
    text = TAGS.sub("", html)
    for a, b in (("&amp;", "&"), ("&nbsp;", " "), ("&#39;", "'"), ("&quot;", '"')):
        text = text.replace(a, b)
    return " ".join(text.split())


def faq_schema(html: str, path: str) -> str:
    """Build FAQPage JSON-LD from the page's own accordion markup.

    Generated rather than hand-written so the structured data can never drift
    from the copy a visitor actually reads."""
    questions = FAQ_Q.findall(html)
    answers = [m[1] for m in FAQ_A.findall(html)]
    if not questions or len(questions) != len(answers):
        return ""
    import json

    entities = [
        {
            "@type": "Question",
            "name": plain(q),
            "acceptedAnswer": {"@type": "Answer", "text": plain(a)},
        }
        for q, a in zip(questions, answers)
    ]
    data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": f"https://oakcliffpilates.com{path}#faq",
        "mainEntity": entities,
    }
    return (
        '<script type="application/ld+json">\n'
        + json.dumps(data, indent=2, ensure_ascii=False)
        + "\n</script>\n"
    )


def main() -> int:
    if not PAGES.is_dir():
        raise SystemExit(f"missing {PAGES}")
    partials = {p.stem: p.read_text() for p in PARTIALS.glob("*.html")}

    built = []
    for page in sorted(PAGES.glob("*.html")):
        meta, body = read_front_matter(page.read_text())
        html = fill(expand(body, partials), meta)
        schema = faq_schema(html, meta.get("path", "/"))
        if schema:
            html = html.replace("</body>", schema + "</body>", 1)
        out = ROOT / page.name
        out.write_text(html)
        built.append((page.name, len(html)))

    for name, size in built:
        print(f"  {name:<32} {size / 1024:6.1f} KB")
    print(f"built {len(built)} page(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
