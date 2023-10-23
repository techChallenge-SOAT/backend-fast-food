import { PedidoRepository } from '../../../adapters/postgres/pedido/PedidoRepository';
import { Status } from '../../../application/valueObjects/Pedido';

export class AlterarStatusDoPedidoUseCase {
  static async execute(id_pedido: string, status: string) {
    //this could be better, I don't like this kind of on the fly type casting
    if (!(Object.values(Status) as string[]).includes(status)) {
      throw new Error('Status inválido');
    }
    return PedidoRepository.atualizarStatus(id_pedido, status);
  }
}
