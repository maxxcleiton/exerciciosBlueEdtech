const prompt = require('prompt-sync')();
console.clear();
console.log();

// Atividade 1 - Aula 11
// Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

const valores = {
    valorUm: 0,
    valorDois: 0,
    operador: '',
    funcao: function(x,y,z) {
        if (z == '+') {
            let r = x + y;
            return r;
        }
         else if (z == '-'){
            let r = x - y;
            return r;
        }
         else if (z == '/'){
            let r = x / y;
            return r;
        }
         else if (z == '*'){
            let r = x * y;
            return r;
         }
     },
}

valores.valorUm = +prompt('Digite o primeiro valor: ');
valores.valorDois = +prompt('Digite o segundo valor: ');
valores.operador = prompt('Digite o operador desejado (+, -, *, /): ');

console.log(`O resultado ficou em: `,(valores.funcao(valores.valorUm,valores.valorDois,valores.operador)));

// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/