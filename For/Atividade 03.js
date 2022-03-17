const prompt = require('prompt-sync')();
console.log();

// Atividade 3
// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

let numero = +prompt('Insira um número: ');
for (let index = 0; index <= 10; index++){
    console.log(numero * index)
};