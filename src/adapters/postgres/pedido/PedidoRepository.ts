import { Op } from 'sequelize';
import { Pedido } from './PedidoModel';
import { Item as ItemModel } from '../item/ItemModel';
import crypto from 'crypto';

export class PedidoRepository {
  static async criar(cliente_cpf: string) {
    const id = crypto.randomBytes(4).toString('hex');
    return await Pedido.create({
      id,
      cliente_cpf,
      status: 'criado',
    });
  }

  static async buscarPorId(id: string) {
    return Pedido.findByPk(id, {
      include: [{ model: ItemModel, as: 'itens' }],
    });
  }

  //adiciona itens ao pedido
  static async adicionarItem(
    pedido: Pedido,
    item: ItemModel,
    quantidade: number,
  ) {
    return pedido.addItem(item, { through: { quantidade } });
  }

  // atualiza o status do pedido
  static async atualizarStatus(pedido_id: string, status: string) {
    return Pedido.update({ status: status }, { where: { id: pedido_id } });
  }

  static async buscarUltimos() {
    return Pedido.findAll({
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
