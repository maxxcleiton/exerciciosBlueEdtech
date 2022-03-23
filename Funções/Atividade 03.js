const prompt = require('prompt-sync')();
console.log();

// Atividade 3 - Aula 12

// // -- PRIMEIRA VEZ QUE FIZ:
// Exercício – Treino: Faça um programa que tenha uma função chamada area(), que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.

// function area(n1, n2) { // Aqui crio a função, com os parâmetros para altura e largura (decididos mais à frente)
//     let area1 = n1 * n2; // Altura vezes largura resulta na área do retângulo
//     return area1
// }

// n1 = +prompt('Qual o comprimento do terreno? (em cm)');
// n2 = +prompt('Qual a largura do terreno? (em cm)');

// console.log(`A área do terreno retangular é: ${area(n1, n2)}cm²`);

// // -- UTILIZANDO DO RETURN, CONSEGUI RESUMIR MAIS AINDA:
// function area(n1, n2) { // Aqui crio a função, com os parâmetros para altura e largura (decididos mais à frente)
//     return area1 = n1 * n2; // Altura vezes largura resulta na área do retângulo
// }

// ARROW FUNCTION
let calcularArea = (n1, n2) => n1 * n2

n1 = +prompt('Qual o comprimento do terreno? (em cm)');
n2 = +prompt('Qual a largura do terreno? (em cm)');

console.log(`A área do terreno retangular é: ${calcularArea(n1, n2)}cm²`);

// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/