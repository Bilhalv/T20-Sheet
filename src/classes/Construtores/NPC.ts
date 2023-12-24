import { Magia } from "./Magia";

export class pericia {
  nome: string;
  mod: number;
  constructor(nome: string, mod: number) {
    this.nome = nome;
    this.mod = mod;
  }
}

export class ataque {
  nome: string;
  tipo: string;
  dano: string;
  mod: number;
  crit: string;
  modDano: number;
  desc?: string;
  alcance?: string;
  constructor(
    nome: string,
    tipo: string,
    dano: string,
    mod: number,
    crit: string,
    modDano: number
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.dano = dano;
    this.mod = mod;
    this.crit = crit;
    this.modDano = modDano;
  }
}

export class poder {
  nome: string;
  descricao: string;
  execucao?: string;
  constructor(nome: string, descricao: string, execucao?: string) {
    this.nome = nome;
    this.descricao = descricao;
    this.execucao = execucao;
  }
}

export class atributos {
  for: number;
  des: number;
  con: number;
  int: number;
  sab: number;
  car: number;
  constructor(
    forca: number,
    destreza: number,
    constituicao: number,
    inteligencia: number,
    sabedoria: number,
    carisma: number
  ) {
    this.for = forca;
    this.des = destreza;
    this.con = constituicao;
    this.int = inteligencia;
    this.sab = sabedoria;
    this.car = carisma;
  }
}

export default class NPC {
  img?: string;
  nome: string;
  tipo: string;
  raca: string;
  tamanho: string;
  nd: string;
  iniciativa: number;
  percepcao: number;
  defesa: number;
  fort: number;
  ref: number;
  von: number;
  pv: number;
  deslocamento: number;
  pm: number;
  corpoAcorpo?: ataque[];
  resistencias?: string[];
  distancia?: ataque[];
  poderes?: poder[];
  magias?: Magia[];
  pericias: pericia[];
  tesouro: "Nenhum" | "Padrão" | "Dobro" | "Metade" | string;
  equipamentos: string[];
  atributos: atributos;
  constructor(
    nome: string,
    tipo: string,
    raca: string,
    tamanho: string,
    nd: string,
    iniciativa: number,
    percepcao: number,
    defesa: number,
    fort: number,
    ref: number,
    von: number,
    pv: number,
    deslocamento: number,
    pm: number,
    corpoAcorpo?: ataque[],
    distancia?: ataque[],
    poderes?: poder[],
    magias?: Magia[],
    pericias?: pericia[],
    tesouro?: "Nenhum" | "Padrão" | "Dobro" | "Metade",
    equipamentos?: string[],
    resistencias?: string[],
    atributos?: atributos
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.raca = raca;
    this.tamanho = tamanho;
    this.nd = nd;
    this.iniciativa = iniciativa;
    this.percepcao = percepcao;
    this.defesa = defesa;
    this.fort = fort;
    this.ref = ref;
    this.von = von;
    this.pv = pv;
    this.deslocamento = deslocamento;
    this.pm = pm;
    this.corpoAcorpo = corpoAcorpo;
    this.distancia = distancia;
    this.poderes = poderes;
    this.magias = magias;
    this.pericias = pericias || [];
    this.tesouro = tesouro || "Nenhum";
    this.equipamentos = equipamentos || [];
    this.resistencias = resistencias || [];
    this.atributos = atributos || {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 0,
    };
  }
}
