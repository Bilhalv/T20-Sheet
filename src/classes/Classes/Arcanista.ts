import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "./Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesArcanista: Poder[] = [
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
  {
    nome: "Caldeirão do Bruxo.",
    descricao:
      "Você pode criar poções, como se tivesse o poder geral Preparar Poção. Se tiver ambos, pode criar poções de até 5o círculo. Pré-requisitos: Bruxo, treinado em Ofício (alquimista).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.tipo_arcanista, RequisitoPoder.pericia],
  },
];

export const arcanista: Classe = {
  nome: "Arcanista",
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
  habilidades: ["caminho do arcanista"],
  poderesunicos: poderesArcanista,
  conjurador: true,
  imagem: "./img/templates/arcanista.png",
};
