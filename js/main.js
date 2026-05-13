// ─── Mobile Nav Toggle ────────────────────────────────────────────────────────
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu  = document.getElementById('close-menu');
  if (!hamburger || !mobileMenu || !closeMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  function closeNav() {
    mobileMenu.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeMenu.addEventListener('click', closeNav);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function initAccordion() {
  const items = document.querySelectorAll('[data-faq-item]');
  if (items.length === 0) return;

  // Open first item by default
  const firstBody = items[0].querySelector('[data-faq-body]');
  const firstIcon = items[0].querySelector('[data-faq-icon]');
  firstBody.style.display = 'block';
  firstIcon.textContent = '×';

  items.forEach(item => {
    const btn  = item.querySelector('[data-faq-btn]');
    const body = item.querySelector('[data-faq-body]');
    const icon = item.querySelector('[data-faq-icon]');

    btn.addEventListener('click', () => {
      const isOpen = body.style.display === 'block';

      // Collapse all
      items.forEach(i => {
        i.querySelector('[data-faq-body]').style.display = 'none';
        i.querySelector('[data-faq-icon]').textContent = '+';
      });

      // Expand clicked if it was closed
      if (!isOpen) {
        body.style.display = 'block';
        icon.textContent = '×';
      }
    });
  });
}

// ─── Gallery Lightbox ─────────────────────────────────────────────────────────
function initLightbox() {
  const imgs     = Array.from(document.querySelectorAll('.gallery-img'));
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn  = document.getElementById('lightbox-prev');
  const nextBtn  = document.getElementById('lightbox-next');
  if (imgs.length === 0 || !lightbox || !lbImg || !closeBtn || !prevBtn || !nextBtn) return;

  let current = 0;

  function open(index) {
    current = index;
    lbImg.src = imgs[current].src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  function prev() {
    current = (current - 1 + imgs.length) % imgs.length;
    lbImg.src = imgs[current].src;
  }

  function next() {
    current = (current + 1) % imgs.length;
    lbImg.src = imgs[current].src;
  }

  imgs.forEach((img, i) => img.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (lightbox.style.display !== 'flex') return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });
}

// ─── Sparkle Buttons ──────────────────────────────────────────────────────────
function initSparkleButtons() {
  const SPARKLE_SVG = '<svg viewBox="0 0 96 96" fill="none" aria-hidden="true"><path d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z" fill="#fff"/></svg>';
  const sparkles = SPARKLE_SVG.repeat(5);
  document.querySelectorAll('.sparkle-btn').forEach(btn => {
    btn.insertAdjacentHTML('afterbegin', sparkles);
  });
}

// ─── Sparkle Nav Logo ─────────────────────────────────────────────────────────
// Set to false to disable the looping sparkle + glare on the navbar logo
const SPARKLE_NAV_LOGO = true;

function initNavLogoSparkle() {
  if (!SPARKLE_NAV_LOGO) return;
  const SPARKLE_SVG = '<svg viewBox="0 0 96 96" fill="none" aria-hidden="true"><path d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z" fill="#fff"/></svg>';
  document.querySelectorAll('.sparkle-logo').forEach(el => {
    el.insertAdjacentHTML('afterbegin', SPARKLE_SVG.repeat(5));
  });
}

// ─── Founder's Rate ───────────────────────────────────────────────────────────
// Set active: false to disable all callouts across the site
const FOUNDERS_RATE = { active: true };

function initFoundersRate() {
  if (!FOUNDERS_RATE.active) return;

  // Wrap banner + site-nav in a single sticky block so the browser
  // naturally pushes all page content below their combined height.
  const topbar = document.createElement('div');
  topbar.id = 'topbar';
  document.body.insertBefore(topbar, document.body.firstChild);

  const banner = document.createElement('div');
  banner.id = 'founders-rate-banner';
  banner.innerHTML = `✦ Founder's Rate — 20% off all packages for early bookers<a href="/packages">See packages →</a>`;
  topbar.appendChild(banner);

  const siteNav = document.querySelector('site-nav');
  if (siteNav) topbar.appendChild(siteNav); // moves site-nav into topbar; CSS handles sticky on topbar

  // Homepage: callout between features and packages sections
  const homePackagesEl = document.getElementById('home-package-cards');
  if (homePackagesEl) {
    const packagesSection = homePackagesEl.closest('section');
    if (packagesSection) {
      const callout = document.createElement('section');
      callout.className = 'founders-rate-homepage';
      callout.innerHTML = `
        <div class="fr-eyebrow">Limited Time Offer</div>
        <h2>Founder's Rate — 20% Off</h2>
        <p>Book now and lock in 20% off any package. Available to our first wave of clients only.</p>
        <a href="/packages" class="fr-btn">View Packages →</a>
      `;
      packagesSection.before(callout);
    }
  }

  // Packages page: callout above package cards
  const pkgCardsEl = document.getElementById('packages-page-cards');
  if (pkgCardsEl) {
    const callout = document.createElement('div');
    callout.className = 'founders-rate-packages';
    callout.innerHTML = `
      <div>
        <div class="fr-tag">✦ Founder's Rate</div>
        <strong>20% Off All Packages</strong>
        <span>Available for early bookings — lock in your rate today.</span>
      </div>
      <a href="/contact">Book Now →</a>
    `;
    pkgCardsEl.before(callout);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initFoundersRate();  // moves site-nav into #topbar first
  initNav();           // then attaches listeners to the freshly placed nav
  initSparkleButtons();
  initNavLogoSparkle();
  initAccordion();
  initLightbox();
});
