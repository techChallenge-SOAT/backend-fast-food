import { Op } from 'sequelize';
import { Item as ItemModel, Pedido as PedidoModel } from '../models/PedidoItemModels';
import crypto from 'crypto';
import Pedido from '../../../application/valueObjects/Pedido';

export class PedidoRepository {
  static async criar(pedido: Pedido) {
    const id = crypto.randomBytes(4).toString('hex');
    return await PedidoModel.create({
      id,
      cliente_cpf: pedido.cliente_cpf,
      status: 'recebido',
    });
  }

  static async buscarPorId(id: string) {
    return PedidoModel.findByPk(id, {
      include: [{ model: ItemModel, as: 'itens' }],
    });
  }

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

  static async atualizarStatus(pedido_id: string, status: string) {
    return PedidoModel.update({ status: status }, { where: { id: pedido_id } });
  }

  static async buscarUltimos() {
    try {
      return await PedidoModel.findAll({
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
            as: 'Itens',
            through: { attributes: ['quantidade'] },
          },
        ],
      });
    } catch (error) {
      console.error('Erro ao buscar os últimos pedidos:', error);
    }
  }
}