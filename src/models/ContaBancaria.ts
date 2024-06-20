import { ContaBancariaInterface } from "../interfaces/ContaBancariaInterface";

export abstract class ContaBancaria implements ContaBancariaInterface {
  constructor(
    public numeroConta: number,
    public saldo: number
  ) { }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      throw new Error("Saldo insuficiente.");
    }
  }

  transferir(paraConta: ContaBancariaInterface, valor: number): void {
    this.sacar(valor);
    paraConta.depositar(valor);
  }
}
