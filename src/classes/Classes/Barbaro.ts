import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesBarbaro: Poder[] = [
  {
    nome: "Alma de Bronze",
    descricao:
      "Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a seu nível + sua Força",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Aumento de Atributo",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Brado Assustador",
    descricao:
      "Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto ficam vulneráveis até o fim da cena",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
    requisitos_descricao: ["Intimidação"]
    // intimitação
  },
  {
    nome: "Destruidor",
    descricao:
      "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Força 1"]
    // for 1
  },
  {
    nome: "Espírito Inquebrável",
    descricao:
      "Enquanto está em fúria, você não fica inconsciente por estar com 0 PV ou menos (você ainda morre se chegar em um valor negativo igual à metade de seus pontos de vida máximos)",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Alma de Bronze"]
    // alma de bronze
  },
  {
    nome: "Esquiva Sobrenatural",
    descricao:
      "Seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos o percebam. Você nunca fica surpreendido",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Força Indomável",
    descricao:
      "Você pode gastar 1 PM para somar seu nível em um teste de Força ou Atletismo. Você pode usar esta habilidade depois de rolar o dado, mas deve usá-la antes de o mestre dizer se você passou ou não",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Frenesi",
    descricao:
      "Uma vez por rodada, se estiver em fúria e usar a ação agredir para fazer um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 2 PM para fazer um ataque adicional",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Fúria da Savana",
    descricao:
      "Seu deslocamento aumenta em +3m. Quando usa Fúria, você aplica o bônus em ataque e dano também a armas de arremesso",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Fúria Raivosa",
    descricao:
      "Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Golpe Poderoso",
    descricao:
      "Ao acertar um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 1 PM para causar um dado extra de dano do mesmo tipo (por exemplo, com um montante, causa +1d6, para um dano total de 3d6; com um machado de guerra, causa +1d12, para um dano total de 2d12)",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Ímpeto",
    descricao:
      "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Investida Imprudente",
    descricao:
      "Quando faz uma investida, você pode aumentar sua penalidade na Defesa pela investida para –5 para receber um bônus de +1d12 na rolagem de dano deste ataque",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Pele de Ferro",
    descricao:
      "Você recebe +4 na Defesa, mas apenas se não estiver usando armadura pesada",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Sangue dos Inimigos",
    descricao:
      "Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Superstição",
    descricao:
      "Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +5",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Totem Espiritual",
    descricao:
      "Você soma sua Sabedoria no seu total de pontos de mana. Escolha um animal totêmico (veja o quadro ao lado). Você aprende e pode lançar uma magia definida pelo animal escolhido (atributo-chave Sabedoria) e pode lançá-la mesmo em fúria",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.nivel],
    requisitos_descricao: ["Sabedoria 1", "Nível 4"]
    // sab 1, nivel 4
  },
  {
    nome: "Vigor Primal",
    descricao:
      "Você pode gastar uma ação de movimento e uma quantidade de PM limitada por sua Constituição. Para cada PM que gastar, você recupera 1d12 pontos de vida",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },

];

export const barbaro: Classe = {
  nome: "Bárbaro",
  descricao:
    "Um combatente primitivo, que usa fúria e instintos para destruir seus inimigos",
  vidapnivel: 6,
  vidainicial: 24,
  manapnivel: 3,
  pericias: [TabelaPericiasEnum.Fortitude, TabelaPericiasEnum.Luta],
  periciasescolha: [
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pontaria,
    TabelaPericiasEnum.Sobrevivência,
    TabelaPericiasEnum.Vontade,
  ],
  periciasescolhanum: 4,
  proficiencias: ['Armas marciais', 'escudos'],
  habilidades: [
    {
      nome: "fúria",
      descricao: "Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1"
    },
    {
      nome: "instinto selvagem",
      descricao: "No 3º nível, você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1"
    },
    {
      nome: "redução de dano",
      descricao: "A partir do 5º nível, gra- ças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível"
    }
  ]
  ,
  poderesunicos: poderesBarbaro,
  conjurador: false,
  imagem: "./img/classes/barbaro.png",
};
