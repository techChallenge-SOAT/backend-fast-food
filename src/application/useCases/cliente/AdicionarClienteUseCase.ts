import { ClienteRepository } from '../../../adapters/postgres/cliente/ClienteRepository';

export class AdicionarClienteUseCase {
  static async cpfExiste(cpf: string) {
    const clienteExistente = await ClienteRepository.buscarClientePorCPF(cpf);
    return clienteExistente !== null;
  }

  static async emailExiste(email: string) {
    const clienteExistente = await ClienteRepository.buscarClientePorEmail(email);
    return clienteExistente !== null;
  }

  static async execute(
    id: string,
    cpf: string,
    nome: string,
    email: string,
    senha: string,
  ) {
    try {
      const cpfJaExiste = await this.cpfExiste(cpf);
      const emailJaExiste = await this.emailExiste(email);

      if (cpfJaExiste) {
        throw new Error('CPF já está cadastrado.');
      }

      if (emailJaExiste) {
        throw new Error('Email já está cadastrado.');
      }

      const cliente = await ClienteRepository.adicionarCliente(
        id,
        cpf,
        nome,
        email,
        senha,
      );
      return cliente;
    } catch (error) {
      throw error;
    }
  }
}
