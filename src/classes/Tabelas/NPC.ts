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
      }
    ],
    equipamentos: [],
    nd: "2",
    pericias: [
      {
        nome: "Furtividade",
        mod: 9,
      },
    ],
    tesouro: "1d4 doses de veneno de aranha gigante (CD 17 para extrair, T$ 45 cada dose).",
    atributos: {
      for: 5,
      des: 4,
      con: 1,
      int: -5,
      sab: 0,
      car: -4,
    },
  },
];
