import { Poder, RequisitoPoder, TipoPoder } from "../Poder";

export const TabelaPoderesCombate: Poder[] = [
    {
        nome: "Ataque template",
        descricao: "Ataque template",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo,
        ]
    }
]