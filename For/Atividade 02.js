const prompt = require('prompt-sync')();
console.clear();

// Atividade 2
// Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

let n = 0;

n = +prompt('Digite um número: ');

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

console.log(factorialize(n))