import { View } from "./view.js";
export class ComprasView extends View {
    template(model) {
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
}
