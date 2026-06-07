(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.classList.toggle('is-active', open);
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  }

  toggle.addEventListener('click', () => {
    setOpen(!menu.classList.contains('is-open'));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setOpen(false);
  });
})();
