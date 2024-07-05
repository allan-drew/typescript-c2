
export abstract class View<T> {

    // usando protected para permitir ComprasView e MensagemView acessarem o atributo elemento.
    protected elemento: HTMLElement;

    constructor (idHtml: string) {
        const elm = document.querySelector(idHtml);
        if (elm) {
            this.elemento = elm as HTMLElement;
        } else {
            throw Error('Erro! idHTML (seletor) não existe no DOM!')
        }
    }

    protected abstract template(model: T): string; // método protected para o dev não ter acesso direto ao método template no controller. 
                                                // E tbm para as views filhas ainda terem acesso para implementar o template (não pode ser private)

    // renderiza na tela o template no elemento capturado pelo querySelector no constructor!
                // A view precisa receber os dados do modelo para poder renderizar 
    public update(model: T): void {
        const template = this.template(model);
        // definindo o conteúdo HTML dentro do elemento. 
        this.elemento.innerHTML = template;
                // innerHTML recebe algo que é convertido para elementos do DOM.
    }

}