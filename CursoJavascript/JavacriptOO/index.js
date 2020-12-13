class Cliente{
    nome; // criando propriedades == criando atributos
    cpf;
};

// criando uma classe == criando um modelo
class ContaCorrente{
    agencia;

    // passando nossa propriedade ou atributo
    // para ser privado usando # ou _ usando somente dentro da classe criada;
    _saldo = 0;

    // criando um método/função
    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;

            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) return;

        this._saldo += valor;
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

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);