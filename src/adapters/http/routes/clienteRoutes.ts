import express, { Request, Response } from 'express';
import { AdicionarClienteUseCase } from 'src/application/useCases/cliente/AdicionarClienteUseCase';
import { ClienteUseCase } from 'src/application/useCases/cliente/ClienteUseCase';

const router = express.Router();

// Rota para adicionar um cliente
router.post('/', async (req: Request, res: Response) => {
  const { cpf, nome, email, senha } = req.body;

  try {
    const cliente = await AdicionarClienteUseCase.execute(cpf, nome, email, senha);
    return res.status(201).json(cliente);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao adicionar o cliente.' });
  }
});

// Rota para buscar um cliente pelo CPF
router.get('/:cpf', async (req: Request, res: Response) => {
  const cpf = req.params.cpf;

  try {
    const cliente = await ClienteUseCase.buscarClientePorCPF(cpf);

    if (cliente) {
      return res.json(cliente);
    } else {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar o cliente.' });
  }
});

export default router;
