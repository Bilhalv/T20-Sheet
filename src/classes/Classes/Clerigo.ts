import { Poder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";

export const poderesClerigo: Poder[] = [
  {
    nome: "Arcano de Batalha.",
    descricao:
      "Quando lança uma magia, você soma seu atributo-chave na rolagem de dano.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Aumento de Atributo.",
    descricao:
      "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
];

export const clerigo: Classe = {
  nome: "Clérigo",
  descricao:
    "Servo de um dos deuses de Arton, usa poderes divinos para defender seus ideais.",
  vidapnivel: 4,
  vidainicial: 16,
  manapnivel: 5,
  pericias: [TabelaPericiasEnum.Religião, TabelaPericiasEnum.Vontade],
  periciasescolha: [
    TabelaPericiasEnum.Conhecimento,
    TabelaPericiasEnum.Cura,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Fortitude,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intuição,
    TabelaPericiasEnum.Luta,
    TabelaPericiasEnum.Misticismo,
    TabelaPericiasEnum.Nobreza,
    TabelaPericiasEnum.Ofício,
    TabelaPericiasEnum.Percepção,
  ],
  periciasescolhanum: 2,
  proficiencias: ["Armaduras pesadas", "Escudos"],
  habilidades: [
    {
      nome: "Devoto Fiel.",
      descricao: ""
    }
  ],
  poderesunicos: poderesClerigo,
  conjurador: true,
  imagem: "./img/classes/clerigo.png",
};
