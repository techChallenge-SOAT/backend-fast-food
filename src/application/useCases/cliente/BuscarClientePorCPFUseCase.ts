import { ClienteRepository } from 'src/adapters/postgres/cliente/ClienteRepository';

export class BuscarClientePorCPFUseCase {
  static async buscarClientePorCPF(cpf: string) {
    try {
      const cliente = await ClienteRepository.buscarClientePorCPF(cpf);
      return cliente;
    } catch (error) {
      throw error;
    }
  }
}