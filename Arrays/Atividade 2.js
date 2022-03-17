const prompt = require('prompt-sync')();
console.clear()
console.log();

// Atividade 2
// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.

let idade = []; // Arrays principal
let altura = [];

let idadeN = []; // 'N' - Number
let alturaN = [];

let idadeM = 0; // 'M' - Média
let alturaM = 0;

for (let i = 0; i < 5; i++){ // Contador com as perguntas
    idadeN = +prompt('Qual sua idade? ');
    idade.push(idadeN);
    alturaN = +prompt('Qual sua altura? ');
    altura.push(alturaN);
}

console.log(idade, altura)

idadeM = idade[0] + idade[1] + idade[2] + idade [3] + idade[4] / 5

console.log(idadeM)

alturaM = altura[0] + altura[1] + altura[2] + altura[3] + altura[4] / 5

console.log(alturaM)

// O código está pronto, falta perfurmar
// Penso em adicionar um contador nos indices das médias
// altura[i] <- i vai de 0 a i < 5
// assim dispensa tanto código

// Max Cleiton