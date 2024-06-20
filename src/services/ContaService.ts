import { ContaBancaria } from "../models/ContaBancaria";
import { ContaCorrente } from "../models/ContaCorrente";
import { ContaPoupanca } from "../models/ContaPoupança";

export class ContaService {
  private contas: ContaBancaria[] = [];

  criarContaCorrente(numeroConta: number, depositoInicial: number): ContaCorrente {
    const conta = new ContaCorrente(numeroConta, depositoInicial);
    this.contas.push(conta);
    return conta;
  }

  criarContaPoupanca(numeroConta: number, depositoInicial: number): ContaPoupanca {
    const conta = new ContaPoupanca(numeroConta, depositoInicial);
    this.contas.push(conta);
    return conta;
  }

  obterContaPorNumero(numeroConta: number): ContaBancaria | undefined {
    return this.contas.find(conta => conta.numeroConta === numeroConta);
  }
}
