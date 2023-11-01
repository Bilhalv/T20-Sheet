import { Atributo } from './Atributo';
import { infos } from './Infos';

export class Pericia extends infos {
  atributo: Atributo = Atributo.sabedoria;
  somentetreinada: boolean = false;
  penalidadearmadura: boolean = false;
}