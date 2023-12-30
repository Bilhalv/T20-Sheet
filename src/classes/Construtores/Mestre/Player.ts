export default class Player {
  img: string;
  nivel: number;
  nome: string;
  player: string;
  classe: string;
  raca: string;
  defesa: number;
  atributos: {
    for: number;
    des: number;
    con: number;
    int: number;
    sab: number;
    car: number;
  };
  pvMax: number;
  pvAtual: number;
  pmMax: number;
  pmAtual: number;
  poderes: {
    nome: string;
    descricao: string;
    execucao?: string;
  }[];
  constructor(
    img: string,
    nivel: number,
    nome: string,
    player: string,
    classe: string,
    raca: string,
    defesa: number,
    atributos: {
      for: number;
      des: number;
      con: number;
      int: number;
      sab: number;
      car: number;
    },
    pvMax: number,
    pvAtual: number,
    pmMax: number,
    pmAtual: number,
    poderes: {
      nome: string;
      descricao: string;
      execucao?: string;
    }[]
  ) {
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
