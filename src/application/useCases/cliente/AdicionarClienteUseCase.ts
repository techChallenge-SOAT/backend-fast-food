import { ClienteRepository } from '../../../adapters/postgres'; 
import { Cliente } from '../../../domain/models/Cliente';

export class AdicionarClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async executar(clienteData: Cliente): Promise<Cliente | null> {
    try {
      // Verifique se um cliente com o mesmo CPF já existe
      const clienteExistente = await this.clienteRepository.buscarClientePorCPF(clienteData.cpf);

      if (clienteExistente) {
        throw new Error('Cliente com o mesmo CPF já existe.');
      }

      // Se não existe, adicione o cliente
      const novoCliente = await this.clienteRepository.adicionarCliente(clienteData);

      return novoCliente;
    } catch (error) {
      // Trate erros ou exceções, por exemplo, validação de entrada
      throw error;
    }
  }
}
