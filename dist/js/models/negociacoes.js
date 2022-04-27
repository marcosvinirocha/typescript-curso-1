export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //nao modifica o array
    //lista(): ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
