const prompt = require('prompt-sync')();
console.clear();

// Atividade 1

// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

let number1 = +prompt('Digite um numero ')
let number2 = +prompt('Digite outro numero ')

if (number1 > number2) {
    console.log("O numero 1 é maior que o 2");
} else if (number2 > number1) {
    console.log("O numero 2 é maior que o 1");
} else if (number1 == number2) {
    console.log("Os dois números são iguais");
}
