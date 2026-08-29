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

## 5. From the blog posts (added later)

Nine posts are live at `/blog`. These came out of porting them.

### Contradictions

| Fact | In the blog copy | Everywhere else | What the site says |
| --- | --- | --- | --- |
| Lower Greenville address | **1906 Greenville Ave** (grand-opening post) | **2000 Greenville Ave** | ✅ **Resolved — 2000 Greenville Ave confirmed.** All 16 instances match; the post carries it too |
| Number of studios | &ldquo;Bishop Arts to **Downtown**, Uptown, and Lower Greenville&rdquo; (2025 award post); &ldquo;Oak Cliff Pilates **Downtown**&rdquo; (2024 CBS caption) | Three studios, no Downtown | ✅ **Resolved — OCP Downtown is closed.** Three studios only. No reference remains (the two lowercase &ldquo;downtown&rdquo; mentions are geography, not a location) |
| Instructor certification | &ldquo;minimum **500 hours** training&rdquo; (beginner guide) | OCPA is a **300-hour** programme | ✅ **Resolved — 300 hours.** The guide now names 300 as the benchmark and links to the academy |
| Drop-in price | **$35–45** (beginner guide) | **$30** | Labelled as Dallas market range, with a link to your real pricing |
| Unlimited | **$180–250/mo** (beginner guide) | **$99–209** | Same — market range, linked to /pricing |
| Class packs | a **5-class** pack (beginner guide) | 10 / 20 / 40 | Left in the market-range paragraph only |
| Reformers at LG | **14** (grand-opening post) | 14 machines / 12 per class | Consistent — the earlier flag is resolved |

### Broken links I replaced in the beginner's guide

- **&ldquo;Book Your First Beginner Class&rdquo;** pointed at `wellnessliving.com/schedule/oak_cliff_pilates` — your **old booking platform**. Now points at `/intro-offers`.
- **&ldquo;Learn About Our Intro Specials&rdquo;** pointed at `https://claude.ai/pilates-intro-offers-and-discounts/` — a mangled URL on the wrong domain entirely. Now `/pricing`.
- Two posts had CTAs with `href="#"` (&ldquo;oakcliffpilates.com/schedule&rdquo;, &ldquo;oakcliffpilates.com/lowergreenville&rdquo;). Now real internal links.

### Other calls

- **The beginner&rsquo;s guide was an unpublished draft** (`?page_id=3087&preview=true`). I published it because you sent it — **say the word if it wasn&rsquo;t ready.** Its title said &ldquo;2025&rdquo;, its footer said &ldquo;Last updated January 2026&rdquo;, and it was created August 2026; I dropped the year rather than pick one.
- Its byline was **&ldquo;Kenko&rdquo;** (an agency or plugin account). Published under Oak Cliff Pilates.
- The 2024 CBS post said **&ldquo;over 90 classes per week at our main studio&rdquo;** — true in 2024, stale now. Cut rather than updated, since it was describing that moment.
- **Voyage Dallas** (2024) says &ldquo;over 450 members&rdquo; and describes the October 2022 move. Left verbatim — it&rsquo;s an archived interview, and readers can see the date.
- **Old post URLs redirect.** `vercel.json` 301s every dated WordPress permalink (`/2026/08/06/dont-tell-yourself-no-…`) to its new `/blog/…` URL, plus `/news` and the four `/category/…` archives. Nothing that&rsquo;s been shared or indexed will 404.
- **YouTube videos don&rsquo;t load until clicked.** Each post shows a poster and a play button; the player is only injected on click, and then from `youtube-nocookie.com`. Keeps ~1 MB of Google JS and its cookies off every page view.

### Still missing

Four posts are referenced from the ones you sent but you haven&rsquo;t sent their copy, so they aren&rsquo;t on the site yet:

- Meet Kiel Jared of Oak Cliff Pilates (July 8, 2026)
- Five Years Later (June 25, 2026)
- From Pilates in the park to three Dallas studios (March 5, 2026)
- Pilates in the Park: Tietze Park Series Recap (October 4, 2025)
- Art &amp; Movement: Pilates at Gallery DeFi, Rio Jiu-Jitsu, Happy Hour at Leela&rsquo;s (Dec 2025 events)

Send any of them and they drop straight in.
