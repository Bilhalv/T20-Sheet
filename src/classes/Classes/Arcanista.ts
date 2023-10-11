import { Poder, TipoPoder } from "../Poder";
import { Classe } from "./Classe";

export const poderesArcanista: Poder[] = [
  {
    nome: "Poderes de Arcanista",
    descricao:
      "Você pode escolher um poder de arcanista. Você pode escolher este poder mais de uma vez, cada uma delas você escolhe um poder diferente.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Poderes de Arcanista",
    descricao:
      "Você pode escolher um poder de arcanista. Você pode escolher este poder mais de uma vez, cada uma delas você escolhe um poder diferente.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
];

export const arcanista: Classe = {
  nome: "Arcanista",
  descricao:
    "Um conjurador de magias arcanas, por meio de estudo, um foco ou dom natural.",
  vidapnivel: 2,
  vidainicial: 8,
  manapnivel: 6,
  pericias: ["misticismo", "vontade"],
  periciasescolha: [
    "conhecimento",
    "diplomacia",
    "enganação",
    "guerra",
    "iniciativa",
    "intimidação",
    "inuição",
    "investigação",
    "nobreza",
    "oficio",
    "percepção",
  ],
  periciasescolhanum: 2,
  proficiencias: [],
  habilidades: ["caminho do arcanista", "alta arcana"],
  poderesunicos: poderesArcanista,
};
