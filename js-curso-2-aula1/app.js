let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let contadorTentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acerto!');

        let palavraTentativa = contadorTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${contadorTentativas} ${palavraTentativa}.`;

        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disable');

    } else if (chute > numeroSecreto) {
        exibirTexto('p', 'O número secreto é menor');
        contadorTentativas++;
        limparCampo();

    } else {
        exibirTexto('p', 'O número secreto é maior');
        contadorTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }  

    // Outra forma de fazer isso 
/* if (listaNumerosSorteados.length == numeroLimite) {
        listaNumerosSorteados = [];
    }

    let numeroEscolhido;
    do {
        numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    } while (listaNumerosSorteados.includes(numeroEscolhido));

    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido; */
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    contadorTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true);
}
