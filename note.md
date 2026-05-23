# TINYDISCO Site — Config & JS Reference

## Config knobs (things you actually change)

### `js/packages.js` — PRICING object
```js
const PRICING = {
  discountPct: 20,          // set to 0 to disable all discount UI
  discountLabel: "Founder's Rate",
  discountSubtitle: "...",
};
```
Controls everything discount-related: the top banner, homepage callout section,
packages page callout, and strikethrough pricing on cards.
Set `discountPct: 0` to turn it all off silently.

### `js/packages.js` — PACKAGES array
The three packages (Groove, Disco Dream, Mirrorball Deluxe).
Each has: `name`, `basePrice`, `tagline`, `popular` (bool), `features` (array).
`popular: true` adds the "Highly Recommended" badge and a different border color.

### `js/main.js` — SPARKLE_NAV_LOGO flag
```js
const SPARKLE_NAV_LOGO = true;  // set false to kill looping sparkle on navbar logo
```

### `css/theme.css` — CSS variables (`:root`)
All site colors live here. To retheme, edit only this block:
- `--color-bg` / `--color-bg-section` / `--color-bg-card` / `--color-bg-nav` — backgrounds
- `--color-border` — border and accent stripe color (currently Blush #D28A7A)
- `--color-text-primary` / `--color-text-secondary` / `--color-text-nav` — text
- `--color-accent` / `--color-accent-text` — Marigold accent (used on banner, badges, sparkles)
- `--font-heading` — heading font family (currently Instrument Serif italic)

### `js/analytics.js` — PostHog keys
```js
var POSTHOG_KEY = 'phc_...';
var POSTHOG_HOST = 'https://us.i.posthog.com';
```

---

## JS pieces and what they do

| File | Function | What it does |
|------|----------|--------------|
| `js/components.js` | `SiteNav` custom element | Renders `<site-nav>` — navbar + mobile menu on every page |
| `js/components.js` | `SiteFooter` custom element | Renders `<site-footer>` on every page |
| `js/packages.js` | `renderPackageCards(containerId, options)` | Injects package cards into a container div. Called inline at bottom of pages. Options: `showCTA` (adds Inquire button per card), `condensed` (trims feature list to 3). |
| `js/main.js` | `initFoundersRate()` | If `PRICING.discountPct > 0`: creates `#topbar`, moves `<site-nav>` into it, injects banner. Also injects homepage callout (before `#home-package-cards` section) and packages page callout (before `#packages-page-cards`). |
| `js/main.js` | `initNav()` | Wires hamburger open/close on mobile menu |
| `js/main.js` | `initSparkleButtons()` | Injects 5 sparkle SVGs into every `.sparkle-btn` |
| `js/main.js` | `initNavLogoSparkle()` | Injects 5 sparkle SVGs into every `.sparkle-logo` (gated by `SPARKLE_NAV_LOGO`) |
| `js/main.js` | `initAccordion()` | FAQ accordion — uses `data-faq-item`, `data-faq-btn`, `data-faq-body`, `data-faq-icon` attributes |
| `js/main.js` | `initLightbox()` | Gallery lightbox — looks for `.gallery-img` elements and `#lightbox`, `#lightbox-img`, `#lightbox-close`, `#lightbox-prev`, `#lightbox-next` |
| `js/analytics.js` | PostHog init + delegation | Auto-captures `cta_clicked` (any `a.sparkle-btn[href*=contact]` click) and `contact_form_submitted` |

---

## Load order (every page)

```html
<script src="/js/analytics.js"></script>  <!-- in <head> -->
...
<script src="/js/components.js"></script> <!-- before </body> -->
<script src="/js/packages.js"></script>
<script src="/js/main.js"></script>
<!-- optional inline: renderPackageCards('id', opts) -->
```

`initFoundersRate()` runs first in DOMContentLoaded because it relocates `<site-nav>`
into `#topbar` — `initNav()` runs after so it attaches listeners to the moved element.

---

## DOM anchors used by JS

| ID / selector | Used by |
|---------------|---------|
| `#home-package-cards` | `renderPackageCards` (homepage), `initFoundersRate` (callout placement) |
| `#packages-page-cards` | `renderPackageCards` (packages page), `initFoundersRate` (callout placement) |
| `site-nav` | `initFoundersRate` (moves into #topbar) |
| `#hamburger`, `#mobile-menu`, `#close-menu` | `initNav` |
| `[data-faq-item]`, `[data-faq-btn]`, `[data-faq-body]`, `[data-faq-icon]` | `initAccordion` |
| `.gallery-img`, `#lightbox*` | `initLightbox` |
| `.sparkle-btn` | `initSparkleButtons` |
| `.sparkle-logo` | `initNavLogoSparkle` |

---

## What's commented out / disabled

- Gallery nav link in `components.js` (gallery page not ready)
- Gallery teaser section on homepage (`index.html`)
- Homepage package cards render call — `renderPackageCards('home-package-cards', { condensed: true })` is commented out; the `#home-package-cards` div is still there but empty
- Testimonial section on homepage
- "View All Packages" link on homepage
