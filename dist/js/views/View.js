export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        // T é o tipo do modelo que será passado para a view
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
