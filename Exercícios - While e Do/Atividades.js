const prompt = require('prompt-sync')();


console.log();

//

// let numero = 0;

// while (numero < 10) {
//     numero++
//     console.log(numero)
// }



// Atividade 2

// Faça um programa que leia e valide as seguintes informações:
//  Nome: maior que 3 caracteres;
//  Idade: entre 0 e 150;
//  Salário: maior que zero;
//  Estado Civil: 's', 'c', 'v', 'd';

console.clear();

let nome = '';

while (nome.length < 4) {
        nome = prompt('Digite um nome (maior que 3 caracteres): ');
}

// esse codigo aqui nao rolou
// let idade = '';

// while (idade < 0 || idade > 150) {
//         idade = +prompt('Digite sua idade (entre 0 e 150): ');
// }

// já esse rolou:
console.log();

let idade = +prompt('Digite sua idade (entre 0 e 150): ');

while (idade < 0 || idade > 150) {
        idade = +prompt('Digite sua idade (entre 0 e 150): ');
}

console.log();
//


// continuar mais tarde:
// let salario = prompt('Digite seu salário: \n(maior que zero)\n');
// console.log();
// let estCivil = prompt("Estado civil \n(s= solteiro; c= casado, v= viúvo, d= divorciado)");
// console.log();
