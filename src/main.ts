import { Cliente } from "./models/Cliente";
import { ClienteService } from "./services/ClienteService";
import { ContaService } from "./services/ContaService";

const clienteService = new ClienteService();
const contaService = new ContaService();

// Criar um cliente
const cliente1 = new Cliente(1, "João Lucas Oliveira", "Rua New York, 106", "123456789", 600);
clienteService.adicionarCliente(cliente1);

// Validar e criar uma conta corrente para o cliente
if (cliente1.salario >= 500) {
  const contaCorrente = contaService.criarContaCorrente(101, 500);
  console.log(`Conta corrente criada com sucesso para ${cliente1.nomeCompleto} com saldo de ${contaCorrente.saldo}`);
} else {
  console.log("Salário insuficiente para criar uma conta corrente.");
}

// Exemplo de depósito
const conta = contaService.obterContaPorNumero(101);
if (conta) {
  conta.depositar(200);
  console.log(`Novo saldo após depósito: ${conta.saldo}`);
}

// Exemplo de saque
if (conta) {
  conta.sacar(100);
  console.log(`Novo saldo após saque: ${conta.saldo}`);
}
