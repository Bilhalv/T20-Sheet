import { Poder } from "../Construtores/Poder";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export class Classe {
  nome: string = "";
  descricao: string = "";
  vidainicial: number = 0;
  vidapnivel: number = 0;
  manapnivel: number = 0;
  periciasescolha: TabelaPericiasEnum[] = [];
  periciasescolhanum: number = 0;
  pericias: TabelaPericiasEnum[] = [];
  proficiencias: string[] = [];
  poderesunicos: Poder[] = [];
  habilidades: string[] = [];
  conjurador: boolean = false;
  imagem: string = "./img/template/Class.png";
}