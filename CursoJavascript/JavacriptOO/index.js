import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// instanciando nosso modelo para uma variavel == criando um Objeto;
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 22233355509;


// const cliente2 = new Cliente();
// cliente2.nome = 'Alice';
// cliente2.cpf = 88833355509;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = 'Alice';
conta2.cliente.cpf = 88833355509
conta2.agencia = 1002;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2);


// null = alguem colocou diretamente esse valor vazio;
// undefined = alguem esqueceu de defini algum valor a variavel;

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);

// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);