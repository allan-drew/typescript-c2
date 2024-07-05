
import { CompraController } from "./controllers/compra-controller.js";
import { View } from "./views/view.js"; // importado para visualizar o erro de não instanciação direta de View!

// instanciando o controller compraController quando o app iniciar. 
const compraController = new CompraController();

// pegando o formulário no DOM
const form = document.querySelector('.form');

// O form sendo um Element, tem o método addEventListener.
// Portanto, teremos um Listener (ouvinte) para o evento de submit (submissão do Form)
// The callback argument sets the callback that will be invoked when the event is dispatched.

if(form) { // testando se o form existe (não é null). Ou seja, tratando o possível null
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Previne o comportamento padrão do evento de submit. 
                                // Ou seja, os inputs serão imprimidos no console ao dar submit, 
                                // mas o navegador não vai recarregar a página novamente!
    
                                // Isso é útil quando você deseja manipular os dados do formulário de maneira personalizada, 
                                // como envio assíncrono (AJAX) ou validação no lado do cliente.
        // compraController.imprimeInputs();
        compraController.adicionaCompraContr(); // executar o método ao dar submit
    
    });
} else {
    throw Error('ERRO!! Verifique a existência do form no index para o seletor passado para o querySelector')
}



// ---------ERRO devido View ser abstract. 
//          Não faz sentido criar instancias de View diretamente! (abstract class)
// const view = new View('#algumSeletorView');





