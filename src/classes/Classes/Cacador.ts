import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesCacador: Poder[] = [
  {
    nome: "Ambidestria",
    descricao:
      "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Destreza 2"],
  },
  {
    nome: "Armadilha: Arataca",
    descricao:
      "A vítima sofre 2d6 pontos de dano de perfuração e fica agarrada. Uma criatura agarrada pode escapar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Armadilha: Espinhos",
    descricao:
      "A vítima sofre 6d6 pontos de dano de perfuração. Um teste de Reflexos (CD Sab) reduz o dano à metade.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Armadilha: Laço",
    descricao:
      "A vítima deve fazer um teste de Reflexos (CD Sab). Se passar, fica caída. Se falhar, fica agarrada. Uma criatura agarrada pode se soltar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Armadilha: Rede",
    descricao:
      "Todas as criaturas na área ficam enredadas e não podem sair da área. Uma vítima pode se libertar com uma ação padrão e um teste de Força ou Acrobacia (CD 25). Além disso, a área ocupada pela rede é considerada terreno difícil. Nesta armadilha você escolhe quantas criaturas precisam estar na área para ativá-la.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Armadilheiro",
    descricao:
      "A CD para encontrar e resistir às suas armadilhas aumenta em +5 e você soma sua Sabedoria ao dano delas.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder, RequisitoPoder.nivel],
    requisitos_descricao: ["Um poder de armadilha", "Nível 5"],
  },
  {
    nome: "Arqueiro",
    descricao:
      "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria nas rolagens de dano (limitado pelo seu nível).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Sabedoria 1"],
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
    nome: "Camuflagem",
    descricao:
      "Você pode gastar 2 PM para se esconder mesmo sem camuflagem ou cobertura disponível.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Companheiro Animal",
    descricao: "Você recebe um companheiro animal. Veja o quadro na página 62.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
    requisitos_descricao: ["Carisma 1", "Adestramento"],
  },
  {
    nome: "Elo com a Natureza",
    descricao:
      "Você soma sua Sabedoria em seu total de pontos de mana e aprende e pode lançar Caminhos da Natureza (atributo-chave Sabedoria).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.nivel],
    requisitos_descricao: ["Sabedoria 1", "Nível 3"],
  },
  {
    nome: "Emboscar",
    descricao:
      "Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate.",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
    requisitos_descricao: ["Furtividade"],
  },
  {
    nome: "Empatia Selvagem",
    descricao:
      "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja Diplomacia, na página 118).",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Espreitar",
    descricao:
      "Quando usa a habilidade Marca da Presa, você recebe um bônus de +1 em testes de perícia contra a criatura marcada. Esse bônus aumenta em +1 para cada PM adicional gasto na habilidade e também dobra com a habilidade Inimigo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Ervas Curativas",
    descricao:
      "Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
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
    nome: "Inimigo de (Criatura)",
    descricao:
      "Escolha um tipo de criatura entre animal, construto, espírito, monstro ou morto-vivo, ou duas raças humanoides (por exemplo, orcs e gnolls, ou elfos e qareen). Quando você usa a habilidade Marca da Presa contra uma criatura do tipo ou da raça escolhida, dobra os dados de bônus no dano. O nome desta habilidade varia de acordo com o tipo de criatura escolhida (Inimigo de Monstros, Inimigo de Mortos-Vivos etc.). Você pode escolher este poder outras vezes para inimigos diferentes.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Olho do Falcão",
    descricao:
      "Você pode usar a habilidade Marca da Presa em criaturas em alcance longo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
  {
    nome: "Ponto Fraco",
    descricao:
      "Quando usa a habilidade Marca da Presa, seus ataques contra a criatura marcada recebem +2 na margem de ameaça. Esse bônus dobra com a habilidade Inimigo.",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: [],
  },
];

export const cacador: Classe = {
  nome: "Caçador",
  descricao:
    "Um exterminador de monstros e mestre da sobrevivência em áreas selvagens.",
  vidapnivel: 4,
  vidainicial: 16,
  manapnivel: 4,
  pericias: [
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Pontaria,
    TabelaPericiasEnum.Sobrevivência,
  ],
  periciasescolha: [
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Atletismo,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Cura,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Furtividade,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Investigação,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pontaria,
    TabelaPericiasEnum.Reflexos,
  ],
  periciasescolhanum: 6,
  proficiencias: ["Armas marciais", "escudos"],
  habilidades: [
    {
      nome: "Marca da Presa",
      descricao:
        "Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o bônus de dano (veja a tabela da classe).",
    },
    {
      nome: "Rastreador",
      descricao:
        "Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enquanto rastreia sem sofrer penalidades no teste de Sobrevivência.",
    },
    {
      nome: "Explorador",
      descricao:
        "No 3º nível, escolha um tipo de terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície, subterrâneo ou urbano. A partir do 11º nível, você também pode escolher área de Tormenta. Quando estiver no tipo de terreno escolhido, você soma sua Sabedoria (mínimo +1) na Defesa e nos testes de Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência. A cada quatro níveis, escolha outro tipo de terreno para receber o bônus ou aumente o bônus em um tipo de terreno já escolhido em +2.",
      nivel: 3,
    },
    {
      nome: "Caminho do Explorador",
      descricao:
        "No 5º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastrear você aumenta em +10. Esta habilidade só funciona em terrenos nos quais você tenha a habilidade Explorador.",
      nivel: 5,
    },
  ],
  poderesunicos: poderesCacador,
  conjurador: false,
  imagem: "./img/classes/cacador.png",
};
