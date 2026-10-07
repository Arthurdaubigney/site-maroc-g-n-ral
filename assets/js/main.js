(function () {
  var root = document.documentElement;

  // Menu mobile
  var btn = document.querySelector('[data-menu-toggle]');
  var panel = document.querySelector('[data-menu-panel]');
  if (btn && panel) {
    var setOpen = function (open) {
      panel.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      panel.toggleAttribute('inert', !open);
    };
    setOpen(false);
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  // Ombre de l'en-tête au défilement
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('shadow-[0_8px_30px_-18px_rgba(7,31,25,0.45)]', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Formulaire Tally : chargé à l'approche de l'écran
  var tally = document.querySelectorAll('iframe[data-tally-src]');
  if (tally.length) {
    var loadTally = function () {
      var fallback = function () {
        tally.forEach(function (f) { if (!f.src) f.src = f.getAttribute('data-tally-src'); });
      };
      if (window.Tally) { window.Tally.loadEmbeds(); return; }
      var sc = document.createElement('script');
      sc.src = 'https://tally.so/widgets/embed.js';
      sc.onload = function () { window.Tally ? window.Tally.loadEmbeds() : fallback(); };
      sc.onerror = fallback;
      document.body.appendChild(sc);
    };
    if ('IntersectionObserver' in window) {
      var tio = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) { tio.disconnect(); loadTally(); }
      }, { rootMargin: '600px 0px' });
      tally.forEach(function (f) { tio.observe(f); });
    } else { loadTally(); }
  }

  // Révélation au défilement
  var items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-shown'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-shown');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
