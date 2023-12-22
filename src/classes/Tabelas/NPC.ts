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
];
