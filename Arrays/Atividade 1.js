const prompt = require('prompt-sync')();
console.clear()
console.log();

// Atividade 1
// Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.

let num = []; // Declarando uma array vazia
let numPar = [];
let numImpar = [];
let numero = 0;

while (num.length < 20) {
    numero = parseInt(+prompt('Digite um número: '));
    num.push(numero);
    if (numero % 2 == 0){
        console.log('Virou par');
        numPar.push(numero);
        console.log();
    } else {
        console.log('Virou impar');
        numImpar.push(numero);
        console.log();
    }
}

console.log();
console.log(`Todos os números: ${num}`);
console.log();
console.log(`Números pares: ${numPar}`);
console.log();
console.log(`Números ímpares: ${numImpar}`);
console.log();

// Max Cleiton