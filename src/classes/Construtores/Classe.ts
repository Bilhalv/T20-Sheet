import { Poder } from "./Poder";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";
import { infos } from "./Infos";

export class Classe extends infos {
  vidainicial: number = 0;
  vidapnivel: number = 0;
  manapnivel: number = 0;
  periciasescolha: TabelaPericiasEnum[] = [];
  periciasescolhanum: number = 0;
  pericias: TabelaPericiasEnum[] = [];
  proficiencias: string[] = [];
  poderesunicos: Poder[] = [];
  habilidades: infos[] = [];
  conjurador: boolean = false;
  imagem: string = "./img/template/Class.png";
}