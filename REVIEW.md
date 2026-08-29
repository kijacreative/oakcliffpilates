# Copy conflicts & open items

Everything here came out of building the pages. Nothing is broken — these are places
where the source copy disagreed with itself, or where I had to make a judgement call.
Grouped by how much they matter.

## 1. Numbers that contradict each other

These appear differently in different source documents. I picked one and noted it —
please confirm which is right, then it only needs changing in one place.

| Fact | Value A | Value B | What the site says |
| --- | --- | --- | --- |
| "The Regular" membership | **$189** (homepage design, current site) | **$192** (your pricing-page schema block) | ✅ **Resolved — $189/mo confirmed.** The $192 in your old schema block was wrong |
| Class length | **45 min** (homepage design, location pages) | **50 min** (your FAQ, "How long is a typical Pilates class") | ✅ **Resolved — always 45 minutes.** The FAQ answer is corrected; 45 now appears in all 8 places, 50 in none |
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
  studio? — CONFIRM parking details with Kiel before publish."* That internal note was
  never published. ✅ **Resolved** — the real answer is now on the Lower Greenville page
  and in its FAQ: the lot next to the studio on Oram St. first, then street parking and
  the neighbouring lots, watching for "do not park" signs.
  **⚠️ One dated claim:** it also says validated parking "is coming from 17 September;
  it is not active yet." That sentence goes stale the moment validation switches on —
  update it then, and note I wrote no year, so confirm 17 September 2026 is right.
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

1. ✅ **Lead capture is wired** to the Arketa new-client intake form.
   **How, and why not the way you might expect:** that URL
   (`app.arketa.co/oakcliffpilates/intake-form/84hxQjyQ8Va2RFHvUgxE`) is a **hosted HTML
   page, not an API**. Posting the popup's fields to it would have been blocked by the
   browser as a cross-origin request and the lead would have vanished silently — the
   exact bug we were fixing. So instead of collecting name, email and phone in the popup
   and forwarding them, the popup now hands the visitor straight to your form, which is
   where the lead actually gets created. It also means no one types their details twice,
   and the link works with JavaScript disabled. The footer signup does the same.
   **If you would rather keep the fields on our side**, you need a real endpoint — a
   Zapier catch hook, a form service, or Arketa's API if they expose one — and I will
   wire the original POST back up to it.
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

## 6. The community page (`/community`)

Built from the list of event types you sent. The **names, parks, restaurants and
retreat destinations are all yours, verbatim.** The one-line descriptions under
each are not — you gave me names only, so I wrote them.

### ✅ Descriptions — resolved

All four now use the copy you sent, with the real names, cadences and partners:
Zak/Oliver/Pepe on Gentlemen&rsquo;s Night, Caitlin on the monthly Friday happy hour,
Amanda Lauro and Forbidden Books on the Uptown book club, and Athena described
properly as being for women in perimenopause or menopause and the people around
them. The earlier guesses are gone.

### ⚠️ The featured Athena event is dated — it expires 26 September

The full event sits on `/community` under `#athena`: time, price, the three
experiences, the vendor stations, the goody bag, the attire note. **That block
needs replacing or removing once the date passes** — it is the only hardcoded
date on the page, and the only thing there that can go stale. Everything else
points at `/events`.

Three things to confirm on it:

1. **The year.** You wrote &ldquo;Sep 26&rdquo;; I published *Saturday 26 September* with no
   year. 26 September 2026 is a Saturday, so that checks out — but confirm.
2. **Dr. Chowdhry&rsquo;s name and title.** Published as written, attributed to Tailored
   Health and Aesthetics. Worth checking the spelling before a doctor&rsquo;s name goes
   on your site.
3. **The wellness services.** The page lists acupuncture, ear seeding, a hydration
   facial, and discounted **B12 and Hydrate &amp; Glow injections**, plus a talk on
   hormone balance. I published these factually, as services vendors are providing
   — no health claims added. Given they are medical and cosmetic procedures offered
   by third parties, **consider whether you want a short disclaimer** naming the
   vendors as independent providers. Your call, not mine, but it is the kind of
   thing worth deciding deliberately.

### Other calls on this page

- **Pilates in the Park** is the one I could write with confidence — your own About
  and blog copy describe the free mat classes that started at Kidd Springs Park in
  2016. ✅ **Resolved — Kidd Springs is history, not a venue.** The page now says so
  outright: &ldquo;We have moved on from Kidd Springs, but not from the idea,&rdquo; and the
  location list is headed *Where we set up now*.
- **Retreat tenses.** ✅ **Resolved — Belize and Costa Rica have both been.** The
  section is now split: *Next up* carries Greece 2027 on its own card with a link to
  watch for dates, and *Where we&rsquo;ve been* lists Costa Rica 2026 and Belize 2025.
  Greece is the only one presented as bookable.
