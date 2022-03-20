const prompt = require('prompt-sync')();
console.clear()
console.log();

// Atividade 3
// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

// Quantidade de alunos
+prompt('Escolha a quantidade de alunos: '); //Tem que dar um numero que será o numero de repetição dos seguintes:

+prompt('Qual o nome do aluno? ');
+prompt('Qual a nota do aluno?');

let qt = 0; // Quantidade de alunos
let nm = []; // Nome do aluno
let nt = []; // Nota do aluno

console.log(); // Nome e a nota de cada aluno
console.log('A média total das notas dos alunos é: '); // Média total das notas