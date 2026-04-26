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
  if (imgs.length === 0 || !lightbox) return;

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

// ─── Contact Form Validation ──────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;
  const errorMsg = document.getElementById('form-error');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('input, select, textarea').forEach(f => f.classList.remove('border-red-500'));

    form.querySelectorAll('[required]').forEach(f => {
      if (!f.value.trim()) { f.classList.add('border-red-500'); valid = false; }
    });

    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.classList.add('border-red-500');
      valid = false;
    }

    if (!valid) { errorMsg.style.display = 'block'; return; }
    errorMsg.style.display = 'none';
    form.submit();
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAccordion();
  initLightbox();
  initContactForm();
});
