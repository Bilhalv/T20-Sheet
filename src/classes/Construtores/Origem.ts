import { Poder } from "./Poder";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";
import { TabelaPoderesEnum } from "../Tabelas/Poderes";



export class Beneficios{
  pericias: TabelaPericiasEnum[] = [];
  poderes: TabelaPoderesEnum[] = [];
}

export class Origem {
  nome: string = "";
  descricao: string = "";
  itens: string[] = [];
  beneficios: Beneficios = new Beneficios();
  imagem: string = "";
}