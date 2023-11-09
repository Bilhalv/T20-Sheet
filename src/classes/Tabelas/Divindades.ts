import { divindade, enumEnergia } from "../Construtores/Divindade";

export const tabelaDivindades: divindade[] = [
    {
        nome: "Aharadak",
        descricao: "Outrora um dos terríveis Lordes da Tormenta, esta aberração monstruosa ambicionava o grande poder divino oferecido pelos devotos de Arton. Após anos liderando seu próprio culto profano, Aharadak matou Tauron, o Deus da Força, e ascendeu como o novo e macabro Deus da Tormenta. Agora ocupando uma posição importante no Panteão, os invasores lefeu avançam mais uma etapa em seus planos para corromper Arton. Apenas os devotos mais depravados ousam cultuar esta divindade de escatologia e sadismo.",
        crencas: "Reverenciar a Tormenta, apregoar a inevitabilidade de sua chegada ao mundo. Praticar a devassidão e a perversão. Deturpar tudo que é correto, desfigurar tudo que é normal. Abraçar a agonia, crueldade e loucura.",
        simbolo: "Um olho macabro de pupila vertical e cercado de espinhos.",
        energia: enumEnergia.Negativa,
        arma: "Corrente de espinhos.",
        devotos: ["Quaisquer. A Tormenta aceita tudo e todos."],
        poderes: [],
        obrigacoes: "Quase todos os cultistas de Aharadak são maníacos insanos, compelidos a praticar os atos mais abomináveis. No entanto, talvez devido à natureza alienígena e incompreensível deste deus, alguns devotos conseguem se resguardar. Preservam sua humanidade, abstendo-se de cometer crimes ou profanações. Ainda assim, o devoto paga um preço. No início de qualquer cena de ação, role 1d6. Com um resultado ímpar, você fica fascinado na primeira rodada, perdido em devaneios sobre a futilidade da vida (mesmo que seja imune a esta condição).",
        imagens: ["./img/divindades/display/Aharadak.png", "./img/divindades/simbolos/Aharadak.png"],
    },
]