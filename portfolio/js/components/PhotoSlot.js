// <photo-slot src alt label aspect-ratio type path>
// Sem "src" → mostra placeholder .editable-slot com o caminho esperado.
export class PhotoSlot extends HTMLElement {
  static observedAttributes = ['src','alt','label','aspect-ratio','type','path'];
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  get fallbackIcon() { return '🖼️'; }
  render() {
    const g = (a, d = '') => this.getAttribute(a) || d;
    const type = g('type', 'photo'), label = g('label', 'Imagem'), src = g('src');
    const path = g('path', type === 'gif' ? 'assets/gifs/meu-gif.gif' : 'assets/images/minha-foto.jpg');
    this.style.aspectRatio = g('aspect-ratio', type === 'banner' ? '16/5' : '1/1');
    this.className = `slot slot--${type}` + (src ? '' : ' editable-slot');
    if (src) {
      this.removeAttribute('role'); this.removeAttribute('aria-label');
      const img = new Image(); img.src = src; img.alt = g('alt', label); img.loading = 'lazy';
      this.replaceChildren(img);
    } else {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', `Espaço vazio: ${label}. Adicione o arquivo ${path}`);
      this.innerHTML = `<span class="badge">✏️ EDITE AQUI</span><span class="slot__icon" aria-hidden="true">${this.fallbackIcon}</span><strong>Adicione sua ${type === 'gif' ? 'gif' : 'foto'} aqui</strong><code>${path}</code>`;
    }
  }
}
