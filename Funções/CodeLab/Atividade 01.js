const prompt = require('prompt-sync')();
console.clear();
console.log();

// Atividade 1 - Aula 12
// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function operacoes(num1, num2){
    console.log(`A soma dos dois valores é: ${num1 + num2}`);
    console.log(`A subtração dos dois valores é: ${num1 - num2}`);
    console.log(`A multiplicação dos dois valores é: ${num1 * num2}`);
    console.log(`A divisão dos dois valores é: ${num1 / num2}`);
}

let n1 = +prompt('Digite o primeiro número: ');
let n2 = +prompt('Digite o segundo número: ');

operacoes(n1,n2);

// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/