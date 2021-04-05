let selecao1=0;
let selecao2=0;
let selecao3=0;


function selecionarprato(classeprato, numero) {
    const selecionado = document.querySelector(".primeira .selecionado"); 
   // procurando o selecionado
    if(selecionado !== null) {
    selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classeprato + "." + numero;
    const pratos = document.querySelector(seletor);
    pratos.classList.add('selecionado');
    selecao1=1;

    verificar()
}

function selecionarbebida(classebebida, numero) {
    const selecionado = document.querySelector(".segunda .selecionado");

    if(selecionado !== null) {
    selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classebebida + "." + numero;
    const bebidas = document.querySelector(seletor);
    bebidas.classList.add('selecionado');
    selecao2=2;
    verificar()
}

function selecionarsobremesa(classesobremesa, numero) {
    const selecionado = document.querySelector(".terceira .selecionado");

    if(selecionado !== null) {
    selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classesobremesa + "." + numero;
    const sobremesas = document.querySelector(seletor);
    sobremesas.classList.add('selecionado'); 
    selecao3=3;
    verificar()
}

 function verificar() {
     
    if (selecao1 !== 0 && selecao2 !== 0 && selecao3 !== 0) {
        const antigo = document.querySelector(".fechamento");
        const final = document.querySelector(".verde");
        antigo.classList.add('escondido');
        final.classList.remove('escondido');
        final.classList.add('mostra');
        

        let prato=document.querySelector(".primeira .selecionado .titulo").innerHTML;
        let drink=document.querySelector(".segunda .selecionado .titulo").innerHTML;
        let doce=document.querySelector(".terceira .selecionado .titulo").innerHTML;
        let precocomida=(document.querySelector(".primeira .selecionado .preco").innerHTML).replace(',','.').replace('R$','')
        let precobebida=(document.querySelector(".segunda .selecionado .preco").innerHTML).replace(',','.').replace('R$','')
        let precosobremesa=(document.querySelector(".terceira .selecionado .preco").innerHTML).replace(',','.').replace('R$','')
        let precototal=parseFloat(precocomida) + parseFloat(precobebida) + parseFloat(precosobremesa);


        const texto = `Olá, gostaria de fazer o pedido:
        - Prato: ${prato}
        - Bebida: ${drink}
        - Sobremesa: ${doce}
          Total: R$ ${precototal.toFixed(2).replace('.',',')}`;
        const textoEncode=encodeURI(texto);
        const link=`https://wa.me/5553991713429?text=${textoEncode}`
        final.innerHTML=`<a href="https://wa.me/5553991713429?text=${textoEncode}">Fechar pedido</a>`
        
    }
 }


