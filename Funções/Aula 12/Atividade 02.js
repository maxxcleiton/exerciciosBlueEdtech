const prompt = require('prompt-sync')();
console.log();

// Atividade 2 - Aula 12
// Exercício – Treino:  Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.

function d (x) { // Parâmetro x
    if (x % 3 == 0){
        console.log('true');
    } else {
        console.log('false');
    }
}

x = prompt('Digite o numero inteiro: '); // Aqui puxa o número escolhido pelo usuário
d(x); // Aqui puxa a função aplicando o número escolhido pelo usuário


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/