import { infos } from "./Infos";
import { Poder } from "./Poder";

export enum enumEnergia {
  Positiva = "Positiva",
  Negativa = "Negativa",
  Qualquer = "Qualquer",
}

export class divindade extends infos {
  crencas: string = "";
  simbolo: string = "";
  energia: enumEnergia = enumEnergia.Qualquer;
  arma: string = "";
  devotos: [string] = [""];
  poderes: Poder[] = [];
  obrigacoes: string = "";
  imagens: string[] = [""];
}
