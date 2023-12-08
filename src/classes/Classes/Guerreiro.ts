import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesGuerreiro: Poder[] = [
  {
    nome: "Ambidestria",
    descricao:
      "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. ",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Destreza 2"],
  },
  {
    nome: "Arqueiro",
    descricao:
      "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria em rolagens de dano (limitado pelo seu nível). ",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Sabedoria 1"],
  },
  {
    nome: "Ataque Reflexo",
    descricao:
      "Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover voluntariamente para fora do seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo (apenas uma vez por alvo a cada rodada). ",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Destreza 1"],
  },
  {
    nome: "Aumento de Atributo",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Bater e Correr",
    descricao:
      "Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Destruidor",
    descricao:
      "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 da rolagem de dano da arma. ",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Força 1"],
  },
  {
    nome: "Esgrimista",
    descricao:
      "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência em rolagens de dano (limitado pelo seu nível). ",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Inteligência 1"],
  },
  {
    nome: "Especialização em Arma",
    descricao:
      "Escolha uma arma. Você recebe +2 em rolagens de dano com essa arma. Você pode escolher este poder outras vezes para armas diferentes.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Golpe de Raspão",
    descricao:
      "Uma vez por rodada, quando erra um ataque, você pode gastar 2 PM. Se fizer isso, causa metade do dano que causaria (ignorando efeitos que se aplicariam caso o ataque acertasse).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Golpe Demolidor",
    descricao:
      "Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a redução de dano dele.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Golpe Pessoal",
    descricao:
      "Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma técnica única, com efeitos determinados por você. Você constrói seu Golpe Pessoal escolhendo efeitos da lista a seguir. Cada efeito possui um custo; a soma deles será o custo do Golpe Pessoal (mínimo 1 PM). O Golpe Pessoal só pode ser usado com uma arma específica (por exemplo, apenas espadas longas). Quando sobe de nível, você pode reconstruir seu Golpe Pessoal e alterar a arma que ele usa. Você pode escolher este poder outras vezes para golpes diferentes e não pode gastar mais PM em golpes pessoais em uma mesma rodada do que seu limite de PM.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.nivel],
    requisitos_descricao: ["Nível 5"],
  },
  {
    nome: "Ímpeto",
    descricao:
      "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Romper Resistências",
    descricao:
      "Quando faz um Ataque Especial, você pode gastar 1 PM adicional para ignorar 10 pontos de redução de dano.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Solidez",
    descricao:
      "Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Valentão",
    descricao:
      "Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
];

export const guerreiro: Classe = {
  nome: "Guerreiro",
  descricao: "O especialista supremo em técnicas de combate com armas.",
  vidapnivel: 5,
  vidainicial: 20,
  manapnivel: 3,
  pericias: [
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Pontaria,
    TabelaPericiasEnum.Fortitude,
  ],
  periciasescolha: [
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Guerra,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pontaria,
    TabelaPericiasEnum.Reflexos,
  ],
  periciasescolhanum: 2,
  proficiencias: ["Armas marciais", "Armaduras pesadas", "Escudos"],
  habilidades: [
    {
      nome: "Ataque especial",
      descricao:
        "Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.",
    },
    {
      nome: "Durão",
      descricao:
        "A partir do 3º nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode gastar 3 PM para reduzir esse dano à metade.",
      nivel: 3,
    },
  ],
  poderesunicos: poderesGuerreiro,
  conjurador: false,
  imagem: "./img/classes/guerreiro.png",
};
