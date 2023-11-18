import { Atributo } from "./Atributo";
import { Classe } from "./Classe";
import { Pericia } from "./Pericia";
import { Poder } from "./Poder";

export class Ficha{
    nome: string = "";
    classe: Classe = new Classe();
    nivel: number = 0;
    pv: number = 0;
    pm: number = 0;
    atributos: Atributo[] = [];
    pericias: Pericia[] = [];
    // magias: Magia[] = [];
    poderes: Poder[] = [];
}