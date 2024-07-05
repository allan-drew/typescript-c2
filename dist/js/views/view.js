export class View {
    constructor(idHtml) {
        const elm = document.querySelector(idHtml);
        if (elm) {
            this.elemento = elm;
        }
        else {
            throw Error('Erro! idHTML (seletor) não existe no DOM!');
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
