import { ClienteRepository } from '../../../adapters/postgres/ClienteRepository'; // Importe o repositório apropriado
import { Cliente } from '../../../domain/models/Cliente';

export class BuscarClientePorCPFUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async executar(cpf: string): Promise<Cliente | null> {
    try {
      // Busque o cliente por CPF chamando o método do repositório
      const cliente = await this.clienteRepository.buscarClientePorCPF(cpf);

      return cliente;
    } catch (error) {
      // Trate erros ou exceções, se necessário
      throw error;
    }
  }
}
