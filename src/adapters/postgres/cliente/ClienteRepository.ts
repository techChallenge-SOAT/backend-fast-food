/* eslint-disable no-useless-catch */
import { Cliente } from '../models/ClienteModel';

export class ClienteRepository {
  static async adicionarCliente(
    id: string,
    cpf: string,
    nome: string,
    email: string,
    senha: string,
  ) {
    try {
      const cliente = await Cliente.create({
        id,
        cpf,
        nome,
        email,
        senha,
      });
      return cliente;
    } catch (error) {
      throw error;
    }
  }

  static async buscarClientePorId(id: string) {
    try {
      const cliente = await Cliente.findOne({ where: { id: id } });
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
      const cliente = await Cliente.findOne({ where: { cpf: cpf } });
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
      const cliente = await Cliente.findOne({ where: { email: email } });
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
      const clientes = await Cliente.findAll();
      return clientes;
    } catch (error) {
      throw error;
    }
  }
}
