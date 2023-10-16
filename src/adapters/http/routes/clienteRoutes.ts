import express from 'express';
import { AdicionarClienteUseCase } from 'src/application/useCases/cliente/AdicionarClienteUseCase'; // Importe os casos de uso apropriados
import { BuscarClientePorCPFUseCase } from 'src/application/useCases/cliente/BuscarClientePorCPFUseCase';
import { Request, Response } from 'express';
import { Cliente } from 'src/domain/models/Cliente';
import ClienteRepository from 'src/adapters/postgres/cliente/ClienteRepository';

const clienteRouter = express.Router();
const clienteRepo = new ClienteRepository(); // Crie uma instância do ClienteRepository
const adicionarClienteUseCase = new AdicionarClienteUseCase(clienteRepo); // Passe o clienteRepo como argumento
const buscarClientePorCPFUseCase = new BuscarClientePorCPFUseCase(clienteRepo); // Passe o clienteRepo como argumento

// Rota para adicionar um novo cliente
clienteRouter.post('/criar', async (req: Request, res: Response) => {
  try {
    const { cpf, nome, email, senha } = req.body;
    const clienteData: Cliente = { cpf, nome, email, senha };
    const novoCliente = await adicionarClienteUseCase.executar(clienteData);
    res.json(novoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o cliente' });
  }
});

// Rota para buscar um cliente por CPF
clienteRouter.get('/consultar/:cpf', async (req: Request, res: Response) => {
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
