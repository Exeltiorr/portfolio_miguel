export function initNav() {
  const btn = document.querySelector('.nav__toggle'), list = document.getElementById('menu');
  btn.addEventListener('click', () => { const o = list.classList.toggle('is-open'); btn.setAttribute('aria-expanded', o); });
  list.addEventListener('click', e => { if (e.target.closest('a')) { list.classList.remove('is-open'); btn.setAttribute('aria-expanded', false); } });
  const links = [...list.querySelectorAll('a')];
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('is-active', a.hash === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
}
