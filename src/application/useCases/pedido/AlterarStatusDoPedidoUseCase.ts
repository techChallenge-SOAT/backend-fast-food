import { PedidoRepository } from '../../../adapters/postgres/pedido/PedidoRepository';
import { Status } from '../../../application/valueObjects/Pedido';

export class AlterarStatusDoPedidoUseCase {
  static async execute(id_pedido: string, status: Status) {
    if (!(Object.values(Status).includes(status))) {
      throw new Error('Status inválido');
    }
    
    return PedidoRepository.atualizarStatus(id_pedido, status);
  }
}
