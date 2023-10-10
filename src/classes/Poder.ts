import { Atributo } from "./Atributo";

export class PoderRaca {
  nome: string = "";
  descricao: string = "";
}

export enum TipoPoder {
  combate = "combate",
  destino = "destino",
  magia = "magia",
  concedidos = "concedidos",
  tormenta = "tormenta",
}

export enum RequisitoPoder {
  poder = "poder",
  atributo = "atributo",
  pericia = "pericia",
  habilidade = "habilidade",
  poder_tormenta = "poder_tormenta",
  proficiencia = "proficiencia",
  nivel = "nivel",
  classe = "classe",
  tipo_arcanista = "tipo_arcanista",
  magia = "magia",
  devoto = "devoto",
}

export class Poder {
  nome: string = "";
  descricao: string = "";
  tipo: TipoPoder = TipoPoder.combate;
  requisitos: RequisitoPoder[] = [];
}