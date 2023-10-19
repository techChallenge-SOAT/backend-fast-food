import { PedidoRepository } from '../../../adapters/postgres/pedido/PedidoRepository';

export class AlterarStatusDoPedidoUseCase {
  static async execute(id_pedido: string, status: string) {
    return PedidoRepository.atualizarStatus(id_pedido, status);
  }
}
