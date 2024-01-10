import Normalize from "../../../components/Geral/Normalize";
import { Arma } from "../../Construtores/Arma";
import { Armadura } from "../../Construtores/Armadura";
import { Item } from "../../Construtores/Item";
import {
  Magia,
  enumEscolas,
  enumExecucao,
  enumTipo,
} from "../../Construtores/Magia";
import Player from "../../Construtores/Mestre/Player";
import {
  TabelasArmasSimles,
  tabelaArmaduras,
  tabelaArmas,
  tabelaItens,
} from "../Itens";
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

const ArmaNull: Arma = {
  nome: "Arma não encontrada",
  descricao: "Arma não encontrada",
  dano: "Arma não encontrada",
  crit: "Arma não encontrada",
  tipo: "Arma não encontrada",
  alcance: "Arma não encontrada",
  espacos: 0,
  preco: 0,
  categoria: "Arma não encontrada",
  proficiencia: "Arma não encontrada",
};

const ArmaduraNull: Armadura = {
  nome: "Armadura não encontrada",
  descricao: "Armadura não encontrada",
  penalidade: 0,
  categoria: "Armadura não encontrada",
  preco: 0,
  defesa: 0,
  espacos: 0,
  tipo: "Armadura não encontrada",
};

const ItemNull: Item = {
  nome: "Item não encontrado",
  descricao: "Item não encontrado",
  espacos: 0,
  preco: 0,
  categoria: "Item não encontrado",
};

function FindMagia(nome: string): Magia {
  return (
    TabelaMagias.find((magia) => Normalize(magia.nome) === Normalize(nome)) ||
    MagiaNull
  );
}

function FindArma(nome: string): Arma {
  return (
    [...tabelaArmas, ...TabelasArmasSimles].find(
      (arma) => Normalize(arma.nome) === Normalize(nome)
    ) || ArmaNull
  );
}

function FindArmadura(nome: string): Armadura {
  return (
    tabelaArmaduras.find(
      (armadura) => Normalize(armadura.nome) === Normalize(nome)
    ) || ArmaduraNull
  );
}

function FindItem(nome: string): Item {
  return (
    tabelaItens.find((item) => Normalize(item.nome) === Normalize(nome)) ||
    ItemNull
  );
}

export const TabelaPlayer: Player[] = [
  {
    img: "https://i.ibb.co/rfZHCpj/Debs.png",
    nivel: 2,
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
    mochila: [
      FindArmadura("Gibão de peles"),
      FindArma("Adaga"),
      FindArma("Arco curto"),
      FindItem("Traje de viajante"),
      FindItem("Saco de dormir"),
      {
        nome: "Estojo de disfarce",
        descricao:
          "Um conjunto de cosméticos, tintas para cabelo e algumas próteses simples (como bigodes e narizes falsos). Um personagem sem este item sofre –5 em testes de Enganação para disfarce.",
        espacos: 1,
        preco: 50,
        categoria: "Ferramenta",
      } as Item,
    ],
  },
  {
    img: "https://i.ibb.co/C9fwJc9/Bulan.png",
    nivel: 2,
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
    mochila: [
      FindItem("Traje de viajante"),
      FindItem("Saco de dormir"),
      FindArma("Besta leve"),
      FindArmadura("Couro batido"),
      {
        nome: "Kit de cozinha",
        descricao:
          "Um conjunto de panelas, talheres, pratos e outros utensílios necessários para preparar refeições. Sem este item, você sofre –5 em testes de Ofício (culinária).",
        espacos: 1,
        preco: 50,
        categoria: "Ferramenta",
      } as Item,
      {
        nome: "Avental",
        descricao:
          "Um avental de couro ou tecido que protege suas roupas de respingos e manchas.",
        espacos: 0,
        preco: 10,
        categoria: "Vestimenta",
      } as Item,
      {
        nome: "Caneca",
        descricao: "Uma caneca de madeira, cerâmica ou metal.",
        espacos: 0,
        preco: 10,
        categoria: "Ferramenta",
      } as Item,
      {
        nome: "Panela",
        descricao: "Uma panela de ferro ou barro.",
        espacos: 0,
        preco: 10,
        categoria: "Ferramenta",
      } as Item,
    ],
  },
  {
    img: "https://i.ibb.co/jfYVJtg/Diggo.png",
    nivel: 2,
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
    mochila: [
      FindArma("Maça"),
      FindArmadura("Brunea"),
      FindItem("Mochila"),
      FindItem("Saco de dormir"),
      {
        nome: "Traje de sacerdote",
        descricao:
          "Um conjunto de roupas finas, um cinto, um par de sapatos, um manto e um símbolo sagrado.",
        espacos: 1,
        preco: 50,
        categoria: "Vestimenta",
      } as Item,
    ],
  },
  {
    img: "https://i.ibb.co/jZHG2xx/Vic.png",
    nivel: 2,
    movimento: 9,
    nome: "Akin(em progresso)",
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
    mochila: [FindArma("Adaga"), FindArmadura("Gibão de peles")],
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
  },
  {
    img: "https://i.ibb.co/42Kdr9T/Moni.png",
    nivel: 2,
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
    mochila: [FindArma("Adaga"), FindArmadura("Gibão de peles")],
    magias: [FindMagia("Adaga Mental"), FindMagia("Criar Ilusao"), FindMagia("Toque Chocante"), FindMagia("Curar Ferimentos"), FindMagia("Compreensao")],
  },
].sort((a, b) => a.player.localeCompare(b.player));
