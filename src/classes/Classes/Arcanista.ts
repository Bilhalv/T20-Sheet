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
  {
    nome: "Foco Vital.",
    descricao:
      "Se você estiver segurando seu foco e sofrer dano que o levaria a 0 PV ou menos, você fica com 1 PV e o foco perde PV igual ao valor excedente ou até ser destruído (se o foco for destruído, você sofre o dano excedente).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.tipo_arcanista],
    // Bruxo
  },
  {
    nome: "Fortalecimento Arcano.",
    descricao:
      "A CD para resistir a suas magias aumenta em +1. Se você puder lançar magias de 4o círculo, em vez disso ela aumenta em +2.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.nivel],
    // 5o nivel
  },
  {
    nome: "Magia Pungente.",
    descricao:
      "Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Poder Mágico.",
    descricao:
      "Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder no 4o nível, recebe 4 PM. Quando subir para o 5o nível, recebe +1 PM e assim por diante.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Raio Arcano.",
    descricao:
      "Você pode gastar uma ação padrão para causar 1d8 pontos de dano de essência num alvo em alcance curto. Esse dano aumenta em +1d8 para cada círculo de magia acima do 1o que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade. O raio arcano conta como uma magia para efeitos de habilidades e itens que beneficiem suas magias.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Raio Elemental.",
    descricao:
      "Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de ácido, eletricidade, fogo, frio ou trevas, a sua escolha. Se o alvo falhar no teste de Reflexos, sofre uma condição, de acordo com o tipo de dano (veja a descrição das condições na página 394). Ácido: vulnerável por 1 rodada. Eletricidade: ofuscado por 1 rodada. Fogo: fica em chamas. Frio: lento por 1 rodada. Trevas: não pode curar PV por 1 rodada.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    // raio arcano
  },
  {
    nome: "Raio Poderoso.",
    descricao:
      "Os dados de dano do seu Raio Arcano aumentam para d12 e o alcance dele aumenta para médio.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    // raio arcano
  },
  {
    nome: "Tinta do Mago.",
    descricao:
      "Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, seu custo para criar pergaminhos é reduzido à metade.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.tipo_arcanista, RequisitoPoder.pericia],
    // Mago, oficio(escriba)
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
