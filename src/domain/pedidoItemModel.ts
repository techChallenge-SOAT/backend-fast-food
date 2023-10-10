export default class PedidoItem {
  id: number;
  pedido_id: string;
  item_id: number;
  quantidade: number;
  constructor(
    id: number,
    pedido_id: string,
    item_id: number,
    quantidade: number,
  ) {
    this.id = id;
    this.pedido_id = pedido_id;
    this.item_id = item_id;
    this.quantidade = quantidade;
  }

  // Métodos relacionados ao modelo de pedido_item
}
