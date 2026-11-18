import { data as d } from './modules/data.js';
import { PhotoSlot } from './components/PhotoSlot.js';
import { DecorationSlot } from './components/DecorationSlot.js';
import { SectionHeader as H } from './components/SectionHeader.js';
import { scrollReveal } from './modules/scrollReveal.js';
import { initNav } from './modules/nav.js';
import { initParticles } from './modules/particles.js';

customElements.define('photo-slot', PhotoSlot);
customElements.define('decoration-slot', DecorationSlot);

// helpers de render
const slot = (o, tag = 'photo-slot', extra = '') => `<${tag} src="${o.src}" path="${o.path}" label="${o.label}" ${o.type ? `type="${o.type}"` : ''} ${extra}></${tag}>`;
const $ = id => document.getElementById(id);
const empty = t => `<div class="card editable-slot"><span class="badge">📝 CONTEÚDO PENDENTE</span>${t}</div>`;
const isPlaceholder = t => /^\[.*\]$/.test(t.trim());

$('logo').textContent = d.name;
$('menu').innerHTML = d.nav.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('');

$('inicio').innerHTML = `<div class="reveal is-visible">${slot(d.hero.photo, 'photo-slot', 'aspect-ratio="1/1"')}
  <h1>${d.name}</h1><p>${d.title}</p><a class="btn" href="${d.hero.ctaHref}">${d.hero.cta}</a></div>`;

// SEÇÃO 1 — Quem Sou Eu
$('quem-sou').innerHTML = H('t-quem-sou', 'Prazer em conhecer', 'Quem Sou Eu') + `
 <div class="grid grid--about reveal"><div><div class="frame">${slot(d.about.photo, 'photo-slot', 'aspect-ratio="3/4"')}</div></div>
 <div><div class="about__text ${isPlaceholder(d.about.bio) ? 'editable-slot' : ''}">${isPlaceholder(d.about.bio) ? '<span class="badge">✏️ EDITE AQUI</span>' : ''}<p>${d.about.bio}</p></div>
 <dl class="about__info">${d.about.info.map(([k, v]) => {
  const p = isPlaceholder(v);
  return `<div class="${p ? 'editable-slot' : 'card'}">${p ? '<span class="badge">✏️ EDITE AQUI</span>' : ''}<dt class="meta">${k}</dt><dd>${v}</dd></div>`;
}).join('')}</dl>
 <div class="side-gif">${slot(d.about.gif, 'decoration-slot', 'aspect-ratio="1/1"')}</div></div></div>`;

// SEÇÃO 2 — O Que Fiz
const work = d.work.items.length ? d.work.items.map(i => `<article class="card"><p class="meta">${i.meta}</p><h3>${i.title}</h3><p>${i.text}</p></article>`).join('')
  : [1,2,3].map(() => empty('<h3>[ADICIONE AQUI SUA EXPERIÊNCIA / PROJETO]</h3>')).join('');
$('o-que-fiz').innerHTML = H('t-o-que-fiz', 'Trajetória', 'O Que Fiz') + `
 <div class="grid grid--about reveal"><div class="side-gif">${slot(d.work.gif, 'decoration-slot', 'aspect-ratio="3/4"')}</div>
 <div><div class="timeline">${work}</div><div class="logos">${d.work.logos.map(l => slot(l, 'photo-slot', 'aspect-ratio="2/1"')).join('')}</div></div></div>`;

$('o-que-gosto').insertAdjacentHTML('beforebegin', `<div class="between">${slot(d.between, 'decoration-slot', 'aspect-ratio="4/1"')}</div>`);

// SEÇÃO 3 — O Que Gosto
$('o-que-gosto').innerHTML = H('t-o-que-gosto', 'Paixões', 'O Que Gosto') + `<div class="reveal">
 ${d.likes.items.length ? `<div class="tags">${d.likes.items.map(i => `<span class="tag">${i}</span>`).join('')}</div>` : empty('<h3>[ADICIONE AQUI SEUS INTERESSES / HOBBIES]</h3>')}
 <div class="grid grid--4" style="margin-top:var(--space)">${d.likes.media.map(m => slot(m, 'photo-slot', 'aspect-ratio="1/1"')).join('')}</div></div>`;

// Complementares
$('skills').innerHTML = H('t-skills', 'Competências', 'Habilidades') + `<div class="grid grid--2 reveal"><ul>${d.skills.map(([n, v]) => `<li>${n}<div class="bar" role="progressbar" aria-label="${n}" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100"><span style="width:${v}%"></span></div></li>`).join('')}</ul>
 <div class="tags">${d.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div></div>`;
$('formacao').innerHTML = H('t-formacao', 'Aprendizado', 'Formação e Certificações') + `<div class="timeline reveal">${d.education.map(e => `<article class="card"><p class="meta">${e.meta}</p><h3>${e.title}</h3></article>`).join('')}</div>`;
$('contato').innerHTML = H('t-contato', 'Vamos conversar', 'Contato') + `<div class="contact reveal">${d.contact.map(([n, u]) => `<a class="btn" href="${u}" rel="noopener">${n}</a>`).join('')}</div>`;
$('footer').innerHTML = `${slot(d.footer.signature, 'decoration-slot', 'aspect-ratio="3/1"')}<p>${d.footer.text}</p>`;

scrollReveal(); initNav(); initParticles();
