// Partículas douradas flutuantes. Desligadas com prefers-reduced-motion.
export function initParticles() {
  const c = document.getElementById('particles'); if (!c || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const x = c.getContext('2d'); let w, h;
  const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight; }; resize(); addEventListener('resize', resize);
  const ps = Array.from({ length: 45 }, () => ({ x: Math.random()*w, y: Math.random()*h, r: Math.random()*1.8+.4, v: Math.random()*.3+.1, a: Math.random() }));
  (function draw() {
    x.clearRect(0, 0, w, h);
    for (const p of ps) { p.y -= p.v; p.a += .01; if (p.y < -5) { p.y = h + 5; p.x = Math.random()*w; }
      x.globalAlpha = .25 + .35*Math.abs(Math.sin(p.a)); x.fillStyle = '#f3d98b'; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill(); }
    requestAnimationFrame(draw);
  })();
}
