# Copy conflicts & open items

Everything here came out of building the pages. Nothing is broken — these are places
where the source copy disagreed with itself, or where I had to make a judgement call.
Grouped by how much they matter.

## 1. Numbers that contradict each other

These appear differently in different source documents. I picked one and noted it —
please confirm which is right, then it only needs changing in one place.

| Fact | Value A | Value B | What the site says |
| --- | --- | --- | --- |
| "The Regular" membership | **$189** (homepage design, current site) | **$192** (your pricing-page schema block) | $189 |
| Class length | **45 min** (homepage design, location pages) | **50 min** (your FAQ, "How long is a typical Pilates class") | Both — 45 on location pages, 50 in the FAQ answer as written |
| Classes per week | **250+** (homepage design) | **over 150** (your pricing page, unlimited card) | 250+ |
| Class cap | **12** everywhere | FAQ adds **"beginner classes capped at 8"** | Both, as written |
| Lower Greenville | **14 reformers** (locations copy) | **capped at 12 per class** (LG copy) | Both (14 machines / 12 cap reads fine, but confirm) |
| Private session length | **"55 Minutes"** (heading) | **"a full 60-minute session"** (body, and welcome page) | Neither — I left the number out until you confirm |
| Private Pilates "from" | title **"From $140"** | body **"from $150"** | "From $135 a session" (the true 8-pack rate) |
| Visitor class packs | welcome page offers a **5-class** pack | pricing page has **10 / 20 / 40** | "class package" (no size named) — there is no 5-pack |

**Also:** your pricing page's meta description says "from $8 per class". The lowest rate
on the page is $9 (1-year unlimited at 20 classes/month). I used $25 in the new title.

## 2. Things I deliberately did not publish

- **Lower Greenville FAQ.** Your copy read: *"Is there parking at the Lower Greenville
  studio? — CONFIRM parking details with Kiel before publish."* That is an internal
  note, so it is not on the site. The published answer uses the line from your own body
  copy: "Convenient street parking is available nearby on and around Greenville Avenue."
  **This still needs your confirmation.** (Your main FAQ says something more specific —
  Oram St. has an open lot — which may be the better answer.)
- **Academy accreditation FAQ.** The draft answer was an editorial note to yourself
  ("Accreditation/recognition details from Kajabi programme — this is the highest-value
  FAQ if the programme carries recognised accreditation"). Not published. If OCPA carries
  a recognised accreditation, that FAQ is worth adding.
- **"Best of Dallas for four consecutive years"** (academy draft) conflicts with
  "Best of Oak Cliff, three years running (2021, 2022, 2023)" on the locations copy.
  I used the specific, dated claim and dropped the four-year one.
- **Staff contact details.** The Arketa export has every staff member's email, phone
  number and birthday. None of it is on the site — the team page publishes names, roles
  and start year only. Keep it that way.
- **Non-person accounts.** The export includes five booking/system logins — Front Desk,
  Staff General Account, Private Pilates, OCP Events, Charley Test. Filtered out of the
  roster (see `NOT_PEOPLE` in `tools/build-team.py`). 49 real people are listed.

## 3. Errors I corrected

- **Bishop Arts FAQ** gave the address as "96 W Davis St #140" and "WDavis St".
  Corrected to 196 W Davis St, matching every other page.
- **FAQ answer mismatch.** "I'm new to Pilates. Do you have beginner classes?" was
  answered with text about instructor certifications. I gave it a beginner-appropriate
  answer and moved the certification text to its own question
  ("What certifications do your instructors have?").
- **Academy draft CTAs** ("Book a call with our training team", "View the Full
  Programme", "Explore Programme", "Ask a Question") all had empty or `#` hrefs. They now
  point at the real registration and course-detail URLs from your Fall 2026 copy.
- **Duplicated content.** The About page's "In June 2021…" paragraph appeared twice; the
  classes page's carousel slides were pasted several times over; the FAQ page repeated
  several questions across sections. All deduplicated.

## 4. Still to wire before launch

1. **`LEAD_ENDPOINT` in `js/site.js` is empty.** The intro-offer popup collects a name,
   email and phone on step 2 and then **discards them**. Point it at your CRM / Zapier /
   form service and both the popup and the footer signup start posting
   `{source, name, email, phone, reason}`.
2. **Couples Unlimited has no published price** — your copy gave the per-session figure
   ($9) but not the total. The card links to checkout and says "See the price".
3. **Two weak images.** `img/lib/uptown-awning-letters` (547×365, tight sign crop) and
   the old `img/class-other.jpg` are the only low-resolution sources; everything else came
   from 1920×1080 or 1080×1350 originals.
4. **Shop link.** The header "Shop" now points at the new internal `/retail` page rather
   than the Framer site. Confirm that's what you want.
5. **The phone number** (469) 949-5306 appears on the Uptown, private, parties, retail and
   welcome pages. I did not put it in the global header — confirm whether it's the
   company-wide number or Uptown's.
6. **Uptown opening date** is not in any copy you sent, so the Uptown page has no "est."
   stat (Bishop Arts has June 2021, Lower Greenville has late 2025).
