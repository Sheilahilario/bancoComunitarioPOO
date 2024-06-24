export interface ContaBancariaInterface {
  numeroConta: number;
  saldo: number;
  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(paraConta: ContaBancariaInterface, valor: number): void;

}
