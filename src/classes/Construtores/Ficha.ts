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

export class PericiasFicha {
  nome: string = "";
  treinada: number = 0;
  bonus: number = 0;
}
export default class Ficha {
  id: number;
  nome: string;
  classe: Classe;
  raca: string;
  origem: string;
  nivel: number;
  pv: number;
  pm: number;
  atributos: { atributo: Atributo; valor: number }[];
  pericias: PericiasFicha[];
  magias: string[];
  poderes: string[];
  mochila: Mochila;

  constructor() {
    this.id = 0;
    this.nome = "";
    this.raca = "";
    this.origem = "";
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