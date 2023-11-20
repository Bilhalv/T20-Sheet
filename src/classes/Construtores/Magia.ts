import { infos } from "./Infos";

export enum enumExecucao {
    padrao = "Padrão",
    completa = "Completa",
    movimento = "Movimento",
    reacao = "Reação",
    livre = "Livre",
    instantanea = "Instantanea",
    cena = "Cena",
    nenhuma = "Nenhuma"
}

export class aprimoramentos {
    pm_a_mais: number = 0;
    descricao: string = "";
}

export enum enumEscolas{
    abjuracao = "Abjuração",
    adivinhacao = "Adivinhação",
    convocacao = "Convocação",
    encantamento = "Encantamento",
    evocacao = "Evocação",
    ilusao = "Ilusão",
    necromancia = "Necromancia",
    transmutacao = "Transmutação"
}

export enum enumTipo{
    divina = "Divina",
    arcana = "Arcana",
    qualquer = "Qualquer"
}

export class Magia extends infos{
    circulo: number = 0;
    execucao: enumExecucao = enumExecucao.padrao;
    alcance: string = "";
    alvo: string = "";
    duracao: string = "";
    resistencia: string = "";
    escola: enumEscolas = enumEscolas.abjuracao;
    aprimoramentos: aprimoramentos[] = [];
    tipo: enumTipo = enumTipo.arcana;
}