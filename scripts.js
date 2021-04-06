let selecao1 = 0;
let selecao2 = 0;
let selecao3 = 0;
let pratoselecionado;
let bebidaselecionada;
let sobremesaselecionada;
let prato;
let drink;
let doce;
let precototal
let endereco;
let nome;
let total;

function selecionarprato(classeprato, numero) {
    const selecionado = document.querySelector(".primeira .selecionado");
    // procurando o selecionado
    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classeprato + "." + numero;
    const pratos = document.querySelector(seletor);
    pratos.classList.add('selecionado');

    const pratoselect = document.querySelector(".primeira .selecionado .titulo");
    pratoselecionado = pratoselect.innerHTML;

    selecao1 = 1;
    verificar()
}

function selecionarbebida(classebebida, numero) {
    const selecionado = document.querySelector(".segunda .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classebebida + "." + numero;
    const bebidas = document.querySelector(seletor);
    bebidas.classList.add('selecionado');

    const bebidaselect = document.querySelector(".segunda .selecionado .titulo");
    bebidaselecionada = bebidaselect.innerHTML;

    selecao2 = 2;
    verificar()
}

function selecionarsobremesa(classesobremesa, numero) {
    const selecionado = document.querySelector(".terceira .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classesobremesa + "." + numero;
    const sobremesas = document.querySelector(seletor);
    sobremesas.classList.add('selecionado');

    const sobremesaselect = document.querySelector(".terceira .selecionado .titulo");
    sobremesaselecionada = sobremesaselect.innerHTML;

    selecao3 = 3;
    verificar()
}

function verificar() {

    if (selecao1 !== 0 && selecao2 !== 0 && selecao3 !== 0) {
        const antigo = document.querySelector(".fechamento");
        const final = document.querySelector(".verde");
        antigo.classList.add('escondido');
        final.classList.remove('escondido');
        final.classList.add('mostra');
    }
}

function botaoverde() {
    endereco = prompt("Qual o seu endereço?");
    nome = prompt("Qual o seu nome?");

    const tela = document.querySelector(".mascara");
    tela.classList.remove('escondido');

    

    prato = document.querySelector(".primeira .selecionado .titulo").innerHTML;
    drink = document.querySelector(".segunda .selecionado .titulo").innerHTML;
    doce = document.querySelector(".terceira .selecionado .titulo").innerHTML;
    precocomida = (document.querySelector(".primeira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precobebida = (document.querySelector(".segunda .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precosobremesa = (document.querySelector(".terceira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precototal = parseFloat(precocomida) + parseFloat(precobebida) + parseFloat(precosobremesa);

    const total = document.querySelector(".mascara .caixa-confirmacao .descricao .total");
    total.innerHTML = precototal.toFixed(2).replace('.', ',').replace('', 'R$ ');

    const telaprecoprato = document.querySelector(".mascara .caixa-confirmacao .descricao .valorp");
    telaprecoprato.innerHTML = precocomida.replace('.', ',').replace('', 'R$');

    const telaprecobebida = document.querySelector(".mascara .caixa-confirmacao .descricao .valorb");
    telaprecobebida.innerHTML = precobebida.replace('.', ',').replace('', 'R$');
   
    const telaprecosobremesa = document.querySelector(".mascara .caixa-confirmacao .descricao .valors");
    telaprecosobremesa.innerHTML = precosobremesa.replace('.', ',').replace('', 'R$');

    const telanomeprato = document.querySelector(".mascara .caixa-confirmacao .descricao .pratoselecionado");
    telanomeprato.innerHTML = pratoselecionado;

    const telanomebebida = document.querySelector(".mascara .caixa-confirmacao .descricao .bebidaselecionada");
    telanomebebida.innerHTML = bebidaselecionada;

    const telanomesobremesa = document.querySelector(".mascara .caixa-confirmacao .descricao .sobremesaselecionada");
    telanomesobremesa.innerHTML = sobremesaselecionada;
}

function wpp() {

    const texto = `Olá, gostaria de fazer o pedido:\n
        - Prato: ${prato}\n
        - Bebida: ${drink}\n
        - Sobremesa: ${doce}\n
          Total: R$ ${precototal.toFixed(2).replace('.',',')}\n
          
        - Endereço: ${endereco}\n
        - Nome: ${nome}`;
    const textoEncode = encodeURI(texto);
    const link = `https://wa.me/5553991713429?text=${textoEncode}`
    window.location.href = `https://wa.me/5553991713429?text=${textoEncode}`;
}

function cancelar(){
    const cancelar = document.querySelector(".mascara");
    cancelar.classList.add('escondido');
}
