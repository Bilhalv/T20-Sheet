import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesInventor: Poder[] = [
  {
    nome: "Agite Antes de Usar",
    descricao: "Quando usa um preparado alquímico que cause dano, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
  },
  {
    nome: "Ajuste de Mira",
    descricao: "Você pode gastar uma ação padrão e uma quantidade de PM a sua escolha (limitado pela sua Inteligência) para aprimorar uma arma de ataque à distância. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
  },
  {
    nome: "Alquimista de Batalha",
    descricao: "Quando usa um preparado alquímico ou poção que cause dano, você soma sua Inteligência na rolagem de dano.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
  },
  {
    nome: "Alquimista Iniciado",
    descricao: "Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1o e 2o círculos. Veja as páginas 333 e 341 para as regras de poções.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia]
  },
  {
    nome: "Armeiro",
    descricao: "Quando usa uma arma corpo a corpo feita por você mesmo, pode usar sua Inteligência em vez de Força nos testes de ataque e rolagens de dano.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia, RequisitoPoder.pericia]
  },
  {
    nome: "Aumento de Atributo",
    descricao: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: []
  },
  {
    nome: "Autômato",
    descricao: "Você fabrica um autômato, um construto que obedece a seus comandos. Ele é um parceiro iniciante de um tipo a sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele muda para veterano e, no 15º nível, para mestre. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Autômato Prototipado",
    descricao: "Você pode gastar uma ação padrão e 2 PM para ativar uma melhoria experimental em seu autômato. Role 1d6. Em um resultado 2 a 6, você aumenta o nível de parceiro do autômato em um passo (até mestre), ou concede a ele a habilidade iniciante de outro de seus tipos, até o fim da cena. Em um resultado 1, o autômato enguiça como uma engenhoca.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Balística",
    descricao: "Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar sua Inteligência em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia, RequisitoPoder.pericia]
  },
  {
    nome: "Cano Raiado",
    descricao: "Quando usa uma arma de disparo feita por você mesmo, ela recebe +1 na margem de ameaça.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder, RequisitoPoder.nivel]
  },
  {
    nome: "Catalisador Instável",
    descricao: "Você pode gastar uma ação completa e 3 PM para fabricar um preparado alquímico ou poção cuja fórmula conheça instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimista), mas ele só dura até o fim da cena.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Chutes e Palavrões",
    descricao: "Uma vez por rodada, você pode pagar 1 PM para repetir um teste de Ofício (engenhoqueiro) recém realizado para ativar uma engenhoca.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Conhecimento de Fórmulas",
    descricao: "Você aprende três fórmulas de quaisquer círculos que possa aprender. Você pode escolher este poder quantas vezes quiser.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Couraceiro",
    descricao: "Você recebe proficiência com armaduras pesadas e escudos. Quando usa armadura, pode usar sua Inteligência em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia]
  },
  {
    nome: "Engenhoqueiro",
    descricao: "Você pode fabricar engenhocas. Veja as regras para isso na página 70.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia]
  },
  {
    nome: "Farmacêutico",
    descricao: "Quando usa um item alquímico que cure pontos de vida, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item cura um dado extra do mesmo tipo.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder, RequisitoPoder.pericia]
  },
  {
    nome: "Ferreiro",
    descricao: "Quando usa uma arma corpo a corpo feita por você mesmo, o dano dela aumenta em um passo.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder, RequisitoPoder.nivel]
  },
  {
    nome: "Granadeiro",
    descricao: "Você pode arremessar itens alquímicos e poções em alcance médio. Você pode usar sua Inteligência em vez de Destreza para calcular a CD do teste de resistência desses itens.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Homúnculo",
    descricao: "Você possui um homúnculo, uma criatura Minúscula feita de alquimia. Vocês podem se comunicar telepaticamente em alcance longo e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho pode fazer. Um homúnculo é um parceiro ajudante iniciante. Você pode perder 1d6 pontos de vida para seu homúnculo assumir uma forma capaz de protegê-lo e se tornar também um parceiro guardião iniciante até o fim da cena.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Invenção Potente",
    descricao: "Quando usa um item ou engenhoca fabricado por você mesmo, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ele.",
    tipo: TipoPoder.classe,
    requisitos: []
  },
  {
    nome: "Maestria em Perícia",
    descricao: "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários. Com essas perícias, você pode gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque.",
    tipo: TipoPoder.classe,
    requisitos: []
  },
  {
    nome: "Manutenção Eficiente",
    descricao: "A quantidade de engenhocas que você pode manter aumenta em +3. Além disso, cada engenhoca passa a ocupar meio espaço.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder, RequisitoPoder.nivel]
  },
  {
    nome: "Mestre Cuca",
    descricao: "Todas as comidas que você cozinha têm seu bônus numérico aumentado em +1.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia]
  },
  {
    nome: "Mistura Fervilhante",
    descricao: "Quando usa um item alquímico ou poção, você pode gastar 2 PM para dobrar a área de efeito dele.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder, RequisitoPoder.nivel]
  },
  {
    nome: "Oficina de Campo",
    descricao: "Você pode gastar uma hora e 2 PM para fazer a manutenção do equipamento de seu grupo. Cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque, armaduras e escudos aumentam seu bônus na Defesa em +1. Os benefícios duram um dia.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia]
  },
  {
    nome: "Pedra de Amolar",
    descricao: "Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado por sua Inteligência) para aprimorar uma arma corpo a corpo que esteja empunhando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  },
  {
    nome: "Síntese Rápida",
    descricao: "Quando fabrica um item alquímico ou poção, você pode fabricar o dobro de doses no mesmo tempo (pagando o custo de matéria-prima de cada uma).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder]
  }
];

export const inventor: Classe = {
  nome: "Inventor",
  descricao:
    "Um ferreiro, alquimista ou engenhoqueiro, especializado em fabricar e usar itens.",
  vidapnivel: 3,
  vidainicial: 12,
  manapnivel: 4,
  pericias: [TabelaPericiasEnum.Ofício, TabelaPericiasEnum.Vontade],
  periciasescolha: [
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Cura,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Investigação,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Misticismo,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Pilotagem,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pontaria,
  ],
  periciasescolhanum: 4,
  proficiencias: [],
  habilidades: [
    {
      nome: "Engenhosidade",
      descricao:
        "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.",
    },
    {
      nome: "Protótipo",
      descricao:
        "Você começa o jogo com um item superior, ou com 10 itens alquímicos, com preço total de até T$ 500. Veja o Capítulo 3: Equipamento para a lista de itens.",
    },
    {
      nome: "Fabricar Item Superior",
      descricao:
        "No 2º nível, você recebe um item superior com preço de até T$ 2.000 e passa a poder fabricar itens superiores com uma melhoria. Veja o Capítulo 3: Equipamento para a lista de melhorias.",
    },
    {
      nome: "Comerciante",
      descricao:
        "No 3º nível, você pode vender itens 10% mais caro (não cumulativo com barganha).",
    }
  ],
  poderesunicos: poderesInventor,
  conjurador: false,
  imagem: "./img/classes/inventor.png",
};
