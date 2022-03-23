const prompt = require("prompt-sync")();
console.clear();
console.log();

// Atividade 3
// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

let n = 0;
n = +prompt('Digite um número par: ');

while(n % 2 != 0) {
    console.log('O número que digitou foi ímpar.');
    console.log();
    n = +prompt('Digite um número par: ');
}

console.log(`O resultado é um número par: ${n}`);


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/