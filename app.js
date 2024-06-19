alert('Olá Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let numeroEscolhido;
let contadorTentativas = 1;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt('Escolha um número entre 1 e 30');

    if (numeroSecreto == numeroEscolhido) {
        break;
    } else {
        if (numeroEscolhido > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroEscolhido}`);
        } else {
            alert(`O número secreto é maior que ${numeroEscolhido}`);
        }
    }
    contadorTentativas++;
}

let stringTentativa = contadorTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto: ${numeroSecreto} com ${contadorTentativas} ${stringTentativa}`);