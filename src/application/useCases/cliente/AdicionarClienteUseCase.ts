import { ClienteRepository } from 'src/adapters/postgres/cliente/ClienteRepository';

export class AdicionarClienteUseCase {
  static async cpfExiste(cpf: string) {
    const clienteExistente = await ClienteRepository.buscarClientePorCPF(cpf);
    return clienteExistente !== null;
  }

  static async execute(cpf: string, nome: string, email: string, senha: string) {
    try {
      const cpfJaExiste = await this.cpfExiste(cpf);

      if (cpfJaExiste) {
        throw new Error('CPF já está cadastrado.');
      }

      const cliente = await ClienteRepository.adicionarCliente(cpf, nome, email, senha);
      return cliente;
    } catch (error) {
      throw error;
    }
  }
}

