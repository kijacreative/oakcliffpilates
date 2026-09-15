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

## 7. The Google reviews feed — ✅ live

You sent three RevuBlast widget snippets to stack on the homepage. I didn't
stack them. Those widgets talk to an API that turned out to be readable with
the tokens already in the embed codes, so instead of three vendor carousels
the homepage now has **one feed, all three studios, in our own styling**.

`tools/fetch-reviews.py` pulls every studio from
`server.onlinereviews.tech/api/v0.0.9`, `tools/build-reviews.py` renders
`src/partials/reviews.html`, the homepage includes it. **No third-party
JavaScript runs on the homepage at all now** — the old EmbedSocial loader is
gone from the page and the reviews are plain HTML a crawler can read.

Live numbers as of this build: **4.8 out of 5 across 566 Google reviews** —
Bishop Arts 4.8 (427), Uptown 4.9 (112), Lower Greenville 5.0 (27).

### 🔴 Two numbers on the site were overstated — corrected

- The homepage heading read **"600+ verified 5 star reviews."** The real total
  is 566, and the average is 4.8, so "5 star" was wrong twice over. Changed to
  "500+ verified reviews across three studios" — true now and still true as
  the count grows.
- `/intro-offers` claimed **"4.9 · Excellent · 600+ verified reviews."**
  Changed to 4.8 and 500+.

Re-run the fetcher monthly, and re-check those two lines when you do.

### Calls I made, so you can overrule them

- **Cards show reviews between 80 and 420 characters.** A two-word review
  looks like an empty card and a 900-word one runs off the screen. **Nothing
  is ever truncated** — a review is shown whole or not at all.
- **Twelve cards, dealt round-robin across the studios.** Strict newest-first
  buried Lower Greenville entirely; it is the youngest studio with the fewest
  reviews, so Bishop Arts and Uptown took every slot.
- **Reviews under 4★ are filtered out** (`MIN_RATING`). A marketing choice,
  not a neutral feed. Set it to 0 to publish everything. As it happens none
  were dropped this run — of the 116 fetched, 115 are 5★ and one is 4★.
- **Names are published exactly as Google has them**, from "Caitlin P" to
  "Monette DeBaun Stransom" to "LuxeGiving LLC". Shortening them would be
  editing someone's attribution.
- **No `aggregateRating` structured data**, and I want to flag that I briefly
  added it and then took it back out. Google's structured-data policy for
  local businesses says not to mark up ratings collected from a third-party
  site as your own — these are Google's reviews read back through RevuBlast.
  It risks a manual action, and the visible 4.8 persuades just as well.
- **The Places API route is abandoned.** It needed a billing key and capped at
  five reviews per studio; this needs no key and returns fifty. If you already
  made a key for it, you can delete it.

### One thing to check

The RevuBlast endpoint is public — it needs no key, which is what makes this
work — but it is **their** endpoint, not a documented public API. If they ever
change it, `fetch-reviews.py` fails loudly and the committed
`src/data/reviews.json` keeps the site working until it is fixed. Nothing
breaks silently, and nothing is ever invented to fill a gap.

## 8. The intro popup and where leads go

You asked for the popup to show only the $59 week, then the lead form, and
asked whether a native form could pass to Arketa. It can, with one relay in
between. What is built:

**Timing.** Opens 3 seconds into a first visit, on every page (all 51 carry
it), then stays quiet for 30 days. Recorded in a cookie *and* localStorage —
either counts as seen, so clearing one does not show it to someone twice — and
recorded when it **opens**, not when it closes, since someone who opens it and
walks away has still seen the offer.

**Step 1 — one offer.** The three-offer list is gone; the popup now leads with
"A week of unlimited Pilates for $59" and the reason buttons.

One thing to note about that step: the four reason buttons are the only way
forward — there is no separate "claim it" button. That is deliberate, since
the answer rides along with the lead and tells you what is bringing people in,
but it is one extra tap before the form. Say the word and I will add a direct
route through.

**Step 2 — Arketa's own form, embedded.** You asked for the embed for now, so
that is what is live. It frames cleanly and is already dark with a gold button
and your logo. Their page centres its card on a light background; the wrapper
crops those pale bands so the card meets our black with no seam.

