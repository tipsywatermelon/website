// ─── Pricing config ───────────────────────────────────────────────────────────
// Set discountPct to a number 0–100 to apply a site-wide discount,
// or set it to 0 to show regular prices with no strikethrough.
const PRICING = {
  discountPct: 20,
  discountLabel: "Founder's Rate",
  discountSubtitle: "Book now and lock in your rate. Available to our first wave of clients only.",
};

function discountedPrice(base) {
  if (!PRICING.discountPct) return null;
  return Math.round(base * (1 - PRICING.discountPct / 100));
}

// ─── Packages ─────────────────────────────────────────────────────────────────
const PACKAGES = [
  {
    name: 'Groove',
    basePrice: 800,
    tagline: 'Perfect for intimate gatherings',
    popular: false,
    features: [
      '3-hour rental',
      'Unlimited photos (digital only)',
      'Black / white backdrop',
    ],
  },
  {
    name: 'Disco Dream',
    basePrice: 1500,
    tagline: 'The sweet spot',
    popular: true,
    features: [
      '4-hour rental',
      'Unlimited photos & prints',
      'Backdrop of your choice',
    ],
  },
  {
    name: 'Mirrorball Deluxe',
    basePrice: 1700,
    tagline: 'The full tinydisco experience',
    popular: false,
    features: [
      'Everything in Disco Dream',
      'Keychain Keepsakes Station',
      'Custom Photobook',
    ],
  },
];

// ─── Price display ────────────────────────────────────────────────────────────
function formatPrice(n) {
  return '$' + n.toLocaleString();
}

function renderPrice(pkg) {
  const sale = discountedPrice(pkg.basePrice);
  const label = `Starting at ${formatPrice(pkg.basePrice)}`;

  if (!sale) {
    return `<p class="text-theme-secondary text-xs tracking-widest uppercase mb-2">${label}</p>`;
  }

  return `
    <div class="mb-2 flex flex-col gap-0.5">
      <span class="text-xs font-bold" style="color:var(--color-border)">-${PRICING.discountPct}% LIMITED OFFER</span>
      <div class="flex items-baseline gap-2">
        <span class="text-theme-primary text-base font-semibold">Starting at ${formatPrice(sale)}</span>
        <span class="text-theme-secondary text-xs line-through">${formatPrice(pkg.basePrice)}</span>
      </div>
    </div>`;
}

// ─── Renderer ─────────────────────────────────────────────────────────────────
function renderPackageCards(containerId, options) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const { showCTA = false, condensed = false } = options || {};

  el.innerHTML = PACKAGES.map(pkg => {
    const border = pkg.popular ? 'border-theme' : 'border-theme-primary';
    const badge = pkg.popular
      ? `<span class="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-widest uppercase px-4 py-1 whitespace-nowrap" style="border-radius:2px;background-color:var(--color-border)">Highly Recommended</span>`
      : '';

    const features = condensed ? pkg.features.slice(0, 3) : pkg.features;
    const featureItems = features
      .map(f => `<li class="flex items-start gap-3"><span class="text-theme-primary text-xs mt-0.5 flex-shrink-0">✓</span><span class="text-theme-secondary text-sm">${f}</span></li>`)
      .join('');

    const cta = showCTA
      ? `<div class="text-center mt-10"><a href="/contact" class="sparkle-btn"><span class="sparkle-btn__text">Inquire</span><span class="sparkle-btn__glare" aria-hidden="true">Inquire</span></a></div>`
      : '';

    return `
      <div class="bg-theme-card border ${border} p-8 flex flex-col relative min-h-[250px]">
        ${badge}
        ${renderPrice(pkg)}
        <p class="text-theme-primary text-lg font-semibold mb-1">${pkg.name}</p>
        <p class="text-theme-secondary text-xs mb-6">${pkg.tagline}</p>
        <ul class="flex flex-col gap-2 flex-1">${featureItems}</ul>
      </div>`;
  }).join('');
}
