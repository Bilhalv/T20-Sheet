import { Poder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesLadino: Poder[] = [
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

export const ladino: Classe = {
  nome: "Ladino",
  descricao:
    "Aventureiro cheio de truques, confiando mais em agilidade e esperteza que em força bruta.",
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
  poderesunicos: poderesLadino,
  conjurador: true,
  imagem: "./img/classes/ladino.png",
};
