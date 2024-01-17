import { Magia } from "../Magia";

type Atributos = {
  for: number;
  des: number;
  con: number;
  int: number;
  sab: number;
  car: number;
};
type Poder = {
  nome: string;
  descricao: string;
  execucao?: string;
};

export default class Player {
  magias?: Magia[];
  tibares: number;
  movimento: number;
  img: string;
  nivel: number;
  nome: string;
  player: string;
  classe: string;
  raca: string;
  defesa: number;
  atributos: Atributos;
  pvMax: number;
  pvAtual: number;
  pmMax: number;
  pmAtual: number;
  poderes: Poder[];
  constructor(
    movimento: number,
    tibares: number,
    img: string,
    nivel: number,
    nome: string,
    player: string,
    classe: string,
    raca: string,
    defesa: number,
    atributos: Atributos,
    pvMax: number,
    pvAtual: number,
    pmMax: number,
    pmAtual: number,
    poderes: Poder[]
  ) {
    this.movimento = movimento;
    this.tibares = tibares;
    this.img = img;
    this.nivel = nivel;
    this.nome = nome;
    this.player = player;
    this.classe = classe;
    this.raca = raca;
    this.defesa = defesa;
    this.atributos = atributos;
    this.pvMax = pvMax;
    this.pvAtual = pvAtual;
    this.pmMax = pmMax;
    this.pmAtual = pmAtual;
    this.poderes = poderes;
  }
}
