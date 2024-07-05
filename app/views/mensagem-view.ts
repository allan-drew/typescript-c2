import { View } from "./view.js";


export class MensagemView extends View<string> {

    // private elemento: HTMLElement;

    // constructor(idHtml: string) {
    //     this.elemento = document.querySelector(idHtml);
    // }

    // implementado template, um método abstract de View
    protected template(model: string): string {
        return `
            <p class="alert alert-info"> ${model} </p>
        `;
    }

    // herdando o update...


}