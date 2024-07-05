import { Compra } from "./compra.js";

export class Compras { 

    // TS tem suporte a Generics
    private compras: Array<Compra> = []; // guarda uma lista de Compras num array

    public adicionaCompra (compra: Compra) {
        this.compras.push(compra); // adicionando o parametro recebido no array
    }

    // o método retorna uma lista (Array) de objetos do tipo Compra
    public listaCompras(): ReadonlyArray<Compra> {
        return this.compras; // retornando o array
    }

}


// const list = [];
