import { ClienteRepository } from '../../../adapters/postgres/cliente/ClienteRepository';

export class BuscarTodosClientesUseCase {

  static async execute() {
    try {
      const clientes = await ClienteRepository.buscarTodosClientes();
      return clientes;
    } catch (error) {
      throw error;
    }
  }
}
