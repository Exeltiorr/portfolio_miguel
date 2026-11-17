// Renderiza o cabeçalho de seção. id = id do <h2> (usado por aria-labelledby).
export const SectionHeader = (id, eyebrow, title) =>
  `<header class="section-header reveal"><p class="eyebrow">${eyebrow}</p><h2 id="${id}">${title}</h2></header>`;
