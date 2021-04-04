
function selecionarprato(classeprato, numero) {
    const selecionado = document.querySelector(".primeira .selecionado");

    if(selecionado !== null) {
    selecionado.classList.remove('selecionado');

    }

    const seletor = "." + classeprato + "." + numero;
    const pratos = document.querySelector(seletor);
    pratos.classList.add('selecionado');
}

function selecionarbebida(classebebida, numero) {
    const selecionado = document.querySelector(".segunda .selecionado");

    if(selecionado !== null) {
    selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classebebida + "." + numero;
    const bebidas = document.querySelector(seletor);
    bebidas.classList.add('selecionado');

}

function selecionarsobremesa(classesobremesa, numero) {
    const selecionado = document.querySelector(".terceira .selecionado");

    if(selecionado !== null) {
    selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classesobremesa + "." + numero;
    const sobremesas = document.querySelector(seletor);
    sobremesas.classList.add('selecionado'); 

}



