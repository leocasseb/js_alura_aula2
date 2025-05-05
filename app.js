let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
let maxTentativas = -1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100 e tente adivinhar o número secreto!');

function numeroTentativas() {
    maxTentativas = maxTentativas + parseInt(document.querySelector('.container__input').value);
    document.querySelector('.container__input').value = '';
    exibirTextoNaTela('#contadorTentativas', 'Você tem ' + (maxTentativas + 1 - tentativas) + ' tentativas!');
    document.querySelector('#reiniciar').hidden = false;
    document.querySelector('#chutar').hidden = false;
    document.querySelector('#chances').hidden = true;
}

function verificarChute() {
    tentativas++;
    if (tentativas > maxTentativas) {
        exibirTextoNaTela('h1', 'Você perdeu! O número secreto era ' + numeroSecreto + '!');
        exibirTextoNaTela('p', 'Tente novamente!');
        return;
    };

    exibirTextoNaTela('#contadorTentativas', 'Você tem ' + (maxTentativas + 1 - tentativas) + ' tentativas!');

    let chute = document.querySelector('.container__input').value;
    document.querySelector('.container__input').value = '';

    if (chute == numeroSecreto) {
        exibirTextoNaTela('#contadorTentativas', 'Sobraram ' + (maxTentativas + 1 - tentativas) + ' tentativas!');
        document.querySelector('#chutar').hidden = true;
        if (tentativas == 1) {
            exibirTextoNaTela('h1', 'Parabéns! Você acertou de primeira! O número secreto era ' + numeroSecreto + '!');
        } else{
        exibirTextoNaTela('h1', 'Você acertou em ' + tentativas +' tentativas! O número secreto era ' + numeroSecreto + '!');
        }
        exibirTextoNaTela('p', 'Você Descobriu o número secreto!');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute + '! Tente novamente!');
        } else {
            if (chute < numeroSecreto){
                exibirTextoNaTela('p', 'O número secreto é maior que ' + chute + '! Tente novamente!');
            };
        };
    };
};

function novoJogo() {
    exibirTextoNaTela('#contadorTentativas', '');

    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10 e tente adivinhar o número secreto!');
    document.querySelector('input').value = '';
    tentativas = 0;
    maxTentativas = -1;
    document.querySelector('#reiniciar').hidden = true;
    document.querySelector('#chutar').hidden = true;
    document.querySelector('#chances').hidden = false;
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1)
};