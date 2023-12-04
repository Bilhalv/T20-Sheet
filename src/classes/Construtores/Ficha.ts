import { RolarDado } from "../../components/Geral/RolarDado";
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

export class Ataque {
  nome: string;
  bonus: number;
  dano: string;
  critico: string;
  tipo: string;
  alcance: string;
  observacao: string;
  constructor() {
    this.nome = "";
    this.bonus = 0;
    this.dano = "";
    this.critico = "";
    this.tipo = "";
    this.alcance = "";
    this.observacao = "";
  }
  ataque() {
    const dano = this.dano.split("d");
    const vantagemdesvantagem = prompt(
      "Você tem vantagem ou desvantagem? (v/d)"
    );
    const bonus = this.bonus+Number(prompt("Qual o bônus?"));
    let total = 0;
    if (vantagemdesvantagem === "v") {
      total = RolarDado({
        qtd: parseInt(dano[0]),
        lados: parseInt(dano[1]),
        rerola: "adv",
        mod: bonus,
      }).total;
    } else if (vantagemdesvantagem === "d") {
      total = RolarDado({
        qtd: parseInt(dano[0]),
        lados: parseInt(dano[1]),
        rerola: "des",
        mod: bonus,
      }).total;
    } else {
      total = RolarDado({
        qtd: parseInt(dano[0]),
        lados: parseInt(dano[1]),
        mod: bonus,
      }).total;
    }
    return(total);
  }
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
  pvMax: number;
  pmMax: number;
  atributos: { atributo: Atributo; valor: number }[];
  pericias: PericiasFicha[];
  magias: string[];
  poderes: string[];
  mochila: Mochila;
  ataques: Ataque[];
  divindade: string = "";

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
    this.ataques = [];
    this.pmMax = 0;
    this.pvMax = 0;
    this.divindade = "";
  }
}
