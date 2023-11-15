import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesLadino: Poder[] = [
  {
    nome: "Assassinar",
    descricao: "Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.nivel],
    requisitos_descricao: ["Nível 5"]
  },
  {
    nome: "Aumento de Atributo",
    descricao: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Contatos no Submundo",
    descricao: "Quando chega em uma comunidade equivalente a uma vila ou maior, você pode gastar 2 PM para fazer um teste de Carisma (CD 10). Se passar, enquanto estiver nessa comunidade, recebe +5 em testes de Investigação para interrogar, pode comprar itens mundanos, poções e pergaminhos com 20% de desconto (não cumulativo com barganha e outros descontos) e, de acordo com o mestre, tem acesso a itens e serviços proibidos (como armas de pólvora e venenos).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Emboscar",
    descricao: "Na primeira rodada de cada combate, você pode gastar 2 PM para executar uma ação padrão adicional em seu turno.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
    requisitos_descricao: ["Treinado em Furtividade"]
  },
  {
    nome: "Escapista",
    descricao: "Você recebe +5 em testes de Acrobacia para escapar, passar por espaço apertado e passar por inimigo e em testes para resistir a efeitos de movimento.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Fuga Formidável",
    descricao: "Você pode gastar uma ação completa e 1 PM para analisar o lugar no qual está (um castelo, um porto, a praça de uma cidade...). Até o fim da cena, recebe +3m em seu deslocamento, +5 em Acrobacia e Atletismo e ignora penalidades em movimento por terreno difícil. Você perde esses benefícios se fizer uma ação que não seja diretamente relacionada a fugir. Por exemplo, você só pode atacar um inimigo se ele estiver bloqueando seu caminho, agarrando-o etc. Você pode fazer ações para ajudar seus aliados, mas apenas se eles estiverem tentando escapar.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Inteligência 1"]
  },
  {
    nome: "Gatuno",
    descricao: "Você recebe +2 em Atletismo. Quando escala, não fica desprevenido e avança seu deslocamento normal, em vez de metade dele.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Mão na Boca",
    descricao: "Você recebe +2 em testes de agarrar. Quando acerta um ataque furtivo contra uma criatura desprevenida, você pode fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
    requisitos_descricao: ["Treinado em Luta"]
  },
  {
    nome: "Mãos Rápidas",
    descricao: "Uma vez por rodada, ao fazer um teste de Ladinagem para abrir fechaduras, ocultar item, punga ou sabotar, você pode pagar 1 PM para fazê-lo como uma ação livre.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Destreza 2", "Treinado em Ladinagem"]
  },
  {
    nome: "Mente Criminosa",
    descricao: "Você soma sua Inteligência em Ladinagem e Furtividade.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Inteligência 1"]
  },
  {
    nome: "Rolamento Defensivo",
    descricao: "Sempre que sofre dano, você pode gastar 2 PM para reduzir esse dano à metade. Após usar este poder, você fica caído.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
    requisitos_descricao: ["Treinado em Reflexos"]
  },
  {
    nome: "Saqueador de Tumbas",
    descricao: "Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de resistência contra elas. Além disso, gasta uma ação padrão para desabilitar mecanismos, em vez de 1d4 rodadas (veja a perícia Ladinagem).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Sombra",
    descricao: "Você recebe +2 em Furtividade, não sofre penalidade em testes de Furtividade por se mover no seu deslocamento normal e reduz a penalidade por atacar e fazer outras ações chamativas para –10.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
    requisitos_descricao: ["Treinado em Furtividade"]
  },
  {
    nome: "Truque Mágico",
    descricao: "Você aprende e pode lançar uma magia arcana de 1o círculo a sua escolha, pagando seu custo normal em PM. Seu atributo-chave para esta magia é Inteligência. Você pode escolher este poder quantas vezes quiser.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Inteligência 1"]
  },
  {
    nome: "Velocidade Ladina",
    descricao: "Uma vez por rodada, você pode gastar 2 PM para realizar uma ação de movimento adicional em seu turno.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
    requisitos_descricao: ["Destreza 2", "Treinado em Iniciativa"]
  },
  {
    nome: "Veneno potente",
    descricao: "A CD para resistir aos venenos que você usa aumenta em +5.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
    requisitos_descricao: ["Treinado em Ofício (alquimia)"]
  }
];

export const ladino: Classe = {
  nome: "Ladino",
  descricao:
    "Aventureiro cheio de truques, confiando mais em agilidade e esperteza que em força bruta.",
  vidapnivel: 3,
  vidainicial: 12,
  manapnivel: 4,
  pericias: [TabelaPericiasEnum.Ladinagem, TabelaPericiasEnum.Reflexos],
  periciasescolha: [
    TabelaPericiasEnum.Acrobacia,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Atuação,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Enganação,
    TabelaPericiasEnum.Furtividade,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Investigação,
    TabelaPericiasEnum.Jogatina,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pilotagem,
    TabelaPericiasEnum.Pontaria,
  ],
  periciasescolhanum: 8,
  proficiencias: [],
  habilidades: [
    {
      nome: "Ataque furtivo",
      descricao:
        "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
    },
    {
      nome: "Especialista",
      descricao:
        "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque.",
    },
    {
      nome: "Evasão",
      descricao:
        "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
    },
    {
      nome: "Esquiva Sobrenatural",
      descricao:
        "A partir do 4º nível, seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos possam percebê-lo. Você não pode ser pego desprevenido e recebe +1 na Defesa. Esta habilidade não funciona se você estiver imóvel ou de armadura pesada."
    },
  ],
  poderesunicos: poderesLadino,
  conjurador: false,
  imagem: "./img/classes/ladino.png",
};