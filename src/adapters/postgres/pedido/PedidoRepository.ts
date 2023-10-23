import { Op } from 'sequelize';
import { Pedido as PedidoModel, Item as ItemModel } from './models';
import crypto from 'crypto';
import Pedido from 'src/application/valueObjects/Pedido';

export class PedidoRepository {
  static async criar(pedido: Pedido) {
    const id = crypto.randomBytes(4).toString('hex');
    return await PedidoModel.create({
      id,
      cliente_cpf: pedido.cliente_cpf,
      status: 'criado',
    });
  }

  static async buscarPorId(id: string) {
    return PedidoModel.findByPk(id, {
      include: [{ model: ItemModel, as: 'itens' }],
    });
  }

  //adiciona itens ao pedido
  static async adicionarItem(
    pedido: PedidoModel,
    item: ItemModel,
    quantidade: number,
  ) {
    if (quantidade <= 0) {
      throw new Error('Quantidade inválida');
    }
    return pedido.addItem(item, { through: { quantidade } });
  }

  // atualiza o status do pedido
  static async atualizarStatus(pedido_id: string, status: string) {
    return PedidoModel.update({ status: status }, { where: { id: pedido_id } });
  }

  static async buscarUltimos() {
    return PedidoModel.findAll({
      where: {
        status: {
          [Op.not]: 'Finalizado',
        },
      },
      limit: 10,
      order: [['data_pedido', 'DESC']],
      include: [
        {
          model: ItemModel,
          as: 'itens',
          through: { attributes: ['quantidade'] },
        },
      ],
    });
  }
}
