import express, { Request, Response } from 'express';
import logger from '../../../config/logger';
import { BuscarUltimosPedidosUseCase } from '../../../application/useCases/pedido/BuscarUltimosPedidosUseCase';
import { CriarPedidoUseCase } from '../../../application/useCases/pedido/CriarPedidoUseCase';
import Pedido from '../../../application/valueObjects/Pedido';
import PedidoItem from '../../../application/valueObjects/PedidoItem';
import { BuscarPedidoPorIdUseCase } from '../../../application/useCases/pedido/BuscarPedidoPorIdUseCase';
import { AlterarStatusDoPedidoUseCase } from '../../../application/useCases/pedido/AlterarStatusDoPedidoUseCase';
import { Status} from '../../../application/valueObjects/Pedido'

const router = express.Router();

router.get('/', async (_, res: Response) => {
  try {
    const clientes = await BuscarUltimosPedidosUseCase.execute();
    return res.status(200).json(clientes);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar os pedidos.' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const cliente_cpf = String(req.body.cliente_cpf);

  if (
    !req.body.ids_itens ||
    !Array.isArray(req.body.ids_itens) ||
    req.body.ids_itens.length === 0
  ) {
    throw new Error('Itens inválidos');
  }

  const itens_pedido = req.body.ids_itens.map(
    (item_pedido: PedidoItem) =>
      new PedidoItem(item_pedido.item_id, item_pedido.quantidade),
  );

  const pedido = new Pedido(cliente_cpf);

  try {
    const cliente = await CriarPedidoUseCase.execute(pedido, itens_pedido);
    return res.status(201).json(cliente);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao adicionar o pedido.' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const clientes = await BuscarPedidoPorIdUseCase.execute(id);
    return res.status(200).json(clientes);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar o pedido.' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const id = String(req.params.id);
  const statusFromBody = String(req.body.status) as keyof typeof Status;

  if (!(statusFromBody in Status)) {
    return res.status(400).json({ message: 'Status inválido fornecido.' });
  }

  try {
    const status = statusFromBody as unknown as Status;
    const cliente = await AlterarStatusDoPedidoUseCase.execute(id, status);
    return res.status(201).json(cliente);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao atualizar o pedido.' });
  }
});

export default router;
