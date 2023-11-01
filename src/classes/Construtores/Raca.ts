import { infos } from "./Infos";
import { PoderRaca } from "./Poder";

export class Raca extends infos{
  atributos: string[] = [];
  escolhaAtributo: boolean = false;
  imagem: string = "";
  poderes: infos[] = [];
}
