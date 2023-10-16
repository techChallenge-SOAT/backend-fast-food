import ClienteModel from './ClienteModel'; // Importa o modelo do Cliente

class ClienteRepository {
  public async adicionarCliente(clienteData: {
    cpf: string;
    nome: string;
    email: string;
    senha: string;
  }) {
    return ClienteModel.create(clienteData);
  }

  public async buscarClientePorCPF(cpf: string) {
    return ClienteModel.findByPk(cpf);
  }

  public async buscarClientePorEmail(email: string) {
    return ClienteModel.findOne({
      where: {
        email,
      },
    });
  }

  public async atualizarCliente(cpf: string, dadosAtualizados: {
    nome?: string;
    email?: string;
    senha?: string;
  }) {
    const cliente = await ClienteModel.findByPk(cpf);

    if (cliente) {
      if (dadosAtualizados.nome) cliente.nome = dadosAtualizados.nome;
      if (dadosAtualizados.email) cliente.email = dadosAtualizados.email;
      if (dadosAtualizados.senha) cliente.senha = dadosAtualizados.senha;

      return cliente.save();
    }

    return null;
  }

  public async removerCliente(cpf: string) {
    const cliente = await ClienteModel.findByPk(cpf);

    if (cliente) {
      return cliente.destroy();
    }

    return null;
  }
}

export default new ClienteRepository();
