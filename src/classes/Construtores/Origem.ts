import { Poder } from "./Poder";

export class Beneficios{
  pericias: string[] = [];
  poderes: string[] = [];
}

export class Origem {
  nome: string = "";
  descricao: string = "";
  itens: string[] = [];
  beneficios: Beneficios = new Beneficios();
  imagem: string = "";
}