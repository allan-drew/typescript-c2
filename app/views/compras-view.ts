import { Compras } from "../models/compras.js";
import { View } from "./view.js";

export class ComprasView extends View<Compras> {

    // private elemento: HTMLElement;

    // constructor (idHtml: string) {
    //     this.elemento = document.querySelector(idHtml);
    // }
    

    // implementado template, um método abstract de View.
    // Mantendo protected pois não faz sentido restringir mais o acesso para private.
    protected template(model: Compras): string {       // retornando html a ser renderizado 

        // Template strings are enclosed by backticks ---> ` `
        // A template string (aka template literal) is a way to create strings that allows...
        //      ...for embedded expressions and multiline strings. 
        // Cada negociação vira uma tr com td. 
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr> 
                        <th> DATA </th> 
                        <th> QUANTIDADE </th> 
                        <th> VALOR </th> 
                    </tr>
                </thead>
                <tbody>
                    ${model.listaCompras().map(compra => {
                        return `
                            <tr> 
                                <td>${new Intl.DateTimeFormat('pt-BR').format(compra.data)}</td>
                                <td>${compra.quantidade}</td>
                                <td>${compra.valor}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>

            </table>
        `;
    }


    // herdando o update...


}