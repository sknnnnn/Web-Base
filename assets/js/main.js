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
