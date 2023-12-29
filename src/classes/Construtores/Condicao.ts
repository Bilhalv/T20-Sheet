export default class Condicao {
  nome: string;
  descricao: string;
  img: string;
  tipo?: string;
  constructor(nome: string, descricao: string, img: string, tipo?: string) {
    this.nome = nome;
    this.descricao = descricao;
    this.img = img;
    this.tipo = tipo;
  }
}