The iframe starts loading the moment the popup **opens**, a step before it is
needed, so the seconds spent choosing a reason are seconds it spends loading.
Nothing is requested from Arketa on a page view that never opens the popup.

### 🟡 Two things the embed cannot do

1. **We cannot style its insides.** The grey input fields are theirs, on their
   origin. Nothing on our side can reach them.
2. **We cannot tell when it has been submitted.** So the visitor moves on with
   a "Done — show me the offer" button rather than automatically, and step 3
   reads "Your $59 week is waiting" — true whether or not they finished. I
   will not print "You're in" for something we cannot see.

Arketa's Submit button is gold; I made our "Done" button an outline so two
gold buttons in a row do not invite hitting the wrong one.

### The native form is still here if you want it back

`api/lead.js` and the `#lead-form` handler in `js/site.js` both still work —
they are dormant only because the markup that used them is gone (commit
`02c13a2`). That version was your own branded fields posting to `/api/lead`,
forwarded to a Zapier catch hook on Arketa's **Add New Client** action. It is
instant, fully styled, and it can actually confirm the lead saved.

It needs `LEAD_WEBHOOK_URL` set and **Webhooks by Zapier is a paid feature** —
which is the only reason we are on the embed. Say the word and it is a
markup swap.

### Why not post the form straight at Arketa

The intake form at `app.arketa.co` is a hosted HTML page, not an API. A
cross-origin POST at it fails CORS and the lead disappears with no error. That
is worse than having no form, because the visitor is told it worked.

The hook also stays server-side deliberately: a catch-hook URL in page
JavaScript is a public write endpoint into your client list, and anyone
viewing source could fill it with junk. Behind `/api/lead` it is hidden, and
a honeypot field and a size cap drop the obvious bots first.

### Three outcomes, each told the truth

| What happened | What the visitor sees |
|---|---|
| Saved to Arketa | "You're in, *name*." |
| Hook missing or failing | Arketa's hosted form opens; "Nearly there — finish the form in the tab we just opened." |
| Invalid input | The message names the field. Nothing is sent. |

It never reports a lead it did not deliver. With JavaScript off, the form's
own `action` posts to the Arketa page, which loads the real form — verified,
it answers 200.

### Still a hand-off

The **footer newsletter signup** only collects an email, and Arketa needs a
name to create a client, so that one still sends people to the hosted form.
Tell me if you would rather it asked for a name too and used the same route.

## 9. Pricing changes — two offers in, two out

### 🔴 The two new memberships do not exist in Arketa yet

I checked your Arketa catalog directly. **Afternoon Unlimited and Studio
Unlimited are not configured** — not as subscriptions, packs, bundles or
challenges. So there is no checkout to link to and nobody can actually buy
them yet.

Both are on `/pricing` with the right price and terms, badged **New**, and
their buttons say **Join now** and go to your Arketa pricing page rather than
a `/pricing/<slug>` page that would 404. Nothing on the site claims a checkout
that isn't there.

**What I need from you:** create them in Arketa, then send me the two offering
ids. They are the same string as the last segment of the checkout URL — the
$59 offer's id is `08dxQyFUSU4GA782eKIz`, for example. Paste those into
`OPTIONS` in `tools/build-checkout.py` (they are already listed there with
`None` in the id slot) and the two checkout pages build themselves.

Until then `build-checkout.py` prints them as pending on every run, so they
cannot be quietly forgotten:

    2 waiting on an Arketa offering id, no page built:
      - afternoon-unlimited ($119)
      - studio-unlimited ($159)

### 🟡 The two retired offers are still live in Arketa

**3 Classes for $25** (`CX8QBVvU6bdj31zrkZbR`) and **New Client Special: 10
Classes** (`1oNxHZVRsxdC7ZWnwTBl`) are both still **active** in your catalog.
Taking them off the website does not take them off Arketa — they can still be
sold at the desk, and they still appear on Arketa's own pricing page. Deactivate
them there when you're ready.

### What changed on the site

