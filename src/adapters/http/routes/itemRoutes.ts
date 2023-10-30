import express, { Request, Response } from 'express';
import logger from '../../../config/logger';
import { CriarItemUseCase } from '../../../application/useCases/item/CriarItemUseCase';
import { BuscarItemPorIDUseCase } from '../../../application/useCases/item/BuscarItemPorIDUseCase';
import { BuscarItensUseCase } from '../../../application/useCases/item/BuscarItensUseCase';
import Item from '../../../application/valueObjects/Item';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const categoria = String(req.body.categoria);
  const nome = String(req.body.nome);
  const descricao = String(req.body.descricao);
  const preco_unitario = Number(req.body.preco_unitario);

  const item = new Item(categoria, nome, descricao, preco_unitario);

  try {
    const item_criado = await CriarItemUseCase.execute(item);
    return res.status(201).json({ message: 'Sucesso', item: item_criado });
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao adicionar o item.' });
  }
});

router.get('/', async (_, res: Response) => {
  try {
    const clientes = await BuscarItensUseCase.execute();
    return res.status(200).json(clientes);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar os itens.' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const clientes = await BuscarItemPorIDUseCase.execute(id);
    return res.status(200).json(clientes);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar o item.' });
  }
});

export default router;
