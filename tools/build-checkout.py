#!/usr/bin/env python3
"""Generate one page per pricing option, each with Arketa's checkout embedded.

    python3 tools/build-checkout.py && python3 tools/build.py

Writes src/pages/pricing-<slug>.html for every entry in OPTIONS, each mapping
to /pricing/<slug>. Generated rather than hand-written so the name, price and
checkout ID on the page can never drift from this table — and so a price change
is one edit, not fourteen.

The checkout IDs come from the Buy-now links already on /pricing. Arketa serves
those pages without X-Frame-Options or a frame-ancestors policy, so they frame
cleanly; card details are still entered on Arketa's own origin.

Every page also links out to the same checkout in a new tab. That is not
decoration: payment flows can hit redirects — 3-D Secure, Apple Pay and Google
Pay sheets — that need a top-level window and will not complete inside a frame.
If the embed fails for a customer, the way through is one click away.
"""
from __future__ import annotations

import html
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "src" / "pages"
CHECKOUT = "https://app.arketa.co/oakcliffpilates/pricing/checkout/"

# slug, name, price, unit, blurb, [what you get], arketa id, group
OPTIONS = [
    ("3-classes-for-25", "3 classes for $25", "$25", "three classes · new clients",
     "The way most people start. Three classes for $25, good at any of the three studios, valid for 30 days.",
     ["Three classes for $25 — save over 70%",
      "Use them at Bishop Arts, Uptown or Lower Greenville",
      "Any class on the schedule",
      "Valid for 30 days from purchase",
      "New clients only, one per person"],
     "CX8QBVvU6bdj31zrkZbR", "Intro offer"),

    ("intro-1-week", "New Client Special: 1 Week Unlimited", "$59", "one week · one charge",
     "A full week of unlimited classes for $59. Come every day if you like — it is the fastest way to find out whether this is your room.",
     ["Unlimited classes for one week",
      "Any of the three studios",
      "First-time clients only",
      "A single $59 charge — one week, not a rolling subscription"],
     "08dxQyFUSU4GA782eKIz", "Intro offer"),

    ("intro-10-classes", "New Client Special: 10 Classes", "$145", "ten classes · new clients",
     "Ten classes for $145 — half price, and $14.50 a class. Enough time to learn the room and find your rhythm before you commit to anything.",
     ["10 classes for $145 — 50% off",
      "Just $14.50 a class",
      "Use them at Bishop Arts, Uptown or Lower Greenville",
      "New clients only"],
     "1oNxHZVRsxdC7ZWnwTBl", "Intro offer"),

    ("2-week-unlimited", "2 Weeks Unlimited at Lower Greenville", "$89", "two weeks · one charge",
     "Two weeks of unlimited classes at the Lower Greenville studio for $89. The fullest way to try us — come every day if you want to.",
     ["Unlimited classes for two weeks",
      "Lower Greenville studio only",
      "First-time clients",
      "A single $89 charge — one two-week cycle, not a rolling subscription"],
     "WSLz8MOzUJWkNEsT0f0U", "Intro offer"),

    ("ocp-lite", "OCP Lite", "$99", "per month · 4 classes",
     "Four classes a month, about $25 a class. The lightest way to keep a habit going without paying for time you will not use.",
     ["4 classes every month", "Any studio, any class on the schedule",
      "Works out around $25 a class", "No contract — cancel any time",
      "Pause for up to 3 months with 10 days' notice"],
     "gYObz3tkIvdiQ3bpDY1d", "Monthly membership"),

    ("perfect-balance", "Perfect Balance", "$159", "per month · 8 classes",
     "Eight classes a month, about $20 a class. Two a week, which is where most people start seeing the change.",
     ["8 classes every month", "Any studio, any class on the schedule",
      "Works out around $20 a class", "No contract — cancel any time",
      "Pause for up to 3 months with 10 days' notice"],
     "KmE2dXriA9fNXuzDfQP2", "Monthly membership"),

    ("the-regular", "The Regular", "$189", "per month · 12 classes",
     "Twelve classes a month, under $16 a class. Three a week, and the best value short of going unlimited.",
     ["12 classes every month", "Any studio, any class on the schedule",
      "Works out at less than $16 a class", "No contract — cancel any time",
      "Pause for up to 3 months with 10 days' notice"],
     "wlgHQnoJYB4Wctdkdol5", "Monthly membership"),

    ("unlimited", "I’m Obsessed: Unlimited Pilates", "$209", "per month · every class",
     "Every class at every studio, plus the perks. Our most popular membership, and the one that pays for itself fastest.",
     ["Every class, every studio, as often as you like",
      "VIP perks and priority waitlist", "Free guest passes to share",
      "No contract — cancel any time",
      "Pause for up to 3 months with 10 days' notice"],
     "NYH9dctoUSiY9llrTpDz", "Monthly membership"),

    ("3-month-unlimited", "I’m Really Obsessed: 3 Months of Unlimited Pilates", "$599", "three months · around $10 a class",
     "Unlimited classes for three months, paid up front. Around $10 a class at twenty classes a month.",
     ["Unlimited classes for three months", "Every studio, every class",
      "Around $10 a class at 20 classes a month",
      "Auto-renews every three months — turn it off any time"],
     "S1dYzKADWZfO5g3WCSja", "Unlimited terms"),

    ("6-month-unlimited", "Completely Obsessed: 6 Months of Unlimited Pilates", "$1,159", "six months · around $10 a class",
     "Six months of unlimited classes paid up front — the middle ground between the quarterly and the year, and our best mid-term value.",
     ["Unlimited classes for six months", "Every studio, every class",
      "Around $10 a class at 20 classes a month",
      "Renews every six months at $1,159 until you cancel"],
     "P1oBISrBIaTZXf0eO0Jb", "Unlimited terms"),

    ("annual-unlimited", "One Year of Unlimited Pilates", "$2,299", "twelve months · around $10 a class",
     "A year of unlimited classes paid up front — about $209 less than twelve months at the monthly rate, which is a month for nothing.",
     ["Unlimited classes for a full year", "Every studio, every class",
      "Around $10 a class at 20 classes a month",
      "About $209 less than paying monthly — effectively a free month",
      "Priority booking and exclusive perks all year",
      "Renews yearly at $2,299 until you cancel"],
     "BrarwgDVt2JrdSuJ5MJG", "Unlimited terms"),

    ("couples-unlimited", "Couples unlimited", "$359", "per month · two people",
     "Unlimited classes for two under one plan, at $359 a month. Separate accounts, so you each book your own — come together or go your own way.",
     ["Unlimited classes for two people", "$359 a month for the pair",
      "Separate accounts — book together or apart",
      "For partners, roommates or best friends",
      "Every studio, every class"],
     "mRf1xuUpq5Y8Cc46uWHA", "Unlimited terms"),

    ("drop-in", "Drop-in", "$30", "one class",
     "A single class at any studio, no membership and no commitment. Valid for a year, so it keeps.",
     ["One class at any of the three studios", "No membership needed",
      "Valid for one year from purchase"],
     "HMAAJpLWI7lybG9wkOzB", "Class packs"),

    ("10-classes", "10 sessions", "$290", "ten classes · $29 each",
     "Ten classes at $29 each. The pack for people who want to come regularly without a monthly plan.",
     ["10 classes at any studio", "$29 a class", "No membership needed",
      "Valid for one year from purchase"],
     "7VMqKsEU9oh3e7baJ8Kl", "Class packs"),

    ("20-classes", "20 sessions", "$560", "twenty classes · $28 each",
     "Twenty classes at $28 each, and a full year to use them.",
     ["20 classes at any studio", "$28 a class", "No membership needed",
      "Valid for one year from purchase"],
     "g7KcUgVtiEt8wlwWSZt4", "Class packs"),

    ("40-classes", "40 sessions", "$1,080", "forty classes · $27 each",
     "Forty classes at $27 each — the lowest per-class rate outside a membership.",
     ["40 classes at any studio", "$27 a class — our best pack rate",
      "No membership needed", "Valid for one year from purchase"],
     "RH2skxiwBQ8DCnwLg0yG", "Class packs"),
    # ── Private & Duo. Duo is Lower Greenville only; both parties must buy. ──
    ("private-session", "Private session", "$150", "one session · one-on-one",
     "One-on-one on the Cadillac Reformer with an expert instructor. For newcomers who want a proper start, and for regulars refining something specific.",
     ["A single one-on-one session", "On the Cadillac Reformer",
      "Programmed around your goals and any injuries",
      "Available at Uptown and Lower Greenville"],
     "6x7hpl3PmUgALC4YRQhc", "Private Pilates"),

    ("private-4-sessions", "4 private sessions", "$560", "four sessions · $140 each",
     "Four private sessions at $140 each — enough to refine your technique properly rather than just sample it.",
     ["4 one-on-one sessions", "$140 a session",
      "On the Cadillac Reformer", "Available at Uptown and Lower Greenville"],
     "2U4G67CfYbAvCGegzpXp", "Private Pilates"),

    ("private-8-sessions", "8 private sessions", "$1,080", "eight sessions · $135 each",
     "Eight private sessions at $135 each. Built for consistency, and the pack where progress actually shows.",
     ["8 one-on-one sessions", "$135 a session — our lowest private rate",
      "On the Cadillac Reformer", "Available at Uptown and Lower Greenville"],
     "v1MSrWCqNTBoYcxIAmUE", "Private Pilates"),

    ("duo-session", "Duo session", "$100", "one session · per person",
     "A private session for two, on side-by-side Cadillac Reformers. Bring a partner, a friend or a family member.",
     ["A single session for two people", "$100 per person",
      "Both parties must purchase separately",
      "Lower Greenville only"],
     "taFTgV3J9hGvPhPYNhlu", "Duo Pilates"),

    ("duo-4-sessions", "4 duo sessions", "$380", "four sessions · $95 each",
     "Four duo sessions at $95 a person, each — the two of you, side by side, four times over.",
     ["4 sessions for two people", "$95 per person, per session",
      "Both parties must purchase separately", "Lower Greenville only"],
     "SFD92VZ1z7RYL0g6qKzb", "Duo Pilates"),

    ("duo-8-sessions", "8 duo sessions", "$720", "eight sessions · $90 each",
     "Eight duo sessions at $90 a person, each. The best rate we do on the Cadillac Reformer for two.",
     ["8 sessions for two people", "$90 per person, per session — our best duo rate",
      "Both parties must purchase separately", "Lower Greenville only"],
     "XZ35wf4UHfJp895mGcAa", "Duo Pilates"),
]

