const prompt = require('prompt-sync')();
console.clear();

// Atividade 1

// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

console.log();
let number1 = +prompt('Digite um número: ')
let number2 = +prompt('Digite outro número: ')

if (number1 > number2) {
    console.log();
    console.log("O primeiro número é maior que o segundo.");
} else if (number2 > number1) {
    console.log();
    console.log("O segundo número é maior que o primeiro.");
} else if (number1 == number2) {
    console.log();
    console.log("Os dois números são iguais.");
}


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/
