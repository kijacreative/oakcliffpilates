# Media library

Every photo and video the site can use, exported from the KIJA shared drive by
`tools/build-media.sh`. Originals stay in Drive; only these optimised files are
in the repo.

    Drive: KIJA CREATIVE/…/02_CLIENTS/OCP/Videos/{Website Images, Website Videos}

Each image ships at two sizes:

    /img/lib/<name>.jpg        1600px wide (landscape) or 1080px (portrait)
    /img/lib/<name>@640.jpg    640px wide — cards, thumbnails, srcset

Add a new original to the `MAP` table in `tools/build-media.sh`, re-run it, and
the file appears here. **In use** lists the pages currently referencing it.

## Photography

### Bishop Arts

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `bishop-class-window` | 1600×900 | 331 KB | are-you-down-with-ocp, index |
| `bishop-exterior-sign` | 864×1080 | 377 KB | about, are-you-down-with-ocp, bishop-arts, index |
| `bishop-exterior-trees` | 1600×900 | 668 KB | bishop-arts |
| `bishop-exterior-window` | 1600×900 | 671 KB | about, are-you-down-with-ocp, bishop-arts |
| `bishop-instructor-cue` | 1600×900 | 273 KB | about |
| `bishop-instructor-magenta` | 1600×900 | 267 KB | — |
| `bishop-instructor-teal` | 1600×900 | 239 KB | bishop-arts |
| `bishop-interior-empty` | 1600×900 | 535 KB | about, bishop-arts |
| `bishop-interior-group` | 1600×900 | 365 KB | — |
| `bishop-laughing-weights` | 1600×900 | 363 KB | are-you-down-with-ocp, index |
| `bishop-reformer-window` | 864×1080 | 198 KB | bishop-arts |
| `bishop-straps` | 1600×900 | 247 KB | — |
| `bishop-stretch-neon` | 864×1080 | 175 KB | bishop-arts |
| `bishop-team-neon` | 1600×900 | 321 KB | about, bishop-arts |

### Uptown

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `uptown-arms-overhead` | 1600×900 | 372 KB | are-you-down-with-ocp |
| `uptown-awning-letters` | 1600×900 | 156 KB | — |
| `uptown-class-neon` | 1600×900 | 381 KB | are-you-down-with-ocp, index |
| `uptown-instructor-medusa` | 1600×900 | 379 KB | — |
| `uptown-motion` | 1600×900 | 195 KB | — |
| `uptown-reformer-medusa` | 864×1080 | 193 KB | about, are-you-down-with-ocp, bishop-arts, index |
| `uptown-reformers` | 1600×900 | 232 KB | — |
| `uptown-room-neon` | 1600×900 | 272 KB | — |
| `uptown-skyline-team` | 1600×900 | 355 KB | about |
| `uptown-window-decal` | 1600×900 | 295 KB | about, are-you-down-with-ocp, bishop-arts, index |

### Lower Greenville

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `lg-class-arches` | 864×1080 | 282 KB | — |
| `lg-class-golden` | 1600×900 | 410 KB | index |
| `lg-class-windows` | 864×1080 | 197 KB | — |
| `lg-exterior-sign` | 1600×900 | 352 KB | about, are-you-down-with-ocp, bishop-arts, index |
| `lg-instructors` | 1600×900 | 236 KB | — |
| `lg-reformer-curtain` | 1600×900 | 372 KB | — |
| `lg-reformer-warm` | 1600×900 | 458 KB | — |
| `lg-retail` | 864×1080 | 221 KB | — |
| `lg-studio-bright` | 864×1080 | 223 KB | about |

### Pilates in the Park

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `park-first-class` | 864×1080 | 284 KB | about |
| `park-group` | 864×1080 | 308 KB | — |
| `park-lawn` | 864×1080 | 321 KB | about, are-you-down-with-ocp, index |

### Private sessions

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `privates-neon` | 864×1080 | 129 KB | — |
| `privates-tower` | 864×1080 | 137 KB | — |

### Private parties

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `parties-champagne` | 1600×900 | 445 KB | — |
| `parties-smu` | 1600×900 | 483 KB | — |
| `parties-studio` | 1600×900 | 310 KB | — |

### People & brand

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `founders-mural` | 1600×900 | 412 KB | about |
| `founders-storefront` | 864×1080 | 309 KB | — |
| `scooter` | 864×1080 | 257 KB | — |
| `team-bishop-exterior` | 1600×900 | 306 KB | about |

## Video

Silent, 25fps, ≤20s, H.264, capped at 1280px wide. Each has a matching
`<name>-poster.jpg`. Most are 1080×1350 (shot for social); the three landscape
clips are the ones to reach for in a full-width hero.

| File | Size | Weight | In use |
| --- | --- | --- | --- |
| `academy` | ? | 1154 KB | — |
| `bishop-1` | ? | 825 KB | bishop-arts |
| `bishop-2` | ? | 675 KB | — |
| `bishop-3` | ? | 594 KB | — |
| `bishop-4` | ? | 882 KB | — |
| `bishop-springs` | ? | 616 KB | — |
| `lg-1` | ? | 2629 KB | — |
| `lg-2` | ? | 900 KB | — |
| `lg-3` | ? | 762 KB | — |
| `lg-4` | ? | 616 KB | — |
| `parties` | ? | 1858 KB | — |
| `springs` | ? | 1217 KB | — |
| `uptown-2` | ? | 2257 KB | — |
| `uptown-3` | ? | 2577 KB | — |
| `uptown-4` | ? | 2750 KB | are-you-down-with-ocp |
| `uptown-5` | ? | 2122 KB | — |
| `uptown-6` | ? | 918 KB | — |
| `uptown-wide` | ? | 1777 KB | — |

The site hero uses a separate, harder-compressed cut of `OCP Uptown - Video.mp4`:

    /video/hero.mp4   /video/hero.webm   /img/hero-poster.jpg

Rebuild it alone with `./tools/build-media.sh hero`.