TEMPLATE = """<!--
title: {name} — Oak Cliff Pilates{price_title}
description: {desc}
path: /pricing/{slug}
nav: membership
og_image: /img/lib/uptown-reformers.jpg
-->
<!--#include head-->
<!--#include header-->

<main id="main">

<section class="band" id="top" style="padding-top:calc(88px + 56px)">
  <div class="wrap">

    <div class="crumbs"><a href="/">Home</a><span aria-hidden="true">&middot;</span><a href="/pricing">Pricing</a><span aria-hidden="true">&middot;</span><span>{name}</span></div>

    <div class="co-head" style="margin-top:20px">
      <div>
        <span class="badge badge--outline">{group}</span>
        <h1 class="dsp" style="font-size:clamp(2.4rem,5vw,3.6rem);margin:16px 0 0">{name}</h1>
      </div>
      {price_block}
    </div>
    <p class="lede" style="max-width:60ch">{blurb}</p>

    <div class="co-layout" style="margin-top:56px">
      <div>
        <div class="co-frame">
          <iframe src="{url}" title="Secure checkout for {name}" loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <p class="co-note">Checkout is provided by Arketa, our booking system &mdash; your card details go
          straight to them and are never handled by this site. If the form does not load, or your bank
          asks for an extra confirmation step,
          <a href="{url}" target="_blank" rel="noopener">open the checkout in a new tab</a> to finish there.</p>
      </div>

      <aside class="co-aside">
        <div class="co-panel">
          <h2 class="dsp">What you get</h2>
          <ul class="ticks">
{ticks}
          </ul>
        </div>
        <div class="co-panel">
          <h2 class="dsp">Not sure yet?</h2>
          <p style="margin-top:12px;font-size:var(--type-body-sm);color:var(--text-secondary)">Compare every option side by side, or start with three classes for $25.</p>
          <div class="btn-row" style="margin-top:20px">
            <a class="btn btn--secondary btn--full" href="/pricing"><span>All pricing</span></a>
            <a class="btn btn--ghost btn--full" href="/schedule"><span>See the schedule</span></a>
          </div>
        </div>
      </aside>
    </div>

  </div>
</section>

</main>
<!--#include footer-->
<!--#include popup-->
<!--#include schema-org-->
<!--#include scripts-->
{offer}
"""


