import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesBucaneiro: Poder[] = [
  {
    nome: "Abusar dos Fracos",
    descricao: "Quando ataca uma criatura sob efeito de uma condição de medo, seu dano aumenta em um passo.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
  },
  {
    nome: "Aparar",
    descricao: "Uma vez por rodada, quando é atingido por um ataque, você pode gastar 1 PM para fazer um teste de ataque com bônus igual ao seu nível (além do normal). Se o resultado do seu teste for maior que o do oponente, você evita o ataque. Você só pode usar este poder se estiver usando uma arma corpo a corpo leve ou ágil.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
  },
  {
    nome: "Apostador",
    descricao: "Você pode gastar um dia para encontrar e participar de uma mesa de wyrt ou outro jogo de azar. Escolha um valor e faça um teste de Jogatina contra a CD correspondente: T$ 100 (CD 15), T$ 200 (CD 20), T$ 400 (CD 25), T$ 800 (CD 30), T$ 1.600 (CD 35) e assim por diante. Se passar, você ganha o valor escolhido (ou um item ou favor equivalente, a critério do mestre). Se falhar, perde esse mesmo o valor. A critério do mestre, o lugar onde você está pode limitar ou impossibilitar o uso deste poder.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
  },
  
  {
    nome: "Ataque Acrobático",
    descricao: "Quando se aproxima de um inimigo com um salto ou pirueta (em termos de jogo, usando Atletismo ou Acrobacia para se mover) e o ataca no mesmo turno, você recebe +2 nesse teste de ataque e na rolagem de dano.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  
  {
    nome: "Aumento de Atributo",
    descricao: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  
  {
    nome: "Aventureiro Ávido",
    descricao: "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional. Se possuir o poder Surto Heroico, em vez disso seu custo diminui em -2 PM.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Bravata Audaz",
    descricao: "Você jura fazer uma façanha específica, como roubar o tesouro de Sckhar ou ganhar um beijo do príncipe e da princesa até o fim do baile. Se cumprir a bravata, seus PM aumentam em +2 por nível de bucaneiro até o fim da aventura.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Bravata Imprudente",
    descricao: "Na primeira rodada de um combate, você pode jurar derrotar seus inimigos com uma restrição a sua escolha, como lutar com uma mão nas costas, de guarda aberta (em termos de jogo, desprevenido), de olhos vendados (cego) etc. Uma restrição só é válida se prejudicá-lo (por exemplo, lutar com uma mão nas costas só vale como restrição se você luta com duas armas). O mestre tem a palavra final sobre a validade de uma restrição. Você sofre a penalidade durante todo o combate, mas, se vencer, recebe +2 nos testes de ataque e na margem de ameaça até o fim da aventura.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "En Garde",
    descricao: "Você pode gastar uma ação de movimento e 1 PM para assumir postura de luta. Até o fim da cena, se estiver usando uma arma corpo a corpo leve ou ágil, você recebe +2 na margem de ameaça com essas armas e +2 na Defesa.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
  },
  {
    nome: "Esgrimista",
    descricao: "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência nas rolagens de dano (limitado pelo seu nível).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
  },
  {
    nome: "Flagelo dos Mares",
    descricao: "Você aprende e pode lançar Amedrontar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de incutir medo em seus inimigos.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
  },
  {
    nome: "Folião",
    descricao: "Você sabe fazer amizades durante festas, de noitadas em tavernas a bailes na corte. Nesses locais, você recebe +2 em testes de perícias de Carisma e a atitude de todas as pessoas em relação a você melhora em uma categoria.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
  },
  {
    nome: "Grudar o Cano",
    descricao: "Quando faz um ataque à distância com uma arma de fogo contra um oponente adjacente, você não sofre a penalidade de -5 no teste de ataque e aumenta seu dano em um passo.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia, RequisitoPoder.poder],
  },
  {
    nome: "Pernas do Mar",
    descricao: "Você recebe +2 em Acrobacia e Atletismo. Além disso, quando está se equilibrando ou escalando, você não fica desprevenido e seu deslocamento não é reduzido à metade.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Pistoleiro",
    descricao: "Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Presença Paralisante",
    descricao: "Você soma seu Carisma em Iniciativa e, se for o primeiro na iniciativa, ganha uma ação padrão extra na primeira rodada.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo,RequisitoPoder.nivel],
  },
];

export const bucaneiro: Classe = {
  nome: "Bucaneiro",
  descricao:
    "Um navegador inconsequente e galante, sempre em busca de ouro ou emoção.",
  vidapnivel: 4,
  vidainicial: 16,
  manapnivel: 3,
  pericias: [TabelaPericiasEnum.Luta, TabelaPericiasEnum.Pontaria, TabelaPericiasEnum.Reflexos],
  periciasescolha: [
    TabelaPericiasEnum.Acrobacia,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Atuação,
    TabelaPericiasEnum.Enganação,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Furtividade,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Jogatina,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pilotagem,
    TabelaPericiasEnum.Pontaria
  ],
  periciasescolhanum: 4,
  proficiencias: ["Armas marciais"],
  habilidades: [
    {
      nome: "Audácia",
      descricao: "Quando faz um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste. Você não pode usar esta habilidade em testes de ataque."
    },
    {
      nome: "Insolência",
      descricao: "Você soma seu Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
    },
    {
      nome: "Evasão",
      descricao: "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
    },
    {
      nome: "Esquiva Sagaz",
      descricao: "No 3º nível, você recebe +1 na Defesa e em Reflexos. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
    },
    {
      nome: "Panache",
      descricao: " A partir do 5º nível, sempre que faz um acerto crítico em combate ou reduz um inimigo a 0 PV, você recupera 1 PM."
    },
  ],
  poderesunicos: poderesBucaneiro,
  conjurador: false,
  imagem: "./img/classes/bucaneiro.png",
};
