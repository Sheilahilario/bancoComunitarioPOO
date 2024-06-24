import { ClienteInterface } from "../interfaces/ClienteInterface";
export class Cliente implements ClienteInterface {
  constructor(
    public id: number,
    public nomeCompleto: string,
    public endereco: string,
    public telefone: string,
    public salario: number
  ) { }
}
