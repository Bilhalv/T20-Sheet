import { Atributo } from "../Construtores/Atributo";
import { Pericia } from "../Construtores/Pericia";

const TabelaPericias: Pericia[] = [
    {
        nome: "Acrobacia",
        descricao: "Você é habilidoso em se equilibrar, saltar e cair.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: true
    },
    {
        nome: "Atletismo",
        descricao: "Você é habilidoso em escalar, nadar e saltar.",
        atributo: Atributo.forca,
        somentetreinada: false,
        penalidadearmadura: true
    },
    {
        nome: "Atuação",
        descricao: "Você é habilidoso em entreter, impressionar e contar histórias.",
        atributo: Atributo.carisma,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Arcanismo",
        descricao: "Você é habilidoso em identificar magias e compreender os planos.",
        atributo: Atributo.inteligencia,
        somentetreinada: false,
        penalidadearmadura: false
    }
]

export enum TabelaPericiasEnum {
    Acrobacia = "Acrobacia",
    Atletismo = "Atletismo",
    Atuação = "Atuação",
    Arcanismo = "Arcanismo"
}
  