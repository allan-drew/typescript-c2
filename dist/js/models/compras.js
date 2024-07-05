export class Compras {
    constructor() {
        this.compras = [];
    }
    adicionaCompra(compra) {
        this.compras.push(compra);
    }
    listaCompras() {
        return this.compras;
    }
}
