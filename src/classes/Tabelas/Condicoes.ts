import Condicao from "../Construtores/Condicao";

export const TabelaCondicoes: Condicao[] = [
  {
    nome: "Abalado",
    descricao:
      "O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Medo",
  },
  {
    nome: "Agarrado",
    descricao:
      "O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado. Movimento.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Movimento",
  },
  {
    nome: "Alquebrado",
    descricao:
      "O custo em pontos de mana das habilidades do personagem aumenta em +1.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Mental",
  },
  {
    nome: "Apavorado",
    descricao:
      "O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Medo",
  },
  {
    nome: "Atordoado",
    descricao: "O personagem fica desprevenido e não pode fazer ações.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Mental",
  },
  {
    nome: "Caído",
    descricao:
      "O personagem sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições).",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Movimento",
  },
  {
    nome: "Cego",
    descricao:
      "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Sentidos",
  },
  {
    nome: "Confuso",
    descricao:
      "O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Mental",
  },
  {
    nome: "Debilitado",
    descricao:
      "O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Mental",
  },
  {
    nome: "Desprevenido",
    descricao:
      "O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Mental",
  },
  {
    nome: "Doente",
    descricao: "Sob efeito de uma doença.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Metabolismo",
  },
  {
    nome: "Em Chamas",
    descricao:
      "O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.",
    img: "https://i.imgur.com/5Y8jQfU.png",
  },
  {
    nome: "Enfeitiçado",
    descricao:
      "O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.",
    img: "https://i.imgur.com/5Y8jQfU.png",
    tipo: "Mental",
  },
    {
        nome: "Enjoado",
        descricao:
        "O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro).",
        img: "https://i.imgur.com/5Y8jQfU.png",
        tipo: "Metabolismo",
    },
    {
        nome: "Enredado",
        descricao:
        "O personagem fica lento, vulnerável e sofre –2 em testes de ataque.",
        img: "https://i.imgur.com/5Y8jQfU.png",
        tipo: "Movimento",
    },
    {
        nome: "Envenenado",
        descricao:
        "O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). Perda de vida recorrente por venenos é cumulativa.",
        img: "https://i.imgur.com/5Y8jQfU.png",
        tipo: "Veneno",
    },
    {
        nome: "Esmorecido",
        descricao:
        "O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.",
        img: "https://i.imgur.com/5Y8jQfU.png",
        tipo: "Mental",
    },
    {
        nome: "Exausto",
        descricao:
        "O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.",
        img: "https://i.imgur.com/5Y8jQfU.png",
        tipo: "Cansaço",
    },
    {
        nome: "Fascinado",
        descricao:
        "Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.",
        img: "https://i.imgur.com/5Y8jQfU.png",
        tipo: "Mental",
    },
];
