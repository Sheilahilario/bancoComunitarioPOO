import { Cliente } from "./models/Cliente";
import { ClienteService } from "./services/ClienteService";
import { ContaService } from "./services/ContaService";

const clienteService = new ClienteService();
const contaService = new ContaService();

// Criar clientes
const cliente1 = new Cliente(1, "João Lucas Oliveira", "Rua New York, 106", "123456789", 600);
clienteService.adicionarCliente(cliente1);

const cliente2 = new Cliente(2, "Sheila de Oliveira", "Av. Brasil, 200", "987654321", 900);
clienteService.adicionarCliente(cliente2);

// Valida e cria contas correntes para os clientes
if (cliente1.salario >= 500) {
  const contaCorrente1 = contaService.criarContaCorrente(101, 900);
  console.log(`Conta corrente criada com sucesso para ${cliente1.nomeCompleto} com saldo de ${contaCorrente1.saldo}`);
} else {
  console.log("Salário insuficiente para criar uma conta corrente para João Lucas Oliveira.");
}

if (cliente2.salario >= 500) {
  const contaCorrente2 = contaService.criarContaCorrente(102, 400);
  console.log(`Conta corrente criada com sucesso para ${cliente2.nomeCompleto} com saldo de ${contaCorrente2.saldo}`);
} else {
  console.log("Salário insuficiente para criar uma conta corrente para Sheila de Oliveira.");
}

// Exemplo de depósito
const conta1 = contaService.obterContaPorNumero(101);
if (conta1) {
  conta1.depositar(200);
  console.log(`Novo saldo da conta 101 após depósito: ${conta1.saldo}`);
}

// Exemplo de saque
if (conta1) {
  conta1.sacar(100);
  console.log(`Novo saldo da conta 101 após saque: ${conta1.saldo}`);
}

// Exemplo de transferência
const conta2 = contaService.obterContaPorNumero(102);
if (conta1 && conta2) {
  const sucesso = contaService.transferir(101, 102, 50);
  if (sucesso) {
    console.log(`Transferência realizada com sucesso! Novo saldo da conta 101: ${conta1.saldo}, novo saldo da conta 102: ${conta2.saldo}`);
  } else {
    console.log("Transferência falhou. Verifique os saldos e as contas de origem e destino.");
  }
}
