import { Poder } from "./Poder";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";
import { TabelaPoderesEnum } from "../Tabelas/Poderes";
import { infos } from "./Infos";



export class Beneficios{
  pericias: TabelaPericiasEnum[] = [];
  poderes: TabelaPoderesEnum[] = [];
}

export class Origem extends infos{
  itens: string[] = [];
  beneficios: Beneficios = new Beneficios();
  imagem: string = "";
}