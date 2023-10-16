import { ClienteRepository } from 'src/adapters/postgres/cliente/ClienteRepository';
import { Cliente } from '../../../domain/models/Cliente';

export class BuscarClientePorCPFUseCase {
  constructor(private clienteRepository: typeof ClienteRepository) {}

  async executar(cpf: string): Promise<Cliente | null> {
    try {
      // Busque o cliente por CPF chamando o método do repositório
      const cliente = await this.clienteRepository.buscarClientePorCPF(cpf);

      return cliente || null; // Retorna null se o cliente não for encontrado
    } catch (error) {
      // Trate erros ou exceções, se necessário
      throw error;
    }
  }
}
