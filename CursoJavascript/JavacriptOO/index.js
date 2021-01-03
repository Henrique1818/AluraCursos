import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente('Ricardo', 22233355509);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);






















// assessores não são métodos, assessores são publicos (get e set);
// null = alguem colocou diretamente esse valor vazio;
// undefined = alguem esqueceu de defini algum valor a variavel;

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);

// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);