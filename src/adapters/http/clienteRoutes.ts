import express from 'express';
import ClienteUseCase from '../../application/useCases/ClienteUseCase';

const clienteRouter = express.Router();
const clienteUseCase = new ClienteUseCase();

// Rota para adicionar um novo cliente
clienteRouter.post('/', async (req, res) => {
  try {
    const { cpf, nome, email, senha } = req.body;
    const cliente = await clienteUseCase.adicionarCliente(cpf, nome, email, senha);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o cliente' });
  }
});

// Rota para buscar um cliente por CPF
clienteRouter.get('/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const cliente = await clienteUseCase.buscarClientePorCPF(cpf);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o cliente' });
  }
});

// Rota para buscar um cliente por email
clienteRouter.get('/email/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const cliente = await clienteUseCase.buscarClientePorEmail(email);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o cliente' });
  }
});

// Rota para atualizar um cliente por CPF
clienteRouter.put('/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const { nome, email, senha } = req.body;
    const cliente = await clienteUseCase.atualizarCliente(cpf, nome, email, senha);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o cliente' });
  }
});

// Rota para remover um cliente por CPF
clienteRouter.delete('/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const resultado = await clienteUseCase.removerCliente(cpf);
    if (resultado) {
      res.json({ message: 'Cliente removido com sucesso' });
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover o cliente' });
  }
});

export default clienteRouter;
