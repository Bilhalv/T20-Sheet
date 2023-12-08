import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";
import { RequiredIndicator } from "@chakra-ui/react";

export const poderesBardo: Poder[] = [
  {
    nome: "Arte Mágica",
    descricao:
      "Enquanto você estiver sob efeito de sua Inspiração, a CD para resistir a suas habilidades de bardo aumenta em +2",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Aumentar Repertório",
    descricao:
      "Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser",
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
    nome: "Esgrima Mágica",
    descricao:
      "Sua arte mescla esgrima e magia, transformando dança em golpes. Se estiver sob efeito de Inspiração, você pode substituir testes de Luta por testes de Atuação, mas apenas para ataques com armas corpo a corpo leves ou de uma mão",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Fascinar em Massa",
    descricao:
      "Quando usa Música: Balada Fascinante, você pode gastar +2 PM. Se fizer isso, afeta todas as criaturas a sua escolha no alcance da música (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura)",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Música: Balada Fascinante"]
    // musica: balada fascniante 
  },
  {
    nome: "Golpe Elemental",
    descricao:
      "Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo, pode gastar 1 PM para causar 1d6 de dano extra de ácido, eletricidade, fogo ou frio, a sua escolha. Para cada quatro níveis que possuir, pode gastar +1 PM para aumentar o dano em +1d6",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Golpe Mágico"]
    // golpe magico
  },
  {
    nome: "Golpe Mágico",
    descricao:
      "Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM temporários cumulativos. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Esgrima Mágica"]
    // esgrima magica
  },
  {
    nome: "Inspiração Marcial",
    descricao:
      "Quando você usa Inspiração, você e seus aliados aplicam o bônus recebido em rolagens de dano (além de testes de perícia)",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Lendas e Histórias",
    descricao:
      "Você é um arquivo vivo de relatos, canções e folclore. Além de outros benefícios a critério do mestre, pode gastar 1 PM para rolar novamente um teste recém realizado de Conhecimento, Misticismo, Nobreza ou Religião para informação, identificar criaturas ou identificar itens mágicos",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo],
    requisitos_descricao: ["Inteligência 1"]
    // int 1
  },
  {
    nome: "Manipular",
    descricao:
      "Você pode gastar 1 PM para fazer uma criatura fascinada por você ficar enfeitiçada até o fim da cena (Von CD Car anula). Se a criatura passar, fica imune a este efeito por um dia. Usar esta habilidade não conta como ameaça à criatura fascinada",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Música: Balada Fascinante"]
    // musica: balada fascinante
  },
  {
    nome: "Música: Balada Fascinante",
    descricao:
      "Faça um teste de Atuação oposto pelo teste de Vontade de uma criatura no alcance. Se você passar, ela fica fascinada enquanto você se concentrar (uma ação padrão por rodada). Um alvo hostil ou envolvido em combate recebe +5 no teste de resistência e tem direito a um novo teste sempre que você se concentrar. Se a criatura passar, fica imune a este efeito por um dia",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Música: Canção Assustadora",
    descricao:
      "Faça um teste de Atuação oposto pelo teste de Vontade de cada criatura a sua escolha dentro do alcance (você faz um único teste). Alvos que falhem ficam abalados até o fim da cena. Alvos que passem ficam imunes a este efeito por um dia",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Música: Melodia Curativa",
    descricao:
      "Criaturas a sua escolha no alcance recuperam 1d6 PV. Quando usa esta habilidade, você pode gastar mais pontos de mana. Para cada PM extra, aumente a cura em +1d6 PV",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
  {
    nome: "Melodia Restauradora",
    descricao:
      "Quando você usa Música: Melodia Curativa, pode gastar +2 PM. Se fizer isso, escolha uma das condições a seguir: abalado, alquebrado, apavorado, atordoado, cego, confuso, enfeitiçado, esmorecido, exausto, fatigado, frustrado, pasmo ou surdo. Você remove a condição escolhida das criaturas afetadas pela música",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.poder],
    requisitos_descricao: ["Melodia Curativa"]
    // melodia curativa
  },
  {
    nome: "Mestre dos Sussurros",
    descricao:
      "Você é dissimulado, atento para rumores e ótimo em espalhar fofocas. Quando faz um teste de Investigação para interrogar ou um teste de Enganação para intriga, você rola dois dados e usa o melhor resultado. Além disso, pode fazer esses testes em ambientes sociais (taverna, festival, corte...) sem custo e em apenas uma hora (em vez de um dia)",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia, RequisitoPoder.pericia],
    requisitos_descricao: ["Carisma 1","Enganação","Investigação"]
    // car 1, enganação e investigação
  },
  {
    nome: "Paródia",
    descricao:
      "Uma vez por rodada, quando vê outra criatura lançando uma magia em alcance médio, você pode pagar 1 PM e fazer um teste de Atuação (CD 15 + custo em PM da magia). Se passar, até o final de seu próximo turno você pode lançar essa magia",
    tipo: TipoPoder.classe,
    requisitos: [],
    requisitos_descricao: []
  },
];

export const bardo: Classe = {
  nome: "Bardo",
  descricao:
    "Um artista errante e faz-tudo versátil, sempre com a solução certa para cada ocasião",
  vidapnivel: 3,
  vidainicial: 12,
  manapnivel: 4,
  pericias: [TabelaPericiasEnum.Atuação, TabelaPericiasEnum.Reflexos],
  periciasescolha: [
    TabelaPericiasEnum.Acrobacia,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Enganação,
    TabelaPericiasEnum.Furtividade,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Investigação,
    TabelaPericiasEnum.Jogatina,
    TabelaPericiasEnum.Ladinagem,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Misticismo,
    TabelaPericiasEnum.Nobreza,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Pontaria,
    TabelaPericiasEnum.Vontade,
  ],
  periciasescolhanum: 6,
  proficiencias: ["Armas marciais"],
  habilidades: [
    {
      nome: "inspiração",
      descricao: "Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua arte. Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1."
    },
    {
      nome: "eclético",
      descricao: "A partir do 2º nível, você pode gastar 1 PM para receber todos os benefícios de ser treinado em uma perícia por um teste."
    }
  ],
  poderesunicos: poderesBardo,
  conjurador: true,
  imagem: "./img/classes/bardo.png",
};
