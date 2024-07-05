import { CompraController } from "./controllers/compra-controller.js";
const compraController = new CompraController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        compraController.adicionaCompraContr();
    });
}
else {
    throw Error('ERRO!! Verifique a existência do form no index para o seletor passado para o querySelector');
}
