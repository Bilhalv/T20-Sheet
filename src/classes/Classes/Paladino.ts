import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesPaladino: Poder[] = [
  {
    nome: "Arma Sagrada",
    descricao:
      "Quando usa Golpe Divino para atacar com a arma preferida de sua divindade, o dado de dano que você rola por Golpe Divino aumenta para d12.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.devoto],
  },
  {
    nome: "Aumento de Atributo.",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Fulgor Divino",
    descricao:
      "Quando usa Golpe Divino, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Arrependimento",
    descricao:
      "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Na próxima vez que esse inimigo acertar um ataque em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, fica atordoado no próximo turno dele (apenas uma vez por cena).",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Autoridade",
    descricao:
      "Você pode gastar 1 PM para comandar uma criatura em alcance curto. Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você vencer, ele obedece a um comando simples, como “pare” ou “largue a arma” (apenas uma vez por cena). Mental.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Coragem",
    descricao:
      "Você pode gastar 2 PM para inspirar coragem em uma criatura em alcance curto, incluindo você mesmo. A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra o inimigo com maior ND na cena.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Iluminação",
    descricao:
      "Você pode marcar um inimigo em alcance curto. Quando acerta um ataque corpo a corpo nesse inimigo, você recebe 2 PM temporários. Você só pode proferir este julgamento uma vez por cena.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Justiça",
    descricao:
      "Você pode gastar 2 PM para marcar um inimigo em alcance curto. A próxima vez que esse inimigo causar dano em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, sofre dano de luz igual à metade do dano que causou.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Libertação",
    descricao:
      "Você pode gastar 5 PM para cancelar uma condição negativa qualquer (como abalado, paralisado etc.) que esteja afetando uma criatura em alcance curto.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Salvação",
    descricao:
      "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Até o fim da cena, quando você acerta um ataque corpo a corpo nesse inimigo, recupera 5 pontos de vida.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Vindicação",
    descricao: "Você pode gastar 2 PM para marcar um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5o nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Julgamento Divino: Zelo",
    descricao:
      "Você pode gastar 1 PM para marcar um alvo em alcance longo. Pelo restante da cena, sempre que se mover na direção desse alvo, você se move com o dobro de seu deslocamento.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Orar",
    descricao:
      "Você aprende e pode lançar uma magia divina de 1o círculo a sua escolha. Seu atributo-chave para esta magia é Sabedoria. Você pode escolher este poder quantas vezes quiser.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Virtude Paladinesca: Caridade",
    descricao:
      "O custo de suas habilidades de paladino que tenham um aliado como alvo é reduzido em –1 PM.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Virtude Paladinesca: Castidade",
    descricao:
      "Você se torna imune a efeitos de encantamento e recebe +5 em testes de Intuição para perceber blefes.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Virtude Paladinesca: Compaixão",
    descricao:
      "Você pode usar Cura pelas Mãos em alcance curto e, para cada PM que gastar, cura 2d6+1 (em vez de 1d8+1).",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Virtude Paladinesca: Humildade",
    descricao:
      "Na primeira rodada de um combate, você pode gastar uma ação completa para rezar e pedir orientação. Você recebe uma quantidade de PM temporários igual ao seu Carisma (duram até o fim da cena).",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Virtude Paladinesca: Temperança",
    descricao:
      "Quando ingere um alimento, item alquímico ou poção, você consome apenas metade do item. Na prática, cada item desses rende duas “doses” para você.",
    tipo: TipoPoder.classe,
    requisitos: [],
  }
  ];

export const paladino: Classe = {
  nome: "Paladino",
  descricao:
    "Um campeão do bem e da ordem, o perfeito soldado dos deuses.",
  vidapnivel: 5,
  vidainicial: 20,
  manapnivel: 3,
  pericias: [TabelaPericiasEnum.Luta, TabelaPericiasEnum.Vontade],
  periciasescolha: [
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Cura,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Guerra,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Nobreza,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Religião,
  ],
  periciasescolhanum: 2,
  proficiencias: ["Armas marciais", "Armaduras pesadas", "Escudos"],
  habilidades: [
    {
      nome: "Abençoado",
      descricao:
        "Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se devoto de um deus disponível para paladinos (Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria). Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode ser um paladino do bem, lutando em prol da bondade e da justiça como um todo. Não recebe nenhum Poder Concedido, mas não precisa seguir nenhuma Obrigação & Restrição (além do Código do Herói, abaixo). Cultuar o bem conta como sua devoção.",
    },
    {
      nome: "Código do Herói",
      descricao:
        "Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.",
    },
    {
      nome: "Golpe Divino",
      descricao:
        "Quando faz um ataque corpo a corpo, você pode gastar 2 PM para desferir um golpe destruidor. Você soma seu Carisma no teste de ataque e +1d8 na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o dano em +1d8.",
    },
    {
      nome: "Cura pelas Mãos",
      descricao:
        "A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para curar 1d8+1 pontos de vida de um alvo em alcance corpo a corpo (incluindo você). A cada quatro níveis, você pode gastar +1 PM para aumentar os PV curados em +1d8+1. Esta habilidade pode causar dano de luz a mortos-vivos, exigindo um ataque desarmado.",
    },
    {
      nome: "Aura Sagrada",
      descricao:
        "No 3º nível, você pode gastar 1 PM para gerar uma aura com 9m de raio a partir de você e duração sustentada. A aura emite uma luz dourada e agradável. Além disso, você e os aliados dentro da aura somam seu Carisma nos testes de resistência.",
    },
    {
      nome: "Bênção da Justiça",
      descricao:
        "No 5º nível, escolha entre égide sagrada e montaria sagrada. Uma vez feita, esta escolha não pode ser mudada. • Égide Sagrada. Você pode gastar uma ação de movimento e 2 PM para recobrir de energia seu escudo ou símbolo sagrado. Até o fim da cena, você e todos os aliados adjacentes recebem um bônus na Defesa igual ao seu Carisma. A partir do 11º nível, você pode gastar 5 PM para rolar novamente um teste de resistência contra uma magia recém lançada contra você. Se você passar no teste de resistência e a magia tiver você como único alvo, ela é revertida de volta ao conjurador (que se torna o novo alvo da magia; todas as demais características da magia, incluindo CD do teste de resistência, se mantêm). • Montaria Sagrada. Você pode gastar uma ação de movimento e 2 PM para invocar uma montaria sagrada. Veja o quadro para mais detalhes.",
    }
  ],
  poderesunicos: poderesPaladino,
  conjurador: false,
  imagem: "./img/classes/paladino.png",
};
