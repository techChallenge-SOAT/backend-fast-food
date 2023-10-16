import { ClienteRepository } from 'src/adapters/postgres/cliente/ClienteRepository';
import { Cliente } from '../../../domain/models/Cliente';

export class BuscarClientePorCPFUseCase {
  constructor(private clienteRepository: typeof ClienteRepository) {}

  async execute(cpf: string): Promise<Cliente | null> {
    try {
      const cliente = await this.clienteRepository.buscarClientePorCPF(cpf);

      return cliente || null; 
    } catch (error) {
      throw error;
    }
  }
}
