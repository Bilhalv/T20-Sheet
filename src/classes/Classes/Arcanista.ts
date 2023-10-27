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
    // Bruxo, oficio(alquimista)
  },
  {
    nome: "Conhecimento Mágico.",
    descricao:
      "Você aprende duas ma- gias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Contramágica Aprimorada.",
    descricao:
      "Uma vez por rodada, você pode fazer uma contramágica como uma reação (veja a página 173).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.magia],
    // Dissipar magia
  },
  {
    nome: "Envolto em Mistério.",
    descricao:
      "Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Escriba Arcano.",
    descricao:
      "Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender uma magia de 3o círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.tipo_arcanista, RequisitoPoder.pericia],
    // Mago, treinado em Ofício (escriba).
  },
  {
    nome: "Especialista em Escola.",
    descricao:
      "Especialista em Escola. Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.tipo_arcanista],
    // Bruxo ou Mago.
  },
  {
    nome: "Familiar.",
    descricao:
      "Você possui um animal de estimação mágico. Veja o quadro para detalhes.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  // {
  //   nome: "",
  //   descricao:
  //     "",
  //   tipo: TipoPoder.classe,
  //   requisitos: [],
  // },
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
