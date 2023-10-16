import ClienteModel from './ClienteModel';

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
}

export default new ClienteRepository();
