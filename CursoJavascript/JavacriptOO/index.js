import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// instanciando nosso modelo para uma variavel == criando um Objeto;
const cliente1 = new Cliente('Ricardo', 22233355509);

const cliente2 = new Cliente('Alice', 88833355509);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2);



// assessores não são métodos, assessores são publicos (get e set);
// null = alguem colocou diretamente esse valor vazio;
// undefined = alguem esqueceu de defini algum valor a variavel;

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);

// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);