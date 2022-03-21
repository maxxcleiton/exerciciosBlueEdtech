const prompt = require('prompt-sync')();
console.clear()
console.log();

// Atividade 3
// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

let qt = 0; // Quantidade de alunos
let nm = []; // Nome do aluno
let nms = '' // String do nome
let nt = []; // Nota do aluno

// Quantidade de alunos
qt = +prompt('Escolha a quantidade de alunos: '); // Tem que dar um numero que será o numero de repetição dos seguintes:
console.log();

for (let i = 0; i < qt; i++) { // Repetição das perguntas
    nm.push(prompt('Qual o nome do aluno? '));
    nt.push(+prompt('Qual a nota do aluno? '));
    console.log();
}
console.log('---------------');
for (let i = 0; i < qt; i++) { // Repetição do índice da quantidade das arrays nm e nt
    console.log(`Aluno: ${nm[i]}\nNota: ${nt[i]}`);
    console.log();
    }

let soma = 0;
for (let sm of nt) { // Vai retornar todos os elementos somando cada um com 0, totalizando a soma de todos
    soma = soma + sm // Soma é o total das notas
}
console.log('---------------');
console.log('A média total das notas dos alunos é: ', (soma / qt)); // Média, utilizando as arrays que viraram uma soma usando for of, dividido pela quantidade de alunos (qt)

// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/