const prompt = require('prompt-sync')();
console.clear()
console.log();

// Atividade 2
// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.

let idade = []
let altura = []
let contador = 0;
let i = 0;

do {
    i = +prompt('Qual sua idade: ');
    idade.push(i);
    console.log(i);
    console.log(idade);
    contador++
} while (contador < 5)

console.log();
console.log(idade);

// Saindo como undefined, preciso resolver