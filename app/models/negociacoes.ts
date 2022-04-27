import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }
  //nao modifica o array
  //lista(): ReadonlyArray<Negociacao>

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
