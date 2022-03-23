const prompt = require('prompt-sync')();
console.clear();

// Atividade 2
// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.


let nota1 = +prompt("Digite a nota 1: ");
let nota2 = +prompt("Digite a nota 2: ");
let nota3 = +prompt("Digite a nota 3: ");
let nota4 = +prompt("Digite a nota 4: ");

let media = nota1 + nota2 + nota3 + nota4 / 4;

console.log(`A média do aluno ficou em ${media}`);

if (media >= 7) {
    console.log('Aprovado')
} else if (media > 5 && media < 7){
    console.log('Em recuperaçao')
} else if (media < 5) {
    console.log('Reprovado')
}


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/
