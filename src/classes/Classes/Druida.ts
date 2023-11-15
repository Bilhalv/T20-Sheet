import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesDruida: Poder[] = [
  {
    nome: "Aspecto do inverno",
    descricao:
      "Você aprende e pode lançar uma magia de convocação ou evocação, arcana ou divina, de qualquer círculo que possa lançar. Além disso, recebe redução de frio 5 e suas magias que causam dano de frio causam +1 ponto de dano por dado.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Aspecto do outono",
    descricao:
      "Você aprende e pode lançar uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para impor uma penalidade de –2 nos testes de resistência de todos os inimigos em alcance curto até o início do seu próximo turno.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Aspecto da primavera",
    descricao:
      "Você aprende e pode lançar uma magia de encantamento ou ilusão, arcana ou divina, de qualquer círculo que possa lançar. Além disso, escolha uma quantidade de magias igual ao seu Carisma (mínimo 1). O custo dessas magias é reduzido em −1 PM.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Aspecto do verão",
    descricao:
      "Você aprende e pode lançar uma magia de transmutação, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para cobrir uma de suas armas com chamas até o fim da cena. A arma causa +1d6 pontos de dano de fogo. Sempre que você acertar um ataque com ela, recebe 1 PM temporário. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no final da cena.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Aumento de atributo",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Companheiro animal",
    descricao:
      "Você recebe um companheiro animal. Veja o quadro para detalhes. Você pode escolher este poder quantas vezes quiser, mas deve escolher companheiros diferentes e ainda está sujeito ao limite de parceiros que pode ter (veja a página 260).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
    requisitos_descricao: ["Carisma 1", "Adestramento"]
  },
  {
    nome: "Coração da selva",
    descricao:
      "A CD para resistir a seus efeitos de veneno aumenta em +2 e estes efeitos causam +1 de perda de vida por dado.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Força dos penhascos",
    descricao:
      "Você recebe +2 em Fortitude. Quando sofre dano enquanto em contato com o solo ou uma superfície de pedra, pode gastar uma quantidade de PM limitada por sua Sabedoria. Para cada PM gasto, reduz esse dano em 10.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.nivel],
    requisitos_descricao: ["Nível 4"]
  },
  {
    nome: "Forma selvagem",
    descricao:
      "Você pode se transformar em animais (veja a seguir).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Forma ágil",
    descricao:
      "Você recebe Destreza +2 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Se atacar com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Forma feroz",
    descricao:
      "Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Forma resistente",
    descricao:
      "Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Forma sorrateira",
    descricao:
      "Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, –2 em testes de manobra).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Forma veloz",
    descricao: "Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Liberdade da pradaria",
    descricao:
      "Você recebe +2 em Reflexos. Se estiver ao ar livre, sempre que lança uma magia, pode gastar 1 PM para aumentar o alcance dela em um passo (de toque para curto, de curto para médio ou de médio para longo).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Magia natural",
    descricao:
      "Em forma selvagem, você pode lançar magias e empunhar catalisadores e esotéricos.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Forma selvagem"]
  },
];

export const druida: Classe = {
  nome: "Druida",
  descricao:
    "Guardião do mundo natural e devoto das forças selvagens, naturais ou monstruosas.",
  vidapnivel: 4,
  vidainicial: 16,
  manapnivel: 4,
  pericias: [TabelaPericiasEnum.Sobrevivência, TabelaPericiasEnum.Vontade],
  periciasescolha: [
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Cura,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Misticismo,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Religião,
  ],
  periciasescolhanum: 4,
  proficiencias: ["Escudos"],
  habilidades: [
    {
      nome: "Devoto Fiel.",
      descricao: "Você se torna devoto de um deus disponível para druidas (Allihanna, Megalokk ou Oceano). Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um."
    },
    {
      nome: "Empatia Selvagem",
      descricao: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja a página 118)."
    },
    {
      nome: "Caminho dos Ermos",
      descricao: "No 2º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastreá-lo aumenta em +10. Esta habilidade só funciona em terrenos naturais."
    },
  ],
  poderesunicos: poderesDruida,
  conjurador: true,
  imagem: "./img/classes/druida.png",
};