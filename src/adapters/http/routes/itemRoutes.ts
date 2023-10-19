import express, { Request, Response } from 'express';
import { CriarItemUseCase } from '../../../application/useCases/item/CriarItemUseCase';
import logger from '../../../config/logger';
import { BuscarItemPorIDUseCase } from 'src/application/useCases/item/BuscarItemPorIDUseCase';
import { BuscarItensUseCase } from 'src/application/useCases/item/BuscarItensUseCase';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const categoria = String(req.body.categoria);
  const nome = String(req.body.nome);
  const descricao = String(req.body.descricao);
  const preco_unitario = Number(req.body.preco_unitario);

  try {
    const cliente = await CriarItemUseCase.execute(
      categoria,
      nome,
      descricao,
      preco_unitario,
    );
    return res.status(201).json(cliente);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao adicionar o cliente.' });
  }
});

router.get('/', async (_, res: Response) => {
  try {
    const clientes = await BuscarItensUseCase.execute();
    return res.status(200).json(clientes);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar os clientes.' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const clientes = await BuscarItemPorIDUseCase.execute(id);
    return res.status(200).json(clientes);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar os clientes.' });
  }
});

export default router;
