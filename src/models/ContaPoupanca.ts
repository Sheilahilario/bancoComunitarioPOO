import { ContaBancaria } from './ContaBancaria'

export class ContaPoupanca extends ContaBancaria {
  constructor(numeroConta: number, saldo: number) {
    super(numeroConta, saldo);
  }
}
