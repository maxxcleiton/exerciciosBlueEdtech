const prompt = require('prompt-sync')();
console.clear();

// Atividade 4
// Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si


let number1 = +prompt("Digite o primeiro número: ");
let number2 = +prompt("Digite o segundo número: ");
let maior = 0;
let menor = 0;

if (number1>number2) {
    maior = number1;
    menor = number2;
    console.log(`O primeiro número é o maior: ${maior}`);
} else if (number2>number1) {
    maior = number2;
    menor = number1;
    console.log(`O segundo número é o maior:  ${maior}`);
}

if (maior % menor == 0) {
    console.log();
    console.log("Eles são múltiplos entre si!");
} else if (maior == menor) {
    console.log();
    console.log("Os números são iguais.")
} else {
    console.log();
    console.log("Eles não são múltiplos entre si!");
}


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/