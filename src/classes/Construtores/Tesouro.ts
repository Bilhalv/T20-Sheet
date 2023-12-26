export class Table {
  min: number = 0;
  max: number = 0;
  value: string = "";
}

export default class Tesouro {
  nd: string = "";
  tabelaDinheiro: Table[] = [];
  tabelaItem: Table[] = [];
}
