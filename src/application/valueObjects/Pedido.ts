export enum Status {
  Criado = 'criado',
  Pago = 'pago',
  Preparacao = 'em preparação',
  Cancelado = 'cancelado',
  Pronto = 'pronto',
  Finalizado = 'finalizado',
}

export default class Pedido {
  cliente_cpf: string;
  data_pedido?: Date;
  status: Status;
  constructor(cliente_cpf: string, data_pedido?: Date) {
    this.cliente_cpf = cliente_cpf;
    this.data_pedido = data_pedido;
    this.status = Status.Criado;
  }
}
