import { Cliente } from "./Cliente.js";

// criando uma classe == criando um modelo
export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }


    // passando nossa propriedade ou atributo
    // para ser privado usando # ou _ usando somente dentro da classe criada;
    _saldo = 0;

    get saldo() {
        return this._saldo;
    }


    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
};