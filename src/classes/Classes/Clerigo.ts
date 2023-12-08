import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesClerigo: Poder[] = [
  {
    nome: "Abençoar arma",
    descricao:
      "Você se torna proficiente na arma preferida de sua divindade. Se estiver empunhando essa arma, pode gastar uma ação de movimento e 3 PM para infundi-la com poder divino. Até o final da cena, a arma é considerada mágica e emite luz dourada ou púrpura (como uma tocha). Além disso, o dano da arma aumenta em um passo e você pode usar sua Sabedoria em testes de ataque e rolagens de dano com ela, em vez do atributo padrão (não cumulativo com efeitos que somam este atributo).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Aumento de atributo",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Autoridade eclesiástica",
    descricao:
      "Você possui uma posição formal em uma igreja reconhecida pelos outros membros de sua fé. Os efeitos deste poder variam de acordo com a igreja e o deus — clérigos de Khalmyr, por exemplo, possuem autoridade como juízes no Reinado — e ficam a cargo do mestre. Como regra geral, você recebe +5 em testes de Diplomacia ou Intimidação ao lidar com devotos de sua divindade e paga metade do preço de itens alquímicos, poções e serviços em templos de sua divindade.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.nivel, RequisitoPoder.devoto],
    requisitos_descricao: ["Nível 5", "Devoto de um deus maior"],
  },
  {
    nome: "Canalizar energia positiva/negativa",
    descricao:
      "Você pode gastar uma ação padrão e PM para liberar uma onda de luz (se sua divindade canaliza energia positiva) ou trevas (se canaliza energia negativa) que afeta criaturas a sua escolha em alcance curto. Para cada PM que gastar, luz cura 1d6 PV em criaturas vivas e causa 1d6 pontos de dano de luz em mortos-vivos (Vontade CD Sab reduz o dano à metade). Trevas tem o efeito inverso — causa dano de trevas a criaturas vivas e cura mortos-vivos. Mortos-vivos têm direito a um teste de Vontade (CD Sab) para evitar qualquer destes efeitos.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Canalizar amplo",
    descricao:
      "Quando você usa a habilidade Canalizar Energia, pode gastar +2 PM para aumentar o alcance dela para médio.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Canalizar energia positiva/negativa"],
  },
  {
    nome: "Comunhão vital",
    descricao:
      "Quando lança uma magia que cure uma criatura, você pode pagar +2 PM para que outra criatura em alcance curto (incluindo você mesmo) recupere uma quantidade de pontos de vida igual à metade dos PV da cura original.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Conhecimento mágico",
    descricao:
      "Você aprende duas magias divinas de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Expulsar/comandar mortos-vivos",
    descricao:
      "Você pode gastar uma ação padrão e 3 PM para expulsar (se sua divindade canaliza energia positiva) ou comandar (se canaliza energia negativa) todos os mortos-vivos em alcance curto. Mortos-vivos expulsos ficam apavorados por 1d6 rodadas. Mortos-vivos comandados não inteligentes (Int –4 ou menor) ficam sob suas ordens por um dia (até um limite de ND somados igual a seu nível +3; dar uma ordem a todos eles é uma ação de movimento) e mortos-vivos comandados inteligentes ficam fascinados por uma rodada. Mortos-vivos têm direito a um teste de Vontade (CD Sab) para evitar qualquer destes efeitos.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Canalizar energia positiva/negativa"],
  },
  {
    nome: "Liturgia mágica",
    descricao:
      "Você pode gastar uma ação de movimento para executar uma breve liturgia de sua fé. Se fizer isso, a CD para resistir à sua próxima habilidade de clérigo (desde que usada até o final de seu próximo turno) aumenta em +2.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Magia sagrada/profana",
    descricao:
      "Quando lança uma magia divina que causa dano, você pode gastar +1 PM. Se fizer isso, muda o tipo de dano da magia para luz (se sua divindade canaliza energia positiva) ou trevas (se canaliza energia negativa).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Missa: Bênção da vida",
    descricao:
      "Os participantes recebem pontos de vida temporários em um valor igual ao seu nível + sua Sabedoria.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Missa: Chamado às armas",
    descricao:
      "Os participantes recebem +1 em testes de ataque e rolagens de dano.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Missa: Elevação do espírito",
    descricao:
      "Os participantes recebem pontos de mana temporários em um valor igual a sua Sabedoria.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Missa: Escudo divino",
    descricao: "Os participantes recebem +1 na Defesa e testes de resistência.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Missa: Superar as limitações",
    descricao:
      "Cada participante recebe +1d6 num único teste a sua escolha e pode usá-lo mesmo após rolar o dado.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Prece de combate",
    descricao:
      "Quando lança uma magia divina com tempo de conjuração de uma ação padrão em si mesmo, você pode gastar +2 PM para lançá-la como uma ação de movimento.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Símbolo sagrado energizado",
    descricao:
      "Você pode gastar uma ação de movimento e 1 PM para fazer uma prece e energizar seu símbolo sagrado até o fim da cena. Um símbolo sagrado energizado emite uma luz dourada ou prateada (se sua divindade canaliza energia positiva) ou púrpura ou avermelhada (se canaliza energia negativa) que ilumina como uma tocha. Enquanto você estiver empunhando um símbolo sagrado energizado, o custo em PM para lançar suas magias divinas diminui em 1.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
];

export const clerigo: Classe = {
  nome: "Clérigo",
  descricao:
    "Servo de um dos deuses de Arton, usa poderes divinos para defender seus ideais.",
  vidapnivel: 4,
  vidainicial: 16,
  manapnivel: 5,
  pericias: [TabelaPericiasEnum.Religião, TabelaPericiasEnum.Vontade],
  periciasescolha: [
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Cura,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Misticismo,
    TabelaPericiasEnum.Nobreza,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
  ],
  periciasescolhanum: 2,
  proficiencias: ["Armaduras pesadas", "Escudos"],
  habilidades: [
    {
      nome: "Devoto Fiel",
      descricao:
        " Você se torna devoto de um deus maior. Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode cultuar o Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única obrigação e restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que clérigos do Panteão consideram proibido). Sua arma preferida é a maça e você pode canalizar energia positiva ou negativa a sua escolha (uma vez feita, essa escolha não pode ser mudada). Cultuar o Panteão conta como sua devoção.",
    },
  ],
  poderesunicos: poderesClerigo,
  conjurador: true,
  imagem: "./img/classes/clerigo.png",
};
