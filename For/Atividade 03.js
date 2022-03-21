const prompt = require('prompt-sync')();
console.log();

// Atividade 3
// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

let numero = +prompt('Insira um número: ');

console.log();
console.log(`Tabuada do ${numero}:`);
console.log();

for (let index = 0; index <= 10; index++){
    console.log(`${numero} x ${index} = ${numero * index}`)
};


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/