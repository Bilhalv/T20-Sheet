import { Arma } from "./Arma";
import { Armadura } from "./Armadura";
import { Atributo } from "./Atributo";
import { Classe } from "./Classe";
import { Item } from "./Item";
import { Magia } from "./Magia";
import { Pericia } from "./Pericia";
import { Poder } from "./Poder";

export class itemFicha extends Item {
  quantidade: number = 0;
  descUnica: string = "";
}
export class armaFicha extends Arma {
  quantidade: number = 0;
  descUnica: string = "";
}
export class armaduraFicha extends Armadura {
  quantidade: number = 0;
  descUnica: string = "";
}
export class Tibares {
  TibaresCobre: number = 0;
  TibaresNormal: number = 0;
  TibaresOuro: number = 0;
}

export class Mochila {
  itens: itemFicha[] = [];
  tibares: Tibares = new Tibares();
  armas: armaFicha[] = [];
  armaduras: armaduraFicha[] = [];
}
export class Ficha {
  id: number;
  nome: string;
  classe: Classe;
  nivel: number;
  pv: number;
  pm: number;
  atributos: { atributo: Atributo; valor: number }[];
  pericias: Pericia[];
  magias: Magia[];
  poderes: Poder[];
  mochila: Mochila;

  constructor() {
    this.id = 0;
    this.nome = "";
    this.classe = new Classe();
    this.nivel = 0;
    this.pv = 0;
    this.pm = 0;
    this.atributos = Object.values(Atributo).map((atributo) => ({
      atributo,
      valor: 0,
    }));
    this.pericias = [];
    this.magias = [];
    this.poderes = [];
    this.mochila = new Mochila();
  }
}

const personagem2 = new Ficha();
const atributos = [
  {
    atributo: Atributo.forca,
    valor: 15,
  },
  {
    atributo: Atributo.destreza,
    valor: 10,
  },
  {
    atributo: Atributo.constituicao,
    valor: 10,
  },
  {
    atributo: Atributo.inteligencia,
    valor: 10,
  },
  {
    atributo: Atributo.sabedoria,
    valor: 10,
  },
  {
    atributo: Atributo.carisma,
    valor: 10,
  },
];
personagem2.atributos.map((atributo) => {
  atributo.valor =
    atributos.find((a) => a.atributo === atributo.atributo)?.valor ?? 0;
});

export default personagem2;
