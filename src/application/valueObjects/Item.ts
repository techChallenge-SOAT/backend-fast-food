export default class Item {
  categoria: string;
  nome: string;
  descricao: string;
  preco_unitario: number;
  constructor(
    categoria: string,
    nome: string,
    descricao: string,
    preco_unitario: number,
  ) {
    this.categoria = categoria;
    this.nome = nome;
    this.descricao = descricao;
    this.preco_unitario = preco_unitario;
  }
}
