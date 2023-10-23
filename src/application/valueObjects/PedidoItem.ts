export default class PedidoItem {
  pedido_id?: string;
  item_id: number;
  quantidade: number;
  constructor(item_id: number, quantidade: number, pedido_id?: string) {
    this.pedido_id = pedido_id;
    this.item_id = item_id;
    this.quantidade = quantidade;
  }
}
