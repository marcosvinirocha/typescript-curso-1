export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não encontrado`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: T): void {
    // T é o tipo do modelo que será passado para a view
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.elemento.innerHTML = template;
  }
  protected abstract template(model: T): string;
}
