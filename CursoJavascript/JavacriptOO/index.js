class Cliente{
    nome; // criando propriedades == criando atributos
    cpf;
};

// criando uma classe == criando um modelo
class ContaCorrente{
    agencia;

    // passando nossa propriedade ou atributo
    // para ser privado usando # ou _ porem _ não 100% privado ainda pode ser manipulada;
    #saldo = 0;

    // criando um método/função
    sacar(valor) {
        if(this.#saldo >= valor) {
            this.#saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.#saldo += valor;
        }
    }
};

// instanciando nosso modelo para uma variavel == criando um Objeto;
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 22233355509;


const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88833355509;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);