import Cliente from '../../../application/valueObjects/Cliente';
import { Cliente as ClienteModel} from '../models/ClienteModel';

export class ClienteRepository {
  static async adicionarCliente(cliente: Cliente) {
    return await ClienteModel.create({
      id: cliente.id,
      cpf: cliente.cpf,
      nome: cliente.nome,
      email: cliente.email,
      senha: cliente.senha,
    });
  }

  static async buscarClientePorId(id: string) {
    try {
      const cliente = await ClienteModel.findByPk(id);
      if (!cliente) {
        return null;
      }
      return cliente;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Erro ao buscar cliente por id');
      }
    }
  }

  static async buscarClientePorCPF(cpf: string) {
    try {
      const cliente = await ClienteModel.findOne({ where: { cpf: cpf } });
      if (!cliente) {
        return null;
      }
      return cliente;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Erro ao buscar cliente por cpf');
      }
    }
  }

  static async buscarClientePorEmail(email: string) {
    try {
      const cliente = await ClienteModel.findOne({ where: { email: email } });
      if (!cliente) {
        return null;
      }
      return cliente;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Erro ao buscar cliente por email');
      }
    }
  }

  static async buscarTodosClientes() {
    try {
      const clientes = await ClienteModel.findAll();
      return clientes;
    } catch (error) {
      throw error;
    }
  }
}