- **Every section links to `/events`** for live dates — eight links in total — because
  that page carries the Arketa feed. Nothing on `/community` hardcodes a date, so it
  won&rsquo;t go stale.
- **A mislabelled image.** `img/lib/park-group` is not a park: it&rsquo;s the team posed
  outside the Bishop Arts storefront. The real park photography is `park-lawn` and
  `park-first-class`, which is what this page uses. `events.html` still uses
  `park-group` — harmless there, but the slug should be renamed. Noted in MEDIA.md.

## 7. The Google reviews feed

Built as a build-time pipeline rather than a widget: `tools/fetch-reviews.py`
pulls from the Places API into `src/data/reviews.json`, `tools/build-reviews.py`
renders `src/partials/reviews.html`, and the homepage includes it. Branded with
the site's own tokens — gold stars, display-type score, studio label per card.

### ⚠️ It is not live yet, and it needs two things from you

1. **A Google Places API key.** Create one in Google Cloud with the Places API
   enabled. The script reads it from `GOOGLE_MAPS_API_KEY` so it never reaches
   the repo or the browser — do not paste it into a file.
2. **The three place IDs**, filled into `PLACES` at the top of
   `tools/fetch-reviews.py`. Open each studio on Google Maps and take the
   `place_id` from the share URL.

Until both exist, the homepage renders the **original EmbedSocial widget**, exactly
as before. Nothing regressed, and **no placeholder review was written** — I built and
tested the layout with obviously-synthetic strings and deleted them before committing.
Every review that ever appears will be one a real person left on Google.

### Things to know before you switch it on

- **Google returns at most five reviews per place.** Three studios means a ceiling
  of fifteen. The component shows up to twelve. It is a curated wall, not a
  complete archive, and the copy does not claim otherwise.
- **Places content may not be cached beyond 30 days** under Google's terms, so the
  fetcher needs re-running monthly. A cron on the build box or a line in your
  deploy script covers it.
- **The section heading is hardcoded** to "600+ verified 5 star reviews" while the
  feed prints the live count beneath it. If the real total ever drops below 600
  those two disagree. Worth making the heading vaguer, or generating it too.
- **I did not add `aggregateRating` structured data.** Google's own guidelines say
  not to mark up ratings collected from a third-party site as your own. Adding it
  risks a manual action, and the visible number does the persuasive work anyway.
- **Reviews under 4★ are filtered out** (`MIN_RATING` in the fetcher). That is a
  normal marketing choice, not a neutral feed — flagging it so it is your decision
  and not a silent default. Set it to 0 to publish everything.

## 8. Checkout pages — and a pricing error they caught

18 pages at `/pricing/<slug>`, one per option, each embedding Arketa's checkout.
Every Buy-now link across the site now routes through them rather than jumping
straight to Arketa.

### 🔴 Your annual membership was advertised $300 under what it charges

Before publishing I loaded all 18 Arketa checkouts and compared the price each
one actually charges against the price the site claimed. Sixteen matched. Two
did not:

| | Site said | Arketa charges | Now |
| --- | --- | --- | --- |
| **1 year unlimited** | **$1,999** | **$2,299** | ✅ Corrected to $2,299 |
| **Couples unlimited** | "See the price" | **$359 / month** | ✅ Published |

The $1,999 came from the WordPress pricing page I built from. **It has been
wrong on your live site**, so it is worth checking whether anyone bought at the
advertised price and what you owe them.

Two derived claims went with it. The page said the annual plan was "around $9 a
class and nearly $300 saved". At $2,299 it is around **$10** a class at twenty
a month, and **about $209** less than twelve months of monthly billing — which
is near enough a free month, and how it now reads.

### Notes

- **Every price on the site is now verified against Arketa**, not just copied
  from the old page. Re-run that check whenever prices change; the method is in
  the README.
- **Arketa's own product names differ from ours** in a few places — its
  Unlimited is "I'm Obsessed: Unlimited Pilates", the quarterly is "I'm Really
  Obsessed". Customers will see those names inside the checkout frame. Ours are
  the friendlier ones from your pricing page; worth a glance to check the
  mismatch does not read as an error.
- **Payment inside an iframe has a known failure mode.** 3-D Secure and wallet
  sheets need a top-level window. Every page therefore carries a visible "open
  the checkout in a new tab" link directly under the frame, so a customer who
  hits it is one click from finishing rather than stuck.
- **Three intro offers still have no checkout page**: the $59 one-week, the
  $145 ten-class, and the $89 two-week. Their buttons point at the general
  Arketa site because no per-product checkout URL exists for them in the copy
  you sent. Send those three URLs and they take about a minute each.
