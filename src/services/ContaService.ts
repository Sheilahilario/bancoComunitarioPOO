import { ContaBancaria } from "../models/ContaBancaria";
import { ContaCorrente } from "../models/ContaCorrente";
import { ContaPoupanca } from "../models/ContaPoupanca";

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

  transferir(numeroContaOrigem: number, numeroContaDestino: number, valor: number): boolean {
    const contaOrigem = this.obterContaPorNumero(numeroContaOrigem);
    const contaDestino = this.obterContaPorNumero(numeroContaDestino);

    if (!contaOrigem) {
      console.log(`Conta de origem ${numeroContaOrigem} não encontrada.`);
      return false;
    }

    if (!contaDestino) {
      console.log(`Conta de destino ${numeroContaDestino} não encontrada.`);
      return false;
    }

    if (contaOrigem.sacar(valor)) {
      console.log(`Falha ao sacar ${valor} da conta de origem ${numeroContaOrigem}. Saldo insuficiente.`);
      return false;
    }

    contaDestino.depositar(valor);
    console.log(`Transferência de ${valor} de ${numeroContaOrigem} para ${numeroContaDestino} realizada com sucesso.`);
    return true;
  }
}
