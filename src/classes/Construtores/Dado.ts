export class Dado {
  nome: string = "";
  resultado: number = 0;
  dados: number[] = [];
  bonus: number = 0;
  dano?: number;
  dadosDano?: number[];
  dadoDano?: string;
  date: Date = new Date();
  tipo: "Atributo" | "Pericia" | "Ataque" = "Atributo";
}
