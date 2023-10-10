export default class Cliente {
  cpf: string;
  nome: string;
  email: string;
  senha: string;
  constructor(cpf: string, nome: string, email: string, senha: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  // Métodos relacionados ao modelo de cliente
}
