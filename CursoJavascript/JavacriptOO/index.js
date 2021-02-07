import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretora = new Diretor('Ana', 10000, 12345688890);
diretora.cadastrarSenha('123456');

const gerente = new Gerente('Rodrigo', 5000, 32845642890);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Sarah', 12378945622, "877");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const diretoraEstaLogado = SistemaAutenticacao.login(diretora, '123456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '877');

console.log(gerenteEstaLogado, diretoraEstaLogado, clienteEstaLogado);





















// assessores não são métodos, assessores são publicos (get e set);
// null = alguem colocou diretamente esse valor vazio;
// undefined = alguem esqueceu de defini algum valor a variavel;

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);

// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);