import { Poder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesInventor: Poder[] = [
  {
    nome: "Arcano de Batalha.",
    descricao:
      "Quando lança uma magia, você soma seu atributo-chave na rolagem de dano.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Aumento de Atributo.",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
];

export const inventor: Classe = {
  nome: "Inventor",
  descricao:
    "Um conjurador de magias arcanas, por meio de estudo, um foco ou dom natural.",
  vidapnivel: 2,
  vidainicial: 8,
  manapnivel: 6,
  pericias: [TabelaPericiasEnum.Misticismo, TabelaPericiasEnum.Vontade],
  periciasescolha: [
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Enganação,
    TabelaPericiasEnum.Guerra,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Investigação,
    TabelaPericiasEnum.Nobreza,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
  ],
  periciasescolhanum: 2,
  proficiencias: [],
  habilidades: [],
  poderesunicos: poderesInventor,
  conjurador: true,
  imagem: "./img/classes/inventor.png",
};
