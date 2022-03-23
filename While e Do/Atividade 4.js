const prompt = require("prompt-sync")();
console.clear();
console.log();

// Atividade 4
// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve se repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.

let c = Math.floor(Math.random()*10);
let n = 0;
let palpites = 0;

console.log(c);

console.log('Jogo da adivinhação!\nAdivinhe qual número o computador escolheu!')
console.log();

while (c != n) {
n = +prompt('Digite um número (de 1 a 10): ');

if (n > c) {
    console.log('-----------');
    console.log('O número é maior que o palpite do computador.');
    palpites++
} else if (n < c) {
    console.log('-----------');
    console.log('O número é menor que o palpite do computador.');

    palpites++
} else { 
    console.log('-----------');
    console.log(`Parabéns! você achou o número!\nQuantidade de tentativas: ${palpites}`);
    break
}

if (n < 1 || n > 10) {
    console.log();
    console.log('Escolhe um número de 1 A 10!')
    console.log();
}

console.log();

}

// Concluído, só resto decorar melhor

// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/