/* =========================
   MENÚ MOBILE
   ========================= */

(function () {
  const menuButton = document.querySelector('.mobile-menu-button');
  const nav = document.querySelector('.header-nav');

  if (!menuButton || !nav) return;

  menuButton.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
})();


/* =========================
   LOADING EN ENVÍO DE FORMULARIOS
   ========================= */

(function () {
  const forms = document.querySelectorAll('form');

  if (!forms.length) return;

  forms.forEach(function (form) {
    form.addEventListener('submit', function () {
      const submitButton = form.querySelector('[type="submit"]');

      if (!submitButton) return;

      submitButton.classList.add('is-loading');
      submitButton.disabled = true;
    });
  });
})();


/* =========================
   DEMO — SELECTOR DE THEME
   =========================
   Alterna el atributo data-theme del documento para demostrar el
   sistema de Theming de la Foundation. No es lógica de producto.
   ========================= */

(function () {
  const toggle = document.querySelector('.theme-demo-toggle');

  if (!toggle) return;

  const root = document.documentElement;

  function syncLabel() {
    const isAlt = root.getAttribute('data-theme') === 'alt';

    toggle.textContent = isAlt ? 'Tema: Alt' : 'Tema: Base';
    toggle.setAttribute('aria-pressed', String(isAlt));
  }

  toggle.addEventListener('click', function () {
    const isAlt = root.getAttribute('data-theme') === 'alt';

    if (isAlt) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'base');
    } else {
      root.setAttribute('data-theme', 'alt');
      localStorage.setItem('theme', 'alt');
    }

    syncLabel();
  });

  syncLabel();
})();
