import { Cliente } from "../models/Cliente";

export class ClienteService {
  private clientes: Cliente[] = [];

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  obterClientePorId(id: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }
}
