import { Arma } from "../../Construtores/Arma";
import { Armadura } from "../../Construtores/Armadura";
import {
  Magia,
  enumEscolas,
  enumExecucao,
  enumTipo,
} from "../../Construtores/Magia";
import Player from "../../Construtores/Mestre/Player";
import { TabelasArmasSimles, tabelaArmaduras, tabelaArmas } from "../Itens";
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

export const TabelaPlayer: Player[] = [
  {
    img: "https://i.ibb.co/rfZHCpj/Debs.png",
    nivel: 2,
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
    pvMax: 0,
    pvAtual: 0,
    pmMax: 0,
    pmAtual: 0,
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
  },
  {
    img: "https://i.ibb.co/C9fwJc9/Bulan.png",
    nivel: 2,
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
    pvMax: 0,
    pvAtual: 0,
    pmMax: 0,
    pmAtual: 0,
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
  },
  {
    img: "https://i.ibb.co/jfYVJtg/Diggo.png",
    nivel: 2,
    nome: "Tatum",
    player: "Diggo",
    classe: "Clérigo",
    raca: "Aggelus",
    defesa: 0,
    atributos: {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pvMax: 0,
    pvAtual: 0,
    pmMax: 0,
    pmAtual: 0,
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
    magias: [FindMagia("Curar Ferimentos")],
  },
  {
    img: "https://i.ibb.co/jZHG2xx/Vic.png",
    nivel: 2,
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
    pvMax: 0,
    pvAtual: 0,
    pmMax: 0,
    pmAtual: 0,
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
    pvMax: 0,
    pvAtual: 0,
    pmMax: 0,
    pmAtual: 0,
    poderes: [
      {
        nome: "Lorem",
        descricao: "Ipsum",
        execucao: "Dolor",
      },
    ],
  },
].sort((a, b) => a.player.localeCompare(b.player));
