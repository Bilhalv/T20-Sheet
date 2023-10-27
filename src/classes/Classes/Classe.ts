import { Poder } from "../Construtores/Poder";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";


class habilidade {
  nome: string = "";
  descricao: string = "";
}
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
  habilidades: habilidade[] = [];
  conjurador: boolean = false;
  imagem: string = "./img/template/Class.png";
}