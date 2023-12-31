/* eslint-disable no-useless-catch */
import { ClienteRepository } from '../../../adapters/postgres/cliente/ClienteRepository';

export class BuscarClientePorIdUseCase {
  static async execute(id: string) {
    try {
      const cliente = await ClienteRepository.buscarClientePorId(id);
      return cliente;
    } catch (error) {
      throw error;
    }
  }
}
