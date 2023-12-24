import NPC from "../Construtores/NPC";

export const TabelaNPC: NPC[] = [
  {
    img: "https://i.imgur.com/T3zFx74.png",
    nome: "Gorlogg",
    tipo: "Solo",
    raca: "Animal",
    tamanho: "Grande",
    iniciativa: 4,
    percepcao: 3,
    defesa: 16,
    fort: 8,
    ref: 5,
    von: 3,
    pv: 36,
    deslocamento: 9,
    corpoAcorpo: [
      {
        nome: "Mordida",
        crit: "20/x2",
        dano: "2d6",
        mod: 9,
        modDano: 8,
        tipo: "Perfuração",
      },
    ],
    poderes: [
      {
        nome: "Agarrar Aprimorado",
        execucao: "Livre",
        descricao:
          " Se o gorlogg acerta um ataque de mordida, pode usar a manobra agarrar (teste +13).",
      },
      {
        nome: "Visão na Penumbra",
        descricao:
          "A criatura enxerga em escuridão leve em alcance curto (exceto mágica). Ela ignora camuflagem leve por esse tipo de escuridão.",
      },
    ],
    equipamentos: [],
    nd: "1",
    pericias: [
      {
        nome: "Atletismo",
        mod: 9,
      },
    ],
    tesouro: "Nenhum",
    pm: 0,
    atributos: {
      for: 5,
      des: 2,
      con: 5,
      int: -4,
      sab: 1,
      car: -2,
    },
  },
  {
    nome: "Aranha Gigante",
    img: "https://i.imgur.com/CboTNdm.png",
    tipo: "Solo",
    raca: "Monstro",
    tamanho: "Grande",
    iniciativa: 7,
    percepcao: 3,
    defesa: 19,
    fort: 8,
    ref: 11,
    von: 3,
    pv: 77,
    deslocamento: 12,
    pm: 0,
    corpoAcorpo: [
      {
        nome: "Mordida",
        crit: "20/x2",
        dano: "2d6",
        mod: 12,
        modDano: 8,
        tipo: "Perfuração",
      },
    ],
    poderes: [
      {
        nome: "Veneno",
        descricao: "Condição Fraco (Fort CD 18 evita).",
      },
      {
        nome: "Visão no Escuro",
        descricao:
          "A criatura enxerga em escuridão total em alcance curto (exceto mágica). Ela ignora camuflagem total por esse tipo de escuridão.",
      },
      {
        nome: "Escalada",
        descricao:
          "A aranha tem velocidade de escalada igual a sua velocidade de deslocamento.",
      },
    ],
    equipamentos: [],
    nd: "2",
    pericias: [
      {
        nome: "Furtividade",
        mod: 9,
      },
    ],
    tesouro:
      "1d4 doses de veneno de aranha gigante (CD 17 para extrair, T$ 45 cada dose).",
    atributos: {
      for: 5,
      des: 4,
      con: 1,
      int: -5,
      sab: 0,
      car: -4,
    },
  },
  {
    nome: "Chefe Bandido",
    img: "https://i.imgur.com/OqQmcQQ.png",
    tipo: "Solo",
    raca: "Humano",
    tamanho: "Médio",
    iniciativa: 4,
    percepcao: 2,
    defesa: 16,
    fort: 5,
    ref: 8,
    von: 3,
    pv: 30,
    deslocamento: 9,
    pm: 0,
    corpoAcorpo: [
      {
        nome: "Espada Curta",
        crit: "19/x2",
        dano: "1d6",
        mod: 9,
        modDano: 5,
        tipo: "Corte",
      },
      {
        nome: "Adaga",
        crit: "19/x2",
        dano: "1d4",
        mod: 7,
        modDano: 3,
        tipo: "Perfuração",
      },
    ],
    poderes: [
      {
        nome: "Ataque Furtivo +2d6",
        descricao:
          "Uma vez por rodada, o chefe bandido causa +2d6 pontos de dano com ataques corpo a corpo, ou à distância em alcance curto, contra alvos desprevenidos ou que esteja flanqueando",
      },
    ],
    equipamentos: ["Espada Curta", "Adaga"],
    nd: "1",
    pericias: [
      {
        nome: "Furtividade",
        mod: 7,
      },
      {
        nome: "Intimidação",
        mod: 6,
      },
    ],
    tesouro: "Padrão",
    atributos: {
      for: 3,
      des: 2,
      con: 2,
      int: 0,
      sab: 0,
      car: 1,
    },
    distancia: [
      {
        nome: "Adaga",
        crit: "19/x2",
        dano: "1d4",
        mod: 7,
        modDano: 3,
        tipo: "Perfuração",
        alcance: "Curto",
      },
    ],
  },
  {
    nome: "Bandido",
    img: "https://i.imgur.com/fKCM5CE.png",
    tipo: "Lacaio",
    raca: "Humano",
    tamanho: "Médio",
    iniciativa: 4,
    percepcao: 1,
    defesa: 13,
    fort: 1,
    ref: 3,
    von: -1,
    pv: 6,
    deslocamento: 9,
    pm: 0,
    corpoAcorpo: [
      {
        nome: "Clava",
        crit: "20/x2",
        dano: "1d6",
        mod: 3,
        modDano: 3,
        tipo: "Impacto",

      },
    ],
    atributos:{
      for: 1,
      des: 2,
      con: 1,
      int: 0,
      sab: -1,
      car: 0,
    },
    poderes: [],
    equipamentos: ["Clava"],
    nd: "1/4",
    pericias: [
      {
        nome: "Furtividade",
        mod: 5,
      },
    ],
    tesouro: "Metade",
  }
];
