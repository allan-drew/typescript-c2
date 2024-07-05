import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Compra } from "../models/compra.js";
import { Compras } from "../models/compras.js";
import { ComprasView } from "../views/compras-view.js";
import { MensagemView } from "../views/mensagem-view.js";
export class CompraController {
    constructor() {
        this.compras = new Compras();
        this.comprasView = new ComprasView('#comprasView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.comprasView.update(this.compras);
    }
    adicionaCompraContr() {
        const compra = this.criaCompra();
        if (compra.data.getDay() > DiasDaSemana.DOMINGO
            && compra.data.getDay() < DiasDaSemana.SABADO) {
            this.compras.adicionaCompra(compra);
            const comprasList = this.compras.listaCompras();
            console.log(comprasList);
            this.comprasView.update(this.compras);
            this.mensagemView.update('Compra realizada com sucesso!');
            this.limparForm();
        }
        else {
            this.mensagemView.update('COMPRAS DEVEM SER REALIZADAS EM DIA ÚTIL');
        }
    }
    criaCompra() {
        const expReg = /-/g;
        const date = new Date(this.inputData.value.replace(expReg, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Compra(date, quantidade, valor);
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