- Both offers removed everywhere: their checkout pages deleted, every CTA
  repointed at the $59 week, and the copy rewritten rather than just having
  the price swapped — headings like "Save over 70% on your first 3 classes"
  no longer made sense.
- `/pricing/3-classes-for-25` and `/pricing/intro-10-classes` now **301 to
  `/pricing/intro-1-week`** rather than 404, and both are out of the sitemap.
- The intro block is now a single $59 card, matching what you said earlier
  about running one intro offer.
- The membership grids on `/` and `/pricing` went from four across to three,
  two rows: the class-count tiers, then the three unlimiteds.

### Two calls worth a look

- **"All memberships work at every studio" is no longer true.** Studio
  Unlimited is one location. That line is now "Every membership works at all
  three studios except Studio Unlimited, which is for the one you choose."
- **A real Google review on the homepage mentioned the $25 pass.** I did not
  edit anyone's words — `build-reviews.py` now skips reviews naming a retired
  offer (`RETIRED_OFFERS`), so it simply is not among the twelve shown. It is
  still on Google in full.

### One loose end

You said earlier you wanted **one** intro offer. The **$89 two weeks at Lower
Greenville** is still live, still has a page at `/pricing/2-week-unlimited`,
and is still featured in its own section on `/intro-offers`. You did not ask
me to remove it so I have not — but it is a second intro offer. Say the word.

Odd thing worth knowing: that $89 offer does not appear anywhere in Arketa's
offering list — not as a pack, subscription, bundle or challenge — yet its
checkout URL still loads and charges. Worth confirming it is configured the
way you think it is.

## 10. Checkout pages — and a pricing error they caught

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
- ✅ **Product names match Arketa**, and ✅ **all four unlimited tiers are live** —
  I'm Obsessed ($209/mo), I'm Really Obsessed ($599/3mo), Completely Obsessed
  ($1,159/6mo) and One Year ($2,299).
- **Payment inside an iframe has a known failure mode.** 3-D Secure and wallet
  sheets need a top-level window. Every page therefore carries a visible "open
  the checkout in a new tab" link directly under the frame, so a customer who
  hits it is one click from finishing rather than stuck.
### The three intro-offer URLs

- ✅ **$145 ten classes** and ✅ **$89 two weeks** now have pages.
- ✅ **$59 one week** now has a page too. (The first URL sent for it was the
  10-class one; the replacement checked out as "New Client Special: 1-Week
  Unlimited Pilates, $59.00".)

### Billing terms — checked one by one, and one I had wrong

Arketa states the terms differently per product, so I read each checkout rather
than assuming. Two of the intro offers charge **once**; the unlimited terms
**recur**:

| Product | Arketa's wording | Recurs? |
| --- | --- | --- |
| 1 week $59 | "per week until 1 cycle is complete" | No — one charge |
| 2 weeks $89 | "every 2 weeks until 1 cycle is complete" | No — one charge |
| 3 months $599 | "every 3 months until canceled" | Yes |
| 6 months $1,159 | "every 6 months until canceled" | Yes |
| 1 year $2,299 | "per year until canceled" | Yes |

**I had the $89 wrong first time round.** On the strength of the phrase "every 2
weeks" I published "renews at $89 every two weeks until you cancel" — but the
full line ends "until 1 cycle is complete", so it does not renew. Corrected: it
now reads as a single charge. The annual page said nothing about renewal and now
discloses it.

### 🔴 The $89 banner image in your Arketa account says $29

Every line of text in that checkout says $89.00 — but the banner graphic at the
top of it (`2 WEEKS UNLIMITED.jpg`, uploaded to your Arketa account) reads
**"UNLIMITED PILATES FOR $29"**. A customer sees $29 in the artwork and is
charged $89. That image lives in Arketa, not in this repo, so I cannot fix it
from here — **replace it in Arketa.**

### Also worth knowing

- **The $89 two-week offer recurs.** Arketa bills it "$89.00 every 2 weeks" until
  cancelled. Your existing copy called it "two weeks of unlimited classes $89"
  with no mention of renewal, which reads as one-off. The new page says plainly
  that it renews every two weeks until you cancel. It is also **Lower Greenville
  only**, which the old copy did say.