def offer_schema(slug, name, price, blurb):
    """Offer JSON-LD. First-party pricing for our own product, generated from
    the same row that renders the page so the two cannot disagree."""
    data = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "@id": f"https://oakcliffpilates.com/pricing/{slug}#offer",
        "name": name,
        "description": blurb,
        "url": f"https://oakcliffpilates.com/pricing/{slug}",
        "availability": "https://schema.org/InStock",
        "seller": {"@id": "https://oakcliffpilates.com/#organization"},
    }
    if price:
        data["price"] = price.replace("$", "").replace(",", "")
        data["priceCurrency"] = "USD"
    return ('<script type="application/ld+json">\n'
            + json.dumps(data, indent=2, ensure_ascii=False) + "\n</script>")


def main() -> int:
    for slug, name, price, unit, blurb, gets, aid, group in OPTIONS:
        if price:
            price_block = (f'      <div class="co-price"><span class="co-price__n">{price}</span>'
                           f'<span class="co-price__unit">{html.escape(unit)}</span></div>')
            price_title = f" | {price}"
        else:
            # Couples has no published price — the checkout is the source of truth.
            price_block = ('      <div class="co-price"><span class="co-price__unit">'
                           'Price shown at checkout</span></div>')
            price_title = ""
        ticks = "\n".join(f"            <li>{html.escape(g)}</li>" for g in gets)
        (PAGES / f"pricing-{slug}.html").write_text(TEMPLATE.format(
            slug=slug, name=html.escape(name), price_block=price_block,
            price_title=price_title, unit=html.escape(unit),
            blurb=html.escape(blurb), desc=html.escape(blurb),
            group=html.escape(group), ticks=ticks, url=CHECKOUT + aid,
            offer=offer_schema(slug, name, price, blurb),
        ))
    print(f"  {len(OPTIONS)} checkout page(s) written to src/pages/pricing-*.html")
    print("  next: python3 tools/build.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
