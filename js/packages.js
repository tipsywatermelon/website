const PACKAGES = [
  {
    name: 'Groove',
    price: 'Starting at $X',
    tagline: 'Perfect for intimate gatherings',
    popular: false,
    features: [
      '3-hour rental',
      'Unlimited photos (digital only)',
    ],
  },
  {
    name: 'Disco Dream',
    price: 'Starting at $X',
    tagline: 'Our most booked package',
    popular: true,
    features: [
      '4-hour rental',
      'Unlimited photos & prints',
      'Backdrop of your choice',
      'Optional Props',
    ],
  },
  {
    name: 'Mirrorball Deluxe',
    price: 'Starting at $X',
    tagline: 'The full tinydisco experience',
    popular: false,
    features: [
      'Everything in Disco Dream, plus:',
      'Keepsakes Station',
    ],
  },
];

function renderPackageCards(containerId, options) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const { showCTA = false, condensed = false } = options || {};

  el.innerHTML = PACKAGES.map(pkg => {
    const border = pkg.popular ? 'border-theme-primary/30' : 'border-theme';
    const badge = pkg.popular
      ? `<span class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#111111] text-white text-xs font-bold tracking-widest uppercase px-4 py-1 whitespace-nowrap" style="border-radius:2px">Most Popular</span>`
      : '';

    const features = condensed
      ? pkg.features.slice(0, 3)
      : pkg.features;

    const featureItems = features
      .map(f => `<li class="flex items-start gap-3"><span class="text-theme-primary text-xs mt-0.5 flex-shrink-0">✓</span><span class="text-theme-secondary text-sm">${f}</span></li>`)
      .join('');

    const cta = showCTA
      ? `<div class="text-center mt-10"><a href="contact.html" class="sparkle-btn"><span class="sparkle-btn__text">Inquire</span><span class="sparkle-btn__glare" aria-hidden="true">Inquire</span></a></div>`
      : '';

    return `
      <div class="bg-theme-card border ${border} p-8 flex flex-col relative min-h-[300px]">
        ${badge}
        <!--<p class="text-theme-secondary text-xs tracking-widest uppercase mb-2">${pkg.price}</p>-->
        <p class="text-theme-primary text-lg font-semibold mb-1">${pkg.name}</p>
        <p class="text-theme-secondary text-xs mb-6">${pkg.tagline}</p>
        <ul class="flex flex-col gap-2 flex-1">${featureItems}</ul>
      </div>`;
  }).join('');
}
