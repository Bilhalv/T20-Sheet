import Normalize from "../../../components/Geral/Normalize";
import {
  Magia,
  enumEscolas,
  enumExecucao,
  enumTipo,
} from "../../Construtores/Magia";
import Player from "../../Construtores/Mestre/Player";
import { TabelaMagias } from "../Magias";

const MagiaNull: Magia = {
  nome: "Magia não encontrada",
  descricao: "Magia não encontrada",
  nivel: 0,
  alcance: "Magia não encontrada",
  alvo: "Magia não encontrada",
  duracao: "Magia não encontrada",
  resistencia: "Magia não encontrada",
  aprimoramentos: [
    {
      pm_a_mais: 0,
      descricao: "Magia não encontrada",
    },
  ],
  circulo: 0,
  escola: enumEscolas.abjuracao,
  execucao: enumExecucao.instantanea,
  tipo: enumTipo.universal,
};

function FindMagia(nome: string): Magia {
  return (
    TabelaMagias.find((magia) => Normalize(magia.nome) === Normalize(nome)) ||
    MagiaNull
  );
}

export const TabelaPlayer: Player[] = [
  {
    img: "https://i.ibb.co/rfZHCpj/Debs.png",
    nivel: 2,
    tibares: 0,
    movimento: 9,
    nome: "Agatha",
    player: "Debs",
    classe: "Ladina",
    raca: "Humana",
    defesa: 17,
    atributos: {
      for: 0,
      des: 3,
      con: 1,
      int: 3,
      sab: 5,
      car: 2,
    },
    pvMax: 17,
    pvAtual: 17,
    pmMax: 8,
    pmAtual: 8,
    poderes: [
      {
        nome: "Ataque Furtivo",
        descricao:
          "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
      },
      {
        nome: "Evasão",
        descricao:
          "A partir do 2o nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
      },
      {
        nome: "Especialista",
        descricao:
          "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque.",
      },
      {
        nome: "Sombra",
        descricao:
          "Você recebe +2 em Furtividade, não sofre penalidade em testes de Furtividade por se mover no seu deslocamento normal e reduz a penalidade por atacar e fazer outras ações chamativas para –10.",
      },
      {
        nome: "Sortudo",
        descricao:
          "Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).",
      },
      {
        nome: "Atraente",
        descricao:
          "Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.",
      },
    ],
  },
  {
    img: "https://i.ibb.co/C9fwJc9/Bulan.png",
    nivel: 2,
    tibares: 0,
    movimento: 9,
    nome: "Per",
    player: "Bulan",
    classe: "Ladina",
    raca: "Sulfure",
    defesa: 16,
    atributos: {
      for: 2,
      des: 3,
      con: 1,
      int: 2,
      sab: 1,
      car: 2,
    },
    pvMax: 17,
    pvAtual: 17,
    pmMax: 8,
    pmAtual: 8,
    poderes: [
      {
        nome: "Ataque Furtivo",
        descricao:
          "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
      },
      {
        nome: "Especialista",
        descricao:
          "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque.",
      },
      {
        nome: "Herança Divina",
        descricao:
          "Você é uma criatura do tipo espírito e recebe visão no escuro.",
      },
      {
        nome: "Sombras Profanas",
        descricao:
          "Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      },
      {
        nome: "Gororoba",
        descricao:
          "Você não sofre a penalidade de –5 para fabricar um prato especial adiconal.",
      },
      {
        nome: "Saque Rápido",
        descricao:
          "Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).",
      },
    ],
  },
  {
    img: "https://i.ibb.co/jfYVJtg/Diggo.png",
    nivel: 2,
    tibares: 0,
    movimento: 9,
    nome: "Tatum",
    player: "Diggo",
    classe: "Clérigo",
    raca: "Aggelus",
    defesa: 16,
    atributos: {
      for: 0,
      des: 0,
      con: 2,
      int: 1,
      sab: 5,
      car: 0,
    },
    pvMax: 24,
    pvAtual: 24,
    pmMax: 15,
    pmAtual: 15,
    poderes: [
      {
        nome: "Canalizar Energia Positiva",
        descricao:
          "Você pode gastar uma ação padrão e 1PM para liberar um aonda de energia positiva que afeta todas as criaturas em alcance curto. energia positiva cura 1d6 pontos de dano em criaturas vivas a sua escolha e causa 1d6 pontos de dano de luz em mortos-vivos. Uma criatura que sofra dano tem direito a um teste de Vontade (CD 11) para reduzi-lo à metade. Para cada 2PM extras que pode gastar, a cura ou dano aumenta em +1d6 PV.",
        execucao: "Padrão",
      },
      {
        nome: "Herança Divina",
        descricao:
          "Você é uma criatura do tipo espírito e recebe visão no escuro.",
      },
      {
        nome: "Luz Sagrada",
        descricao: "Você recebe +2 em Diplomacia e Intuição.",
      },
    ],
    magias: [
      FindMagia("Curar Ferimentos"),
      FindMagia("Luz"),
      FindMagia("Bênção"),
      FindMagia("Comando"),
      FindMagia("Consagrar"),
    ],
  },
  {
    img: "https://i.ibb.co/jZHG2xx/Vic.png",
    nivel: 2,
    tibares: 0,
    movimento: 9,
    nome: "Akin",
    player: "Vic",
    classe: "Arcanista",
    raca: "Qareen",
    defesa: 14,
    atributos: {
      for: -1,
      des: 1,
      con: 0,
      int: 4,
      sab: 1,
      car: 6,
    },
    pvMax: 10,
    pvAtual: 10,
    pmMax: 18,
    pmAtual: 18,
    poderes: [
      {
        nome: "Desejos",
        descricao:
          "Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.",
      },
      {
        nome: "Resistência Elemental",
        descricao:
          "Conforme sua ascendência, você recebe redução 10 a um tipo de dano. Do Fogo (do fogo).",
      },
      {
        nome: "Feérica Básica",
        descricao:
          "Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, a sua escolha.",
      },
      {
        nome: "Alpinista Social",
        descricao:
          "Você pode substituir testes de Diplomacia por testes de Enganação.",
      },
      {
        nome: "Aparência Inofensiva",
        descricao:
          "A primeira criatura inteligente (Int –3 ou maior) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes.",
      },
      {
        nome: "Golpista Divino",
        descricao: "Você recebe +2 em Enganação, Jogatina e Ladinagem.",
      },
      {
        nome: "Magia Ilimitada",
        descricao:
          "Você soma seu atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um arcanista de 5º nível com Int 4 e este poder pode gastar até 9 PM em cada magia.",
      },
    ],
    magias: [
      FindMagia("Explosão de Chamas"),
      FindMagia("Seta Infalível de Talude"),
      FindMagia("Toque Chocante"),
      FindMagia("Disfarce Ilusório"),
      FindMagia("Transmutar Objetos"),
    ],
  },
  {
    img: "",
    nivel: 2,
    tibares: 0,
    movimento: 9,
    nome: "Boris (em progresso)",
    player: "Tutu",
    classe: "Inventor",
    raca: "Lefou",
    defesa: 16,
    atributos: {
      for: 2,
      des: 0,
      con: 3,
      int: 4,
      sab: -1,
      car: -2,
    },
    pvMax: 21,
    pvAtual: 21,
    pmMax: 8,
    pmAtual: 8,
    poderes: [
      {
        nome: "Cria da Tormenta",
        descricao:
          "Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.",
      },
      {
        nome: "Deformidade",
        descricao:
          "Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta (exceto para perda de Carisma). Você pode trocar um desses bônus por um poder da Tormenta a sua escolha (ele também não conta para perda de Carisma).",
      },
      {
        nome: "Engenhosidade",
        descricao:
          "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.",
      },
      {
        nome: "Carapaça",
        descricao:
          "Sua pele é recoberta por placas quitinosas. Você recebe +1 na Defesa. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
      },
      {
        nome: "Cuspir Enxame",
        descricao:
          "Você pode gastar uma ação completa e 2 PM para criar um enxame de insetos rubros em um ponto a sua escolha em alcance curto e com duração sustentada. O enxame tem tamanho Médio e pode passar pelo espaço de outras criaturas. Uma vez por rodada, você pode gastar uma ação de movimento para mover o enxame 9m. No final do seu turno, o enxame causa 2d6 pontos de dano de ácido a qualquer criatura no espaço que ele estiver ocupando. Para cada dois outros poderes da Tormenta que possui, você pode gastar +1 PM quando usa este poder para aumentar o dano do enxame em +1d6.",
      },
      {
        nome: "Esse Cheiro...",
        descricao:
          "Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto.",
      },
      {
        nome: "Zumbificar",
        descricao:
          "Você pode gastar uma ação completa e 3 PM para reanimar o cadáver de uma criatura Pequena ou Média adjacente por um dia. O cadáver funciona como um parceiro iniciante de um tipo a sua escolha entre combatente, fortão ou guardião. Além disso, quando sofre dano, você pode sacrificar esse parceiro; se fizer isso, você sofre apenas metade do dano, mas o cadáver é destruído.",
      },
    ],
    magias: [FindMagia("Adaga Mental"), FindMagia("Armadura Arcana")],
  },
  {
    img: "https://i.ibb.co/42Kdr9T/Moni.png",
    nivel: 2,
    tibares: 0,
    movimento: 12,
    nome: "Layla",
    player: "Moni",
    classe: "Arcanista",
    raca: "Elfa",
    defesa: 12,
    atributos: {
      for: 1,
      des: 2,
      con: 1,
      int: 3,
      sab: 2,
      car: 1,
    },
    pvMax: 12,
    pvAtual: 12,
    pmMax: 15,
    pmAtual: 15,
    poderes: [
      {
        nome: "Sentidos Élficos",
        descricao:
          "Você recebe visão na penumbra e +2 em Misticismo e Percepção.",
      },
      {
        nome: "Raio Arcano",
        descricao:
          "Você pode gastar uma ação padrão para causar 1d8 pontos de dano de essência num alvo em alcance curto. Esse dano aumenta em +1d8 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade. O raio arcano conta como uma magia para efeitos de habilidades e itens que beneficiem suas magias.",
        execucao: "Padrão",
      },
    ],
    magias: [
      FindMagia("Adaga Mental"),
      FindMagia("Criar Ilusao"),
      FindMagia("Toque Chocante"),
      FindMagia("Curar Ferimentos"),
      FindMagia("Compreensao"),
    ],
  },
].sort((a, b) => a.nome.localeCompare(b.nome));
