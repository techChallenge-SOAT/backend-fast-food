export default class Pedido {
  id: string;
  cliente_cpf: string;
  data_pedido: Date;
  status: string;
  constructor(
    id: string,
    cliente_cpf: string,
    data_pedido: Date,
    status: string,
  ) {
    this.id = id;
    this.cliente_cpf = cliente_cpf;
    this.data_pedido = data_pedido;
    this.status = status;
  }
}
