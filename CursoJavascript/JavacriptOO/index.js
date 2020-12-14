import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// instanciando nosso modelo para uma variavel == criando um Objeto;
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 22233355509;


const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88833355509;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);