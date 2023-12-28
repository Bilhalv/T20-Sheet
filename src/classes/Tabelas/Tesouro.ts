import Tesouro from "../Construtores/Tesouro"

export const TesouroTabela:Tesouro[] = [
    {
        nd: "1/4",
        tabelaDinheiro: [
            {min: 1, max: 30, value: "Nenhum"},
            {min: 31, max: 70, value: "1d6x10 TC"},
            {min: 71, max: 95, value: "1d4x100 TC"},
            {min: 96, max: 100, value: "1d6x10 T$"}
        ],
        tabelaItem: [
            {min: 1, max: 50, value: "Nenhum"},
            {min: 51, max: 75, value: "Diverso"},
            {min: 76, max: 100, value: "Equipamento"}
        ]
    },
    {
        nd: "1/2",
        tabelaDinheiro: [
            {min: 1, max: 25, value: "Nenhum"},
            {min: 26, max: 70, value: "2d6x10 TC"},
            {min: 71, max: 95, value: "1d8x10 T$"},
            {min: 96, max: 100, value: "1d4x100 T$"}
        ],
        tabelaItem: [
            {min: 1, max: 45, value: "Nenhum"},
            {min: 46, max: 70, value: "Diverso"},
            {min: 71, max: 100, value: "Equipamento"}
        ]
    },
    {
        nd: "1",
        tabelaDinheiro: [
            {min: 1, max: 20, value: "Nenhum"},
            {min: 21, max: 70, value: "3d8x10 T$"},
            {min: 71, max: 95, value: "4d12x10 T$"},
            {min: 96, max: 100, value: "1 riqueza menor"}
        ],
        tabelaItem: [
            {min: 1, max: 40, value: "Nenhum"},
            {min: 41, max: 65, value: "Diverso"},
            {min: 66, max: 90, value: "Equipamento"},
            {min: 91, max: 100, value: "1 poção"}
        ]
    },
    {
        nd: "2",
        tabelaDinheiro: [
            {min: 1, max: 15, value: "Nenhum"},
            {min: 16, max: 55, value: "3d10x10 T$"},
            {min: 56, max: 85, value: "2d4x100 T$"},
            {min: 86, max: 95, value: "(2d6+1)x100 T$"},
            {min: 96, max: 100, value: "1 riqueza menor"}
        ],
        tabelaItem: [
            {min: 1, max: 30, value: "Nenhum"},
            {min: 31, max: 40, value: "Diverso"},
            {min: 41, max: 70, value: "Equipamento"},
            {min: 71, max: 90, value: "1 poção"},
            {min: 91, max: 100, value: "Superior(1 melhoria)"}
        ]
    }
]