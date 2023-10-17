/* eslint-disable no-useless-catch */
import { ClienteRepository } from '../../../adapters/postgres/cliente/ClienteRepository';

export class BuscarClientePorCPFUseCase {
  static async execute(cpf: string) {
    try {
      const cliente = await ClienteRepository.buscarClientePorCPF(cpf);
      return cliente;
    } catch (error) {
      throw error;
    }
  }
}
