export default class Acao {
  nome: string;
  descricao: JSX.Element;
  tipo: "padrao" | "movimento" | "completa" | "livre" | "reacao" | "manobra";
  constructor(
    nome: string,
    descricao: JSX.Element,
    tipo: "padrao" | "movimento" | "completa" | "livre" | "reacao" | "manobra"
  ) {
    this.nome = nome;
    this.descricao = descricao;
    this.tipo = tipo;
  }
}
