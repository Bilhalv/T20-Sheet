import { Atributo } from "../Construtores/Atributo";
import { Pericia } from "../Construtores/Pericia";

const TabelaPericias: Pericia[] = [
    {
        nome: "Acrobacia",
        descricao: "Você consegue fazer proezas acrobáticas.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: true
    },
    {
        nome: "Adestramento",
        descricao: "Você sabe lidar com animais.",
        atributo: Atributo.carisma,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Atletismo",
        descricao: "Você pode realizar façanhas atléticas.",
        atributo: Atributo.forca,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Atuação",
        descricao: "Você sabe fazer apresentações artísticas, incluindo música, dança e dramaturgia.",
        atributo: Atributo.carisma,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Cavalgar",
        descricao: "Você sabe conduzir animais de montaria, como cavalos, trobos e grifos. Ações simples não exigem testes — você pode encilhar, montar, cavalgar em terreno plano e desmontar automaticamente. Ações perigosas, entretanto, exigem testes da perícia.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: false
    },
]

export enum TabelaPericiasEnum {
    Acrobacia = "Acrobacia",
    Adestramento = "Adestramento",
    Atletismo = "Atletismo",
    Atuação = "Atuação",
    Cavalgar = "Cavalgar",
}
  