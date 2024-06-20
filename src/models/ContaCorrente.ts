// src/models/ContaCorrente.ts
import { ContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {
  limiteChequeEspecial: number = 100.00;
  saldo: number | any;

  constructor(numeroConta: number, saldo: number) {
    super(numeroConta, saldo);
  }

  sacar(valor: number): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
    } else {
      throw new Error("Saldo insuficiente, mesmo considerando o cheque especial.");
    }
  }
}
