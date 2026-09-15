# oakcliffpilates.com

Static site — no framework, no runtime dependencies. Built from the Claude Design
project [Oak Cliff Pilates](https://claude.ai/design/p/82ce06af-2e80-43ee-ad49-2b3f41853d04)
(`OCP Website - Home.html`), with photography and video from the KIJA shared drive.

## Pages

| URL | Source | What it is |
| --- | --- | --- |
| `/` | `index.html` | Homepage |
| `/schedule` | `schedule.html` | Live Arketa class schedule |
| `/pricing` | `pricing.html` | Memberships, packs, drop-ins |
| `/intro-offers` | `intro-offers.html` | New-client offers |
| `/are-you-down-with-ocp` | `are-you-down-with-ocp.html` | "Pilates near me" landing page — class + studio carousels |
| `/locations` | `locations.html` | All three studios |
| `/bishop-arts` | `bishop-arts.html` | Bishop Arts location |
| `/uptown` | `uptown.html` | Uptown location |
| `/lower-greenville` | `lower-greenville.html` | Lower Greenville location |
| `/private-pilates` | `private-pilates.html` | One-on-one & Duo sessions |
| `/private-parties` | `private-parties.html` | Private reformer parties |
| `/academy` | `academy.html` | Oak Cliff Pilates Academy — 300hr certification |
| `/events` | `events.html` | Community events (Arketa events feed) |
| `/community` | `community.html` | The community programme — park classes, socials, brunch, retreats |
| `/meet-the-team` | `meet-the-team.html` | Leadership + full roster |
| `/retail` | `retail.html` | Shop (Arketa storefront) |
| `/welcome-to-dallas` | `welcome-to-dallas.html` | For visitors — no membership needed |
| `/about` | `about.html` | Meet Amanda, our journey, mission & values |
| `/faq` | `faq.html` | 40 questions in 5 categories |
| `/blog` | `blog.html` | The journal — press, podcasts, awards, guides |
| `/blog/<slug>` | `blog/<slug>.html` | 9 posts (see `src/pages/blog-*.html`) |

Every page's source lives at `src/pages/<name>.html`. Blog posts are
`src/pages/blog-<slug>.html` with `path: /blog/<slug>` — the build writes any
page whose path has a directory into that directory.

**⚠️ Read [REVIEW.md](REVIEW.md) before publishing** — it lists the copy conflicts,
placeholder values, and internal notes found in the source material.

## Layout

```
src/pages/         one file per page: front matter + body
src/partials/      shared chrome — head, header, footer, popup, schema, scripts
tools/build.py        stitches src/ into the .html files at the repo root
tools/build-media.sh  turns the Drive originals into img/ and video/
tools/build-team.py   turns the Arketa staff export into the team roster
css/tokens.css     design-system tokens, copied verbatim from the design project
css/site.css       DS components → CSS, page styles, popup, inner-page components
js/site.js         marquee, drawer, FAQ, carousels, popup, signup, video facade
img/ video/        optimised media — see MEDIA.md
_design-src/       pristine import of the design project (reference)
```

## Build and run

```bash
python3 tools/build.py && python3 -m http.server 4321
```

`build.py` regenerates all 18 root `.html` files — **edit `src/`, never the
generated files at the root.** `.claude/launch.json` defines the same server as
`ocp` (and `ocp-design-src` on `:4322` to run the original React prototype for
comparison).

### Adding a page

1. Create `src/pages/<slug>.html` starting with a front-matter comment:

   ```html
   <!--
   title: Page title — Oak Cliff Pilates
   description: One sentence for search results and link previews.
   path: /<slug>
   nav: studios
   og_image: /img/lib/<something>.jpg
   -->
   <!--#include head-->
   <!--#include header-->
   <main id="main">
   …
   </main>
   <!--#include footer-->
   <!--#include popup-->
   <!--#include schema-org-->
   <!--#include scripts-->
   ```

2. Run `python3 tools/build.py`.
3. Add the URL to `sitemap.xml`, and a link in `src/partials/header.html` /
   `footer.html` if it belongs in navigation.

`nav:` marks the active nav item (`home`, `classes`, `studios`, `membership`,
`about`, `shop`). Reusable partials: `intro-offers` (the three-card offer grid),
`arketa-embed` (the booking-widget resize script), `team-roster` (generated),
`schema-org`, `head`, `header`, `footer`, `popup`, `scripts`. Any page containing `.faq-item` markup gets **FAQPage
JSON-LD generated automatically** from the questions and answers on the page, so
the structured data can never drift from the copy.

## Checkout pages

One page per pricing option at `/pricing/<slug>`, each with Arketa's checkout
embedded. Generated:

```bash
python3 tools/build-checkout.py && python3 tools/build.py
```

The name, price, blurb and Arketa checkout ID for all 18 live in the `OPTIONS`
table at the top of `tools/build-checkout.py` — one row per product, so a price
change is a single edit and the page, the `<title>` and the Offer JSON-LD can
never disagree with each other.

Arketa serves its checkout without `X-Frame-Options` or a `frame-ancestors`
policy, so it frames cleanly and card details stay on Arketa's origin. Every
page also links out to the same checkout in a new tab, because payment flows
can hit redirects — 3-D Secure, Apple Pay, Google Pay — that need a top-level
window and will not complete inside a frame.

**When prices change, change them in `OPTIONS` and re-run.** Then confirm each
page still matches Arketa: open the checkout URL and read the price it shows.
A row that drifts advertises one price and charges another.

An entry whose Arketa id is `None` is an offer that exists on the site but not
yet in Arketa. No page is built for it — a checkout page with nothing to buy
is worse than no page — and the build prints it as pending on every run so it
cannot be forgotten. Fill the id in (it is the last segment of the checkout
URL) and the page appears. Link those offers somewhere real in the meantime;
`/pricing` currently sends them to Arketa's own pricing page.

## Google reviews

The homepage review feed is ours, not a widget. Two steps, both build-time:

```bash
python3 tools/fetch-reviews.py          # → src/data/reviews.json
python3 tools/build-reviews.py && python3 tools/build.py
```

The source is the RevuBlast / onlinereviews.tech account that already collects
the studios' Google reviews — one "seat" per studio, tokens in `SEATS` at the
top of `fetch-reviews.py`. The endpoint its own widget calls is public and
needs no key, so there is no secret to manage:

```
https://server.onlinereviews.tech/api/v0.0.9/seats/<token>/reviews/widgets?limit=50
```

`fetch-reviews.py` pulls all three studios, keeps reviews at 4★ and above,
sorts newest first, and computes the weighted mean across all three so the
headline number is a real aggregate rather than an average of averages.

`build-reviews.py` renders that into `src/partials/reviews.html`: twelve cards
dealt round-robin across the studios so the newest Bishop Arts reviews don't
crowd out Lower Greenville, a per-studio "read them all on Google" row, and a
JSON-LD block that attaches each studio's real `aggregateRating` to the
`@id` it already has in `schema-org.html`.

Cards show reviews between 80 and 420 characters. A two-word review looks like
an empty card and a 900-word one runs off the screen — but **nothing is ever
truncated**: a review is shown whole or not at all.

Doing this at build time rather than in the page means the reviews are real
HTML that crawlers can read, three vendor carousels collapse into one feed in
the site's own styling, and **no third-party JavaScript runs on the homepage.**

If `src/data/reviews.json` is missing or empty, `build-reviews.py` writes the
original EmbedSocial widget instead, so the homepage keeps working —
**no review is ever invented to fill the gap.**

Re-run the fetcher monthly. When you do, check that the copy still matches:
`index.html` and `intro-offers.html` both quote a round review count ("500+")
and `intro-offers` quotes the average rating.

## URLs and the mega menu

Pages live under their menu parent: `/locations/bishop-arts`,
`/schedule/classes`, `/pricing/intro-offers`, `/about/faq`, `/blog/events`,
`/shop`. The `path:` in a page's front matter is the single source of truth —
it sets both the URL and the output filename, so moving a page is one line
plus a redirect in `vercel.json`. Every old URL 301s to its new home.

`src/partials/header.html` holds the mega menu. Each top-level item is a real
link to a real page and its panel opens on `:hover` and `:focus-within` — both
in CSS, so **the menu works with JavaScript off**. `js/site.js` only adds
Escape-to-close, the first-tap-opens behaviour on touch (where there is no
hover), and keeps `aria-expanded` in step for screen readers.

Every panel repeats its own parent as the first item, so the parent page is
reachable by keyboard and by thumb rather than only by clicking the trigger.

The inline nav and the panels both switch off at **1100px**, in two blocks
that say so — they must move together, or there is a band where the nav is
inline but the dropdowns are dead.

## Journal listings

`tools/build-blog-index.py` generates every post listing from the posts' own
front matter:

```bash
python3 tools/build-blog-index.py && python3 tools/build.py
```

    src/partials/posts-all.html    every post         -> /blog
    src/partials/posts-news.html   category: News     -> /blog/news

Add a listing by adding a line to `LISTINGS`. The card fields — `excerpt`,
`read_time`, `card`, `card_w`, `card_h` — live in each post's front matter next
to its title and date, so a new post appears in every listing it belongs in
without anyone editing an index.

## Cookie notice

`src/partials/cookie.html` plus the consent module in `js/site.js`. A bar on
first visit, a preferences panel you can reopen from the footer link or any
`data-cookie-prefs` element, and the choice stored in a first-party
`ocp_consent` cookie for 12 months.

**It has one toggle because only one thing here is genuinely optional.** The
site runs no analytics, no advertising and no tracking pixels — there is
nothing to switch off. What it does store:

| | What | Why |
|---|---|---|
| Necessary | `ocp_consent` | remembers the choice, 12 months |
| Necessary | `ocp_popup_seen` | intro popup shows once, 30 days |
| Necessary | Arketa's cookies | booking and payment; blocking them breaks checkout |
| Optional | YouTube | only on the Journal, only when someone presses play |

Arketa is treated as strictly necessary because it *is* the booking and
payment service. Gating it would mean a consent wall in front of the schedule
and the checkout. If you want the stricter GDPR-style treatment — placeholder
until consent, with an out-link — that is a change to the consent module and
the embeds, not a rewrite.

The video toggle does real work: with it off, pressing play shows an inline
prompt offering **Allow and play** or **Watch on YouTube**, and no request
reaches Google until one is chosen. "Clear what is stored on this device"
actually clears both first-party cookies and the localStorage fallback.

Keep the table above and `src/partials/cookie.html` in step with reality. The
notice names specific cookies, which is only better than boilerplate while it
is true.

## The intro popup

Opens **3 seconds** after a first visit, on **every page**, and then stays
quiet for **30 days**. Both numbers are `POPUP_DELAY_MS` and
`POPUP_SNOOZE_DAYS` at the top of `js/site.js`.

The visit is recorded in a `ocp_popup_seen` cookie *and* in localStorage, and
either one counts as seen — so a visitor is not shown it twice because one of
the two was cleared. It is recorded when the popup **opens**, not when it
closes: someone who opens it and walks away has still been shown the offer.
If the page loads into a background tab the timer waits until the tab is
actually looked at.

Three steps: the $59 week → the new-client form → the link to checkout.

## New-client leads

**Currently: Arketa's own intake form, embedded in step 2 of the popup.** It
frames cleanly (no `X-Frame-Options`, no `frame-ancestors`) and is already
dark with a gold button and the OCP logo. `js/site.js` sets the iframe `src`
the moment the popup **opens** — a step before it is needed — so the time
spent choosing a reason is time the form spends loading. Nothing is requested
from Arketa until the popup opens.

Their page centres its card on a light background. `.pop-embed` is shorter
than the frame and the frame is nudged up, cropping the pale bands away so the
card meets our black cleanly. If Arketa ever changes that padding the worst
case is a thin light edge, not a broken layout.

Two things the embed cannot do, both handled in the markup:

* **We cannot style its insides** — it is their origin. The grey input fields
  are theirs.
* **We cannot tell when it has been submitted**, so the visitor advances with
  a "Done — show me the offer" button rather than automatically, and step 3
  says "Your $59 week is waiting" — true whether or not they finished.

### The native form, if you want it back

`api/lead.js` and the `#lead-form` handler in `js/site.js` are still here and
still work; they are dormant only because the markup that used them is gone
(see commit `02c13a2`). That route was a branded form posting to `/api/lead`,
which forwards to a **Zapier catch hook** wired to Arketa's **Add New Client**
action — instant, fully styled, and able to confirm the lead was actually
saved. It needs `LEAD_WEBHOOK_URL` set, and **Webhooks by Zapier is a paid
feature**, which is why the embed is in place for now.

Either way, the form cannot post straight at Arketa: the intake form is a
hosted HTML page, not an API, so a cross-origin POST fails CORS and the lead
vanishes while the visitor is told it worked.

## Team roster

`meet-the-team` is generated from the Arketa staff export:

```bash
python3 tools/build-team.py ~/Downloads/Team_List.csv && python3 tools/build.py
```

It writes `src/partials/team-roster.html`. **Names, roles and start year only** — the
export's emails, phone numbers and birthdays are never written to the site. Booking and
system accounts are filtered out via `NOT_PEOPLE` in the script.

## Trainer HQ

The internal trainer portal lives in its own repo and its own Vercel project:
[kijacreative/ocp-portal](https://github.com/kijacreative/ocp-portal). It is
deployed separately so an internal, signed-in-only tool does not ride along
with marketing deploys, and so its Slack and Google credentials sit in a
different project to this one.

Two things there are copied from here and can drift:
`css/tokens.css` and the handful of component rules in its `css/base.css`.
If a button or badge looks wrong next to this site, diff those first.

**The offers on that page must match the `OPTIONS` table in
`tools/build-checkout.py`.** When a price changes here, change it there too —
that page is what trainers quote from the floor.

## Media

45 photos and 18 videos are optimised and catalogued in **[MEDIA.md](MEDIA.md)**,
with dimensions, weights, and which pages use each one. Originals live in Drive and
are not in the repo.

```bash
./tools/build-media.sh          # everything
./tools/build-media.sh images   # just stills
./tools/build-media.sh hero     # just the homepage hero cut
```

The homepage hero is a 14-second silent cut of `OCP Uptown - Video.mp4` at
1.6 MB (mp4) / 1.4 MB (webm) — down from the 10.5 MB placeholder the prototype
shipped with.

## Deploy

`vercel.json` handles it: static, `cleanUrls` on (so `/about` serves
`about.html`), long-lived caching for `img/`, `video/`, `css/`, `js/`, plus the
usual security headers. Point the Vercel project at this directory — there is no
build command to configure, but **run `tools/build.py` and commit the output**
before deploying.

## How this maps to the design

The prototype renders through React + Babel-standalone from a CDN, with its
component library in `_ds_bundle.js`. Right for a design canvas, wrong for a
production site — dev-build React, ~1 MB parsed before first paint, nothing for a
crawler. So the page was rewritten as static markup and the design-system
components were translated 1:1 into CSS classes:

| Design system | CSS |
| --- | --- |
| `Button` | `.btn` + `--primary/--secondary/--ghost/--on-light/--danger`, `--sm/--lg/--full` |
| `Card` | `.card` + `--light/--outline/--hoverable`, `.card__body`, `.card__footer` |
| `Badge` | `.badge` + `--gold/--outline/--cream/--ink/--neon` |
| `Input` | `.field`, `.field__label`, `.field__box` |
| `PhotoFrame` | `figure.photo`, `.photo__scrim`, `figcaption` |
| `SectionLabel` | `.sec-label`, `.sec-label__num`, `.sec-label__text` |
| `StatBlock` | `.stat`, `.stat__value`, `.stat__label`, `.stat--lg` |
| `FoilText` | `.foil` |
| `LogoPuck` | `.logo-puck` |

React hover state became `:hover`; every token value is unchanged. Section 5 of
`site.css` adds components the prototype never had — compact page hero, carousel,
feature grid, values list, chips, gallery, CTA band — built from the same
vocabulary.

**Verified against the original.** Running both at 1440×900, every homepage
section's top offset and height matches the prototype within 1px — hero 900,
marquee 91, stats 195, on through the footer at 10141. All 18 pages checked for
horizontal overflow at 375, 480, 768, 900, 1001, 1024 and 1440: none. No broken
images, no missing alt text, exactly one `h1` per page, every `target="_blank"`
carrying `rel="noopener"`, and valid JSON-LD throughout.

### Deliberate differences from the prototype

1. **Nav collapses at 1000px, not 700px.** The prototype only had a 700px
   breakpoint; between ~700 and ~1000px the "Grab a spot" button overflowed the
   viewport by 27px at iPad width.
2. **Nav links point somewhere.** All five are `href="#top"` placeholders in the
   prototype.
3. **A working mobile drawer.** The prototype renders a burger with no handler.
4. **Popup snooze.** Still opens 5s after load, but a dismissal is remembered for
   7 days, and a page loaded in a background tab waits until it is looked at.
5. **The reviews are static HTML** — no third-party script on the homepage.
   (`site.js` still carries a lazy loader for the EmbedSocial fallback; it is
   inert unless `build-reviews.py` has fallen back to the widget.)
   Final rendered height matches the prototype (1942px vs 1941px).
6. **Added for production:** skip link, focus-visible rings,
   `prefers-reduced-motion`, SEO metadata, Open Graph, `LocalBusiness` +
   `FAQPage` JSON-LD, `robots.txt`, `sitemap.xml`, favicon, apple-touch-icon.
7. **Fonts come from Google Fonts.** The design system's `fonts.css` points at
   self-hosted woff2 files that are not in the project.

### Copy decisions worth confirming

The supplied page copy contradicted itself in several places, and a few pastes
carried internal notes not meant for publication. Every judgement call is listed in
**[REVIEW.md](REVIEW.md)** — read it before launch.

## Before launch

1. **Lead capture is wired.** Both the intro-offer popup and the footer signup hand
   the visitor to the Arketa new-client intake form (`LEAD_FORM_URL` in `js/site.js`).
   That URL is a hosted page rather than an API, so nothing is POSTed to it — the
   popup links straight there, which also means it works with JavaScript off.
2. **Point the domain at this build.** No page links out to the old Framer or
   WordPress site any more.
3. **Decide on `_design-src/`.** It is ~49 MB of original-resolution photography and
   the prototype's hero video. Useful for re-syncing with the design project; consider
   Git LFS or excluding it if repository size matters.
4. **Take down the Athena event block after 26 September.** `/community` carries the
   full event under `#athena`. It is the only hardcoded date on that page.
5. **Remove the dated parking line after 17 September.** The Lower Greenville page
   says validated parking "is coming from 17 September; it is not active yet." Once it
   is live that sentence needs to change.
6. **Work through [REVIEW.md](REVIEW.md).**

## Re-syncing with the design project

`_design-src/` holds the untouched import: page HTML, `ocp-home.jsx`,
`ocp-popup.jsx`, `image-slot.js`, the design-system bundle and all five token
files. When the design changes:

1. Diff `_design-src/_ds/.../tokens/*.css` against `css/tokens.css` — token
   changes copy straight across.
2. Diff `ocp-home.jsx` / `ocp-popup.jsx` for content and structure changes, and
   mirror them into `src/pages/` and `src/partials/`.
3. Run both servers (`ocp` and `ocp-design-src`) and compare section offsets.
