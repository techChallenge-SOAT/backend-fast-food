import express, { Request, Response } from 'express';
import { AdicionarClienteUseCase } from '../../../application/useCases/cliente/AdicionarClienteUseCase';
import { BuscarClientePorCPFUseCase } from '../../../application/useCases/cliente/BuscarClientePorCPFUseCase';
import { BuscarTodosClientesUseCase } from '../../../application/useCases/cliente/BuscarTodosClientesUseCase';
import logger from '../../../config/logger';

const router = express.Router();

// Rota para adicionar um cliente
router.post('/', async (req: Request, res: Response) => {
  const { cpf, nome, email, senha } = req.body;

  try {
    const cliente = await AdicionarClienteUseCase.execute(cpf, nome, email, senha);
    return res.status(201).json(cliente);
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao adicionar o cliente.' });
  }
});

// Rota para buscar um cliente pelo CPF
router.get('/:cpf', async (req: Request, res: Response) => {
  const cpf = req.params.cpf;

  try {
    const cliente = await BuscarClientePorCPFUseCase.execute(cpf);

    if (cliente) {
      return res.json(cliente);
    } else {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar o cliente.' });
  }
});

// Rota para buscar todos clientes
router.get('/', async (req: Request, res: Response) => {
  
  try {
    const clientes = await BuscarTodosClientesUseCase.execute();

    if (clientes) {
      return res.json(clientes);
    } else {
      return res.status(404).json({ message: 'Clientes não encontrados.' });
    }
  } catch (error) {
    logger.info(error);
    return res.status(500).json({ message: 'Erro ao buscar o clientes.' });
  }
});

export default router;
