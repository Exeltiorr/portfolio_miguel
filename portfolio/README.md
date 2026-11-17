# Portfólio — estética noite & ouro

## Rodar localmente
ES Modules exigem servidor HTTP (não abra o arquivo direto):
`python3 -m http.server 8000` → http://localhost:8000  (ou `npx serve`)

## Onde editar
- **Todo o texto**: `js/modules/data.js` (nome, bio, experiências, interesses, skills, contatos, rodapé).
- **Estrutura**: `index.html`. **Cores/fontes/espaços**: `css/variables.css`.
- **Seções**: `css/sections.css`; **componentes**: `css/components.css`; **grid/responsivo (480/768/1024/1280)**: `css/layout.css`.

## Fotos e GIFs
Coloque arquivos em `assets/images/` e `assets/gifs/`, depois preencha `src` correspondente em `data.js`
(ex.: `src: 'assets/images/minha-foto.jpg'`). O placeholder mostra o caminho esperado.
Para usar manualmente no HTML:
`<photo-slot src="assets/images/x.jpg" alt="Descrição" label="Foto" aspect-ratio="3/4" type="photo"></photo-slot>`
`<decoration-slot src="assets/gifs/x.gif" type="gif"></decoration-slot>`
Atributos: `src`, `alt`, `label`, `aspect-ratio`, `type` (photo | gif | banner), `path` (caminho exibido no placeholder).

## Classe `.editable-slot`
Borda dourada tracejada + badge "✏️ EDITE AQUI" + pulso suave. Basta adicionar a classe e um `<span class="badge">` a qualquer bloco.
Some automaticamente dos slots quando `src` é preenchido; nos textos, quando você troca o `[PLACEHOLDER]` em `data.js`.

## Checklist
- [ ] Trocar todos os `[PLACEHOLDERS]` em `data.js`
- [ ] Fotos em `assets/images/` (perfil, logos, gostos, assinatura, favicon.png, og-image.jpg)
- [ ] GIFs em `assets/gifs/` (sobre, experiencia, divisor)
- [ ] Atualizar `<title>` e metas em `index.html`
- [ ] Ajustar links de contato
