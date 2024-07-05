import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Compra } from "../models/compra.js";
import { Compras } from "../models/compras.js";
import { ComprasView } from "../views/compras-view.js";
import { MensagemView } from "../views/mensagem-view.js";

export class CompraController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    private compras: Compras = new Compras();

    // o conctrutor de comprasView espera um id do HTML
    private comprasView = new ComprasView('#comprasView');

    // o constructor de mensagemView espera um id do HTML no qual será mostrada a mensagem
    private mensagemView = new MensagemView('#mensagemView');

    // Ao criarmos uma instancia de CompraController, o constructor será executado, com isso
    // o querySelector vai no DOM pegar os id (data, quantidade e valor) e atribuir 
    // para os inputs dessa classe.
    constructor() {
        // pegando os id do index.html com o querySelector 
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;

        // Fazendo a view renderizar ao iniciar a instancia de CompraController.
        // Aqui, não há itens na lista. Portanto, renderiza apenas o cabeçalho com data, quantidade e valor
        this.comprasView.update(this.compras);
    }

    public adicionaCompraContr(): void {
        const compra: Compra = this.criaCompra(); // o método criaCompra() retorna uma Compra. 
                                                // Estamos atribuindo essa compra retornada para compra: Compra
        // compra.data.setDate(30); // essa operação com o getter de data não pode ocorrer. 
                                // Para resolver, use programação defensiva! (Ver get data())

        // atendendo regra de negócio de proibição de compra em final de semana:
        if(compra.data.getDay() > DiasDaSemana.DOMINGO 
            && compra.data.getDay() < DiasDaSemana.SABADO) {

            this.compras.adicionaCompra(compra); 

            const comprasList = this.compras.listaCompras();
            // comprasList.push(); // o retorno de listaCompras() é um Array READ ONLY
            console.log(comprasList);
    
            // Fazendo a COMPRAS view atualizar após adicionar dados de compra.
            this.comprasView.update(this.compras);
    
            // Fazer a MENSAGEM View atualizar após adicionar dados de compra.
            this.mensagemView.update('Compra realizada com sucesso!');
    
            this.limparForm();
        } else {
            this.mensagemView.update('COMPRAS DEVEM SER REALIZADAS EM DIA ÚTIL')
        }

    }

    private criaCompra(): Compra {
        const expReg: RegExp = /-/g; // encontrar todos os hífens (-) em uma string.
        const date = new Date(this.inputData.value.replace(expReg, ',')); // substituindo os - por , para passar pro Date
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value);

        return new Compra(date, quantidade, valor);
    }

    private limparForm (): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); // colocando foco no campo da data após limpar os values
    }


}