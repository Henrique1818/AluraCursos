// criando uma classe == criando um modelo
export class ContaCorrente{
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