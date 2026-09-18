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
