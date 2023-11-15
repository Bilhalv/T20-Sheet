import { infos } from "./Infos";

export class PoderRaca extends infos{
}

export enum TipoPoder {
  combate = "combate",
  destino = "destino",
  magia = "magia",
  concedidos = "concedidos",
  tormenta = "tormenta",
  classe = "classe",
  origem = "origem"
}

export enum RequisitoPoder {
  poder = "poder",
  atributo = "atributo",
  pericia = "pericia",
  habilidade = "habilidade",
  poder_tormenta = "poder_tormenta",
  proficiencia = "proficiencia",
  nivel = "nivel",
  tipo_arcanista = "tipo_arcanista",
  magia = "magia",
  devoto = "devoto",
}

export class Poder extends infos{
  tipo: TipoPoder = TipoPoder.combate;
  requisitos: RequisitoPoder[] = [];
  requisitos_descricao: string[] = [];
}