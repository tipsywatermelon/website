// ─── Site Nav ─────────────────────────────────────────────────────────────────
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- NAV -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-theme-nav backdrop-blur-sm border-b border-theme" style="min-height: 68px;">
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
      <a href="index.html" class="text-theme-primary font-medium tracking-[0.25em] uppercase text-lg"><img src="images/logo_h.png" alt="TINYDISCO" style="height: 2rem;"></a>
      <ul class="hidden md:flex items-center gap-8">
        <!-- hide gallery for now since we don't have it ready -->
        <!--<li><a href="gallery.html"  class="text-theme-nav text-sm font-medium tracking-widest uppercase transition-colors duration-200 font-['Instrument_Sans']">Gallery</a></li>-->
        <li><a href="packages.html" class="text-theme-nav text-sm font-medium tracking-widest uppercase transition-colors duration-200 font-['Instrument_Sans']">Packages</a></li>
        <li><a href="about.html"    class="text-theme-nav text-sm font-medium tracking-widest uppercase transition-colors duration-200 font-['Instrument_Sans']">About</a></li>
        <li><a href="faq.html"      class="text-theme-nav text-sm font-medium tracking-widest uppercase transition-colors duration-200 font-['Instrument_Sans']">FAQ</a></li>
        <li><a href="contact.html" class="sparkle-btn"><span class="sparkle-btn__text">Book Now</span><span class="sparkle-btn__glare" aria-hidden="true">Book Now</span></a></li>
      </ul>
      <button id="hamburger" class="md:hidden text-theme-primary p-1" aria-label="Open menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- MOBILE MENU -->
  <div id="mobile-menu" style="display:none" class="fixed inset-0 z-50 bg-theme-base flex-col items-center justify-center">
    <button id="close-menu" class="absolute top-6 right-6 text-theme-primary p-1" aria-label="Close menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <ul class="flex flex-col items-center gap-10">
      <li><a href="index.html"    class="text-theme-nav text-2xl tracking-[0.2em] uppercase font-['Instrument_Sans']">Home</a></li>
      <li><a href="gallery.html"  class="text-theme-nav text-2xl tracking-[0.2em] uppercase font-['Instrument_Sans']">Gallery</a></li>
      <li><a href="packages.html" class="text-theme-nav text-2xl tracking-[0.2em] uppercase font-['Instrument_Sans']">Packages</a></li>
      <li><a href="about.html"    class="text-theme-nav text-2xl tracking-[0.2em] uppercase font-['Instrument_Sans']">About</a></li>
      <li><a href="faq.html"      class="text-theme-nav text-2xl tracking-[0.2em] uppercase font-['Instrument_Sans']">FAQ</a></li>
      <li><a href="contact.html"  class="text-theme-nav text-2xl tracking-[0.2em] uppercase font-['Instrument_Sans']">Book Now</a></li>
    </ul>
  </div>`;
  }
}

// ─── Site Footer ──────────────────────────────────────────────────────────────
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- FOOTER -->
  <footer class="bg-theme-base border-t border-theme py-10 px-6 text-center">
    <div class="max-w-7xl mx-auto">
      <p class="text-theme-primary font-medium tracking-[0.25em] uppercase text-sm mb-5">TINYDISCO</p>
      <div class="flex items-center justify-center gap-8 mb-6">
        <a href="https://www.instagram.com/tinydiscophotobooth" target="_blank" class="text-theme-secondary hover-text-primary text-xs tracking-widest uppercase transition-colors duration-200">Instagram</a>
        <a href="mailto:hello@tinydisco.com" class="text-theme-secondary hover-text-primary text-xs tracking-widest uppercase transition-colors duration-200">Email</a>
      </div>
      <p class="text-theme-secondary text-xs tracking-widest">© 2026 TINYDISCO. All rights reserved.</p>
    </div>
  </footer>`;
  }
}

customElements.define('site-nav', SiteNav);
customElements.define('site-footer', SiteFooter);
