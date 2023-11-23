import { Item } from "./Item";

export class Armadura extends Item {
  defesa: number;
  tipo: string; //escudo, armadura
  categoria: string; // leve, media, pesada
  penalidade: number;

  constructor(defesa: number, tipo: string, categoria: string, penalidade: number) {
    super();
    this.defesa = defesa;
    this.tipo = tipo;
    this.categoria = categoria;
    this.penalidade = penalidade;
  }
}
