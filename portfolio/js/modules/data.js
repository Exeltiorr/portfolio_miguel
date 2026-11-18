// ============================================================
// CONTEÚDO — EDITE ESTE ARQUIVO para preencher o site.
// Deixe "src" vazio ("") para mostrar o placeholder dourado.
// ============================================================
export const data = {
  name: 'Miguel Steinbach Auache Negreiros Bodden',
  title: 'Grã-Mestre de Xadrez em desenvolvimento, Mestre em Jogos de Plataforma',
  nav: [['quem-sou','Quem Sou Eu'],['o-que-fiz','O Que Fiz'],['o-que-gosto','O Que Gosto'],['skills','Habilidades'],['formacao','Formação'],['contato','Contato']],
  hero: { cta: 'Conheça minha história', ctaHref: '#quem-sou', photo: { src: 'assets/images/minha-foto.jpg', path: 'assets/images/minha-foto.jpg', label: 'Foto de perfil' } },
  about: {
    photo: { src: 'assets/images/minha-foto.jpg', path: 'assets/images/perfil.jpg', label: 'Foto de perfil' },
    gif: { src: 'assets/gifs/sobre.gif', path: 'assets/gifs/sobre.gif', label: 'GIF temático' },
    bio: 'Eu sou o Miguel, um programador de sistemas web e de jogos em GameMaker & RPGMaker desde 2020. Gosto de passar meu tempo praticando minhas habilidades racionais no Xadrez e me divirto jogando jogos difíceis de precisão em plataforma e os famosos Soulsborne (Tais como Dark souls II, Elden Ring, e Bloodborne, todos jogos que eu platinei',   // texto vazio → mostra placeholder
    info: [['Nome','Miguel S.A.N. Bodden'],['Título','Grã-Mestre de Xadrez em desenvolvimento, Mestre em Jogos de Plataforma'],['Localização','Francisco Beltrão, Paraná'],['Contato','guelbodden@gmail.com']]
  },
  work: {
    items: [{ title: "Snowed In",
             meta: "Projeto Pessoal, 2026",
             text: "Apresentado na Feira dos Cursos Técnicos do Colégio Suplicy, é um RPG de turno."},
             { title: "Platina de Dark Souls II",
               meta: "Projeto Pessoal, 2025",
               text: "uma compleção completa do jogo Dark Souls II, o melhor da saga souls da FromSoftware."},
               { title: "Apresentação de Ensaio sobre a cegueira",
                meta: "Apresentação científica",
                text: "Uma apresentação explorando o clássico da literatura portuguesa de Saramago de maneira lúdica para o Colégio Suplicy."
               }
             
             // adicione objetos { title, meta, text } ; vazio mostra 3 placeholders
    ],
    logos: [{ src:'assets/images/logo-1.jpg', path:'assets/images/logo-1.jpg', label:'Logo empresa 1' },{ src:'assets/images/logo-2.png', path:'assets/images/logo-2.png', label:'Logo empresa 2' },{ src:'assets/images/logo-3.jpg', path:'assets/images/logo-3.jpg', label:'Logo empresa 3' }],
    gif: { src: 'assets/gifs/experiencia.gif', path: 'assets/gifs/experiencia.gif', label: 'GIF lateral' }
  },
  likes: {
    items: ['Xadrez', 'Jogos', 'Cosplay', 'Leitura'], // ex.: ['Xadrez','Fotografia'] ; vazio mostra placeholder
    media: [{ src: 'assets/images/xadrez.jpg',   path: 'assets/images/xadrez.jpg',   label: 'Jogando xadrez', type: 'photo' },
    { src: 'assets/images/ocarinaoftime.png',   path: 'assets/images/ocarinaoftime.png',   label: 'The Legend Of Zelda: Ocarina Of Time',         type: 'photo' },
    { src: 'assets/images/marisa.png',       path: 'assets/images/marisa.png',       label: 'Marisa kirisame',       type: 'gif'   },
    { src: 'assets/images/comedia.jpg',                           path: 'assets/images/comedia.jpg',  label: 'A Divina Comedia',         type: 'photo' },
    ]
  },
  between: { src: 'assets/gifs/paige.gif', path: 'assets/gifs/paige.gif', label: 'GIF decorativo entre seções' },
  skills: [['Programação',81],['Gaming',90],['Xadrez',97]],
  tags: ['Trabalho em equipe','Comunicação','Resolução de problemas','Pensamento lógico'],
  education: [{ title:'Profiiência nível C2 em Inglês', meta:'Wizard · 2024' },{ title:'Proficiência em Reparo de hardware', meta:'Jumper · 2026' }],
  contact: [['E-mail','mailto:guelbodden@gmail.com'],['Instagram','https://www.instagram.com/guelbodden/'],['GitHub','https://github.com/Exeltiorr']],
  footer: { text: '© 2026 Miguel. Feito com HTML, CSS e JS.', signature: { src:'assets/images/roubeumexu.webp', path:'assets/images/roubeumexu.webp', label:'Assinatura visual', type:'banner' } }
};
