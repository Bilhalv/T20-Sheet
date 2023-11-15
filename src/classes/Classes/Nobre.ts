import { Poder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesNobre: Poder[] = [
  {
    nome: "Aumento de Atributo.",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Educação Privilegiada",
    descricao:
      "Você se torna treinado em duas perícias de nobre a sua escolha.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Favor",
    descricao:
      "Você pode usar sua influência para pedir favores a pessoas poderosas. Isso gasta 5 PM e uma hora de conversa e bajulação, ou mais, de acordo com o mestre, e funciona como o uso persuasão de Diplomacia (veja a página 118). Porém, você pode pedir favores ainda mais caros, difíceis ou perigosos — um convite para uma festa particular, uma carona de barco até Galrasia ou mesmo acesso aos planos militares do reino. Se você falhar, não pode pedir o mesmo favor por pelo menos uma semana.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Inspirar confiança",
    descricao:
      "Sua presença faz as pessoas darem o melhor de si. Quando um aliado em alcance curto faz um teste, você pode gastar 2 PM para fazer com que ele possa rolar esse teste novamente.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Jogo da Corte",
    descricao:
      "Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia, Intuição ou Nobreza.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Língua de prata",
    descricao:
      "Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Língua rápida",
    descricao:
      "Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em vez de –10.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Voz poderosa",
    descricao:
      "Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
];

export const nobre: Classe = {
  nome: "Nobre",
  descricao:
    "Um membro da alta sociedade cujas principais armas são as palavras e o orgulho.",
  vidapnivel: 4,
  vidainicial: 16,
  manapnivel: 4,
  pericias: [TabelaPericiasEnum.Diplomacia, TabelaPericiasEnum.Intimidação ,TabelaPericiasEnum.Vontade],
  periciasescolha: [
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Atuação,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Enganação,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Guerra,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Investigação,
    TabelaPericiasEnum.Jogatina,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Nobreza,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pontaria,
  ],
  periciasescolhanum: 4,
  proficiencias: ["Armas marciais", "Armaduras pesadas", "Escudos"],
  habilidades: [
    {
      nome: "Autoconfiança",
      descricao:
        "Você pode usar seu Carisma em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada).",
    },
    {
      nome: "Espólio",
      descricao:
        "Você recebe um item a sua escolha com preço de até T$ 2.000.",
    },
    {
      nome: "Orgulho",
      descricao:
        "Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste.",
    },
    {
      nome: "Palavras Afiadas",
      descricao:
        "Você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação oposto ao teste de Vontade de uma criatura inteligente (Int –3 ou maior) em alcance curto. Se vencer, você causa 2d6 pontos de dano psíquico não letal à criatura. Se perder, causa metade deste dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende (se você usou Diplomacia) ou fica apavorada e foge de você da maneira mais eficiente possível (se usou Intimidação). A cada quatro níveis, você pode gastar +1 PM para aumentar o dano (veja a tabela da classe). Mental.",
    },
    {
      nome: "Riqueza",
      descricao:
        "No 3º nível, você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez por aventura, pode fazer um teste de Carisma com um bônus igual ao seu nível de nobre. Você recebe um número de Tibares de ouro igual ao resultado do teste. Assim, um nobre de 5º nível com Carisma 4 que role 13 no dado recebe 22 TO. O uso desta habilidade é condicionado a sua relação com sua família, patrono ou negócios e a onde você está. Por exemplo, um nobre viajando pelos ermos, isolado da civilização, dificilmente teria como receber dinheiro.",
    },
    {
      nome: "Gritar Ordens",
      descricao:
        "A partir do 4º nível, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia igual à quantidade de PM que você gastou.",
    },
    {
      nome: "Presença Aristocrática",
      descricao: "A partir do 5º nível, sempre que uma criatura inteligente tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura.",
    }
  ],
  poderesunicos: poderesNobre,
  conjurador: false,
  imagem: "./img/classes/nobre.png",
};
