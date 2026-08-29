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
| `/meet-the-team` | `meet-the-team.html` | Leadership + full roster |
| `/retail` | `retail.html` | Shop (Arketa storefront) |
| `/welcome-to-dallas` | `welcome-to-dallas.html` | For visitors — no membership needed |
| `/about` | `about.html` | Meet Amanda, our journey, mission & values |
| `/faq` | `faq.html` | 40 questions in 5 categories |

Every page's source lives at `src/pages/<name>.html`.

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
js/site.js         marquee, drawer, FAQ, carousels, popup, signup, reviews widget
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

## Team roster

`meet-the-team` is generated from the Arketa staff export:

```bash
python3 tools/build-team.py ~/Downloads/Team_List.csv && python3 tools/build.py
```

It writes `src/partials/team-roster.html`. **Names, roles and start year only** — the
export's emails, phone numbers and birthdays are never written to the site. Booking and
system accounts are filtered out via `NOT_PEOPLE` in the script.

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
5. **The reviews widget loads lazily**, 600px before it enters the viewport.
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

1. **Wire up lead capture.** `LEAD_ENDPOINT` at the top of `js/site.js` is empty, so
   the popup's step-2 form collects a name, email and phone and then **discards them**
   — that is what the prototype did, and it is worth fixing rather than shipping. Point
   it at your CRM, Zapier hook or form service; it receives
   `{source, name, email, phone, reason}` as JSON from both the popup and the footer
   signup. The footer signup currently tells visitors it is not connected rather than
   pretending it worked.
2. **Confirm the remaining `oakcliffpilates.framer.website/*` links.** A handful of
   deep links still point at the current Framer site.
3. **Decide on `_design-src/`.** It is ~49 MB of original-resolution photography and
   the prototype's hero video. Useful for re-syncing with the design project; consider
   Git LFS or excluding it if repository size matters.
4. **Work through [REVIEW.md](REVIEW.md).**

## Re-syncing with the design project

`_design-src/` holds the untouched import: page HTML, `ocp-home.jsx`,
`ocp-popup.jsx`, `image-slot.js`, the design-system bundle and all five token
files. When the design changes:

1. Diff `_design-src/_ds/.../tokens/*.css` against `css/tokens.css` — token
   changes copy straight across.
2. Diff `ocp-home.jsx` / `ocp-popup.jsx` for content and structure changes, and
   mirror them into `src/pages/` and `src/partials/`.
3. Run both servers (`ocp` and `ocp-design-src`) and compare section offsets.
