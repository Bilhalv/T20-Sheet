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
import { TabelasArmasSimles, tabelaArmaduras, tabelaArmas, tabelaItens } from "../Itens";
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
  return TabelaMagias.find((magia) => magia.nome === nome) || MagiaNull;
}

function FindArma(nome: string): Arma {
  return (
    [...tabelaArmas, ...TabelasArmasSimles].find(
      (arma) => arma.nome === nome
    ) || ArmaNull
  );
}

function FindArmadura(nome: string): Armadura {
  return (
    tabelaArmaduras.find((armadura) => armadura.nome === nome) || ArmaduraNull
  );
}

function FindItem(nome: string): Item {
  return (
    tabelaItens.find((item) => item.nome === nome) || ItemNull
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
    defesa: 0,
    atributos: {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pvMax: 10,
    pvAtual: 10,
    pmMax: 10,
    pmAtual: 10,
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
    mochila: [FindArma("Adaga"), FindArmadura("Gibão de peles")],
  },
  {
    img: "https://i.ibb.co/C9fwJc9/Bulan.png",
    nivel: 2,
    movimento: 9,
    nome: "Per",
    player: "Bulan",
    classe: "Ladina",
    raca: "Sulfure",
    defesa: 0,
    atributos: {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pvMax: 10,
    pvAtual: 10,
    pmMax: 10,
    pmAtual: 10,
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
    mochila: [FindArma("Adaga"), FindArmadura("Gibão de peles")],
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
    ],
    mochila: [
      FindArma("Maça"),
      FindArmadura("Brunea"),
      FindArmadura("Escudo Leve"),
      FindItem("Mochila"),
      FindItem("Saco de dormir"),
      FindItem("Traje de Sacerdote"),
    ],
  },
  {
    img: "https://i.ibb.co/jZHG2xx/Vic.png",
    nivel: 2,
    movimento: 9,
    nome: "Akin",
    player: "Vic",
    classe: "Arcanista",
    raca: "Qareen",
    defesa: 0,
    atributos: {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pvMax: 10,
    pvAtual: 10,
    pmMax: 10,
    pmAtual: 10,
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
    movimento: 9,
    nome: "Layla",
    player: "Moni",
    classe: "Arcanista",
    raca: "Elfa",
    defesa: 0,
    atributos: {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pvMax: 10,
    pvAtual: 10,
    pmMax: 10,
    pmAtual: 10,
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
    mochila: [FindArma("Adaga"), FindArmadura("Gibão de peles")],
  },
].sort((a, b) => a.player.localeCompare(b.player));
