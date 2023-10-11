import { Poder } from "../Poder";

export class Classe {
  nome: string = "";
  descricao: string = "";
  vidainicial: number = 0;
  vidapnivel: number = 0;
  manapnivel: number = 0;
  periciasescolha: string[] = [];
  periciasescolhanum: number = 0;
  pericias: string[] = [];
  proficiencias: string[] = [];
  poderesunicos: Poder[] = [];
  habilidades: string[] = [];
}