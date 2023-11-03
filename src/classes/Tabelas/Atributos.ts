import { Atributo } from "../Construtores/Atributo";
import { Pericia } from "../Construtores/Pericia";
import { TabelaPericias } from "./Pericias";

export class atributoConstrutor {
  nome: string = "";
  img: string = "";
  descricao: string = "";
  pericias: Pericia[] = [];
}

const periciasPorAtributo = TabelaPericias.reduce((acc, pericia) => {
  const atributo = pericia.atributo;
  if (!acc[atributo]) {
    acc[atributo] = [];
  }
  acc[atributo].push(pericia);
  return acc;
}, {} as Record<Atributo, Pericia[]>);

const [
  periciasForca,
  periciasDestreza,
  periciasConstituicao,
  periciasInteligencia,
  periciasSabedoria,
  periciasCarisma,
] = [
  Atributo.forca,
  Atributo.destreza,
  Atributo.constituicao,
  Atributo.inteligencia,
  Atributo.sabedoria,
  Atributo.carisma,
].map((atributo) => periciasPorAtributo[atributo] ?? []);

export const TabelaAtributos: atributoConstrutor[] = [
  {
    nome: "Força",
    img: "./img/atributos/forca.svg",
    descricao: "Seu poder muscular. A Força é aplicada em testes de Atletismo e Luta; rolagens de dano corpo a corpo ou com armas de arremesso, e testes de Força para levantar peso e atos similares.",
    pericias: periciasForca.map(
      ({ nome, descricao, atributo, somentetreinada, penalidadearmadura }) => ({
        nome,
        descricao,
        atributo,
        somentetreinada,
        penalidadearmadura,
      })
    ),
  },
  {
    nome: "Destreza",
    img: "./img/atributos/destreza.svg",
    descricao: "Sua agilidade, reflexos, equilíbrio e coordenação motora. A Destreza é aplicada na Defesa e em testes de Acrobacia, Cavalgar, Furtividade, Iniciativa, Ladinagem, Pilotagem, Pontaria e Reflexos.",
    pericias: periciasDestreza.map(
      ({ nome, descricao, atributo, somentetreinada, penalidadearmadura }) => ({
        nome,
        descricao,
        atributo,
        somentetreinada,
        penalidadearmadura,
      })
    ),
  },
  {
    nome: "Constituição",
    img: "./img/atributos/constituicao.svg",
    descricao: "Sua saúde e vigor. A Constituição é aplicada aos pontos de vida iniciais e por nível e em testes de Fortitude. Se a Constituição muda, seus pontos de vida aumentam ou diminuem retroativamente de acordo.",
    pericias: periciasConstituicao.map(
      ({ nome, descricao, atributo, somentetreinada, penalidadearmadura }) => ({
        nome,
        descricao,
        atributo,
        somentetreinada,
        penalidadearmadura,
      })
    ),
  },
  {
    nome: "Inteligência",
    img: "./img/atributos/inteligencia.svg",
    descricao: "Sua capacidade de raciocínio, memória e educação. A Inteligência é aplicada em testes de Conhecimento, Guerra, Investigação, Misticismo, Nobreza e Ofício. Além disso, se sua Inteligência for positiva, você recebe um número de perícias treinadas igual ao valor dela (não precisam ser da sua classe).",
    pericias: periciasInteligencia.map(
      ({ nome, descricao, atributo, somentetreinada, penalidadearmadura }) => ({
        nome,
        descricao,
        atributo,
        somentetreinada,
        penalidadearmadura,
      })
    ),
  },
  {
    nome: "Sabedoria",
    img: "./img/atributos/sabedoria.svg",
    descricao: "Sua observação, ponderação e determinação. A Sabedoria é aplicada em testes de Cura, Intuição, Percepção, Religião, Sobrevivência e Vontade.",
    pericias: periciasSabedoria.map(
      ({ nome, descricao, atributo, somentetreinada, penalidadearmadura }) => ({
        nome,
        descricao,
        atributo,
        somentetreinada,
        penalidadearmadura,
      })
    ),
  },
  {
    nome: "Carisma",
    img: "./img/atributos/carisma.svg",
    descricao: "Sua força de personalidade e capacidade de persuasão, além de uma mistura de simpatia e beleza. O Carisma é aplicado em testes de Adestramento, Atuação, Diplomacia, Enganação, Intimidação e Jogatina.",
    pericias: periciasCarisma.map(
      ({ nome, descricao, atributo, somentetreinada, penalidadearmadura }) => ({
        nome,
        descricao,
        atributo,
        somentetreinada,
        penalidadearmadura,
      })
    ),
  },
];
