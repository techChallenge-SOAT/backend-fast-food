import express from 'express';
import { AdicionarClienteUseCase, BuscarClientePorCPFUseCase } from '../../application/useCases/cliente';
import { Request, Response } from 'express';

const clienteRouter = express.Router();
const adicionarClienteUseCase = new AdicionarClienteUseCase();
const buscarClientePorCPFUseCase = new BuscarClientePorCPFUseCase();

// Rota para adicionar um novo cliente
clienteRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { cpf, nome, email, senha } = req.body;
    const cliente = await adicionarClienteUseCase.executar({ cpf, nome, email, senha });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o cliente' });
  }
});

// Rota para buscar um cliente por CPF
clienteRouter.get('/:cpf', async (req: Request, res: Response) => {
  try {
    const cpf = req.params.cpf;
    const cliente = await buscarClientePorCPFUseCase.executar(cpf);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o cliente' });
  }
});

export default clienteRouter;
