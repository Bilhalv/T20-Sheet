import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesLutador: Poder[] = [
  {
    nome: "Arma Improvisada",
    descricao: "Para você, atacar com armas improvisadas conta como fazer um ataque desarmado, mas seu dano aumenta em um passo. Você pode gastar uma ação de movimento para procurar uma pedra, cadeira, garrafa ou qualquer coisa que possa usar como arma. Faça um teste de Percepção (CD 20). Se você passar, encontra uma arma improvisada. Armas improvisadas são frágeis; se você errar um ataque e o resultado do d20 for um número ímpar, a arma quebra.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Até Acertar",
    descricao:
      "Se você errar um ataque desarmado, recebe um bônus cumulativo de +2 em testes de ataque e rolagens de dano desarmado contra o mesmo oponente. Os bônus terminam quando você acertar um ataque ou no fim da cena, o que acontecer primeiro.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Aumento de Atributo.",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Braços Calejados",
    descricao:
      "Se você não estiver usando armadura, soma sua Força na Defesa, limitado pelo seu nível.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Cabeçada",
    descricao:
      "Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso, o oponente fica desprevenido contra este ataque. Você só pode usar este poder uma vez por cena contra um mesmo alvo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Chave",
    descricao:
      "Se estiver agarrando uma criatura e fizer um teste de manobra contra ela para causar dano, o dano desarmado aumenta em um passo.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.poder, RequisitoPoder.nivel],
    requisitos_descricao: ["Inteligência 1", "Lutador de Chão", "Nível 4"]
  },
  {
    nome: "Convencido",
    descricao:
      "Acostumado a contar apenas com seus músculos, você adquiriu certo desdém por artes mais sofisticadas. Você recebe resistência a medo e mental +5.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Golpe Baixo",
    descricao:
      "Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso e acertar o ataque, o oponente deve fazer um teste de Fortitude (CD For). Se ele falhar, fica atordoado por uma rodada (apenas uma vez por cena).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Golpe imprudente",
    descricao:
      "Quando usa Golpe Relâmpago, você pode atacar de forma impulsiva. Se fizer isso, seus ataques desarmados recebem um dado de dano extra do mesmo tipo (por exemplo, se o seu dano é 2d6, você causa 3d6), mas você sofre –5 na Defesa até o início de seu próximo turno.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Língua dos Becos",
    descricao:
      "Você pode pagar 1 PM para usar sua Força no lugar de Carisma em um teste de perícia baseada em Carisma.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
    requisitos_descricao: ["Força 1", "Intimidação"]
  },
  {
    nome: "Lutador de Chão",
    descricao:
      "Você recebe +2 em testes de ataque para agarrar e derrubar. Quando agarra uma criatura, pode gastar 1 PM para fazer uma manobra derrubar contra ela como uma ação livre.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Rasteira",
    descricao:
      "Quando faz um ataque desarmado contra uma criatura até uma categoria de tamanho maior que a sua, você pode gastar 2 PM. Se fizer isso e acertar o ataque, a criatura fica caída.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Sarado",
    descricao:
      "Você soma sua Força no seu total de pontos de vida e em Fortitude. Você pode usar Força em vez de Carisma em testes de Diplomacia com pessoas que se atraiam por físicos bem definidos.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Força 3"]
  },
  {
    nome: "Valentão",
    descricao: "Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Voadora",
    descricao:
      "Quando faz uma investida desarmada, você pode gastar 2 PM. Se fizer isso, recebe +1d6 no dano para cada 3m que se deslocar até chegar ao oponente, limitado pelo seu nível.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  }

];

export const lutador: Classe = {
  nome: "Lutador",
  descricao:
    "Um especialista em combate desarmado rústico e durão.",
  vidapnivel: 5,
  vidainicial: 20,
  manapnivel: 3,
  pericias: [TabelaPericiasEnum.Fortitude, TabelaPericiasEnum.Luta],
  periciasescolha: [
    TabelaPericiasEnum.Acrobacia,
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Enganação,
    TabelaPericiasEnum.Furtividade,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pontaria,
    TabelaPericiasEnum.Reflexos,
  ],
  periciasescolhanum: 4,
  proficiencias: [],
  habilidades: [
    {
      nome: "Briga",
      descricao:
        "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos.",
    },
    {
      nome: "Casca Grossa",
      descricao:
        "No 3º nível, você soma sua Constituição na Defesa, limitado pelo seu nível e apenas se não estiver usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa.",
    },
    {
      nome: "Golpe Cruel",
      descricao:
        "No 5º nível, você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em +1.",
    }
  ],
  poderesunicos: poderesLutador,
  conjurador: false,
  imagem: "./img/classes/lutador.png",
};
