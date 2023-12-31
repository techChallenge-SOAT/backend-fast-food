import { v4 as uuidv4 } from 'uuid';

export default class Cliente {
  id: string;
  cpf: string;
  nome: string;
  email: string;
  senha: string;
  
  constructor(
    cpf: string,
    nome: string,
    email: string,
    senha: string) {
      this.id = uuidv4();
      this.cpf = cpf;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }
}
