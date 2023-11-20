import {
  Magia,
  enumEscolas,
  enumExecucao,
  enumTipo,
} from "../Construtores/Magia";

export const TabelaMagias: Magia[] = [
  {
    nome: "Abençoar Alimentos",
    descricao:
      "Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "Alimento para 1 criatura",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o número de alvos em +1",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
];
