const prompt = require("prompt-sync")();
console.clear();
console.log();

// Atividade 2
// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

let n = ""; // Nome
let i = 0; // Idade
let s = 0; // Salário
let ec = ""; // Estado civil

n = prompt("Digite um nome (maior que 3 caracteres): ");
while (n.length < 4) {
  console.log("O nome deve ser maior que 3 caracteres, insira novamente.");
  console.log();
  n = prompt("Digite um nome (maior que 3 caracteres): ");
  console.log();
}

i = +prompt("Digite sua idade: ");
while (i < 0 || i > 150) {
  console.log("A idade deve ser entre 0 e 150, insira novamente.");
  i = +prompt("Digite sua idade: ");
}

s = +prompt("Insira seu salário: ");
while (s < 0) {
  console.log("Insira um número maior que zero.");
  s = +prompt("Insira seu salário: ");
}

ec = prompt(
  "Qual é o seu estado civil?\n(s= solteiro; c= casado, v= viúvo, d= divorciado): "
).toLowerCase();
console.log();
while (ec !== "s" && ec !== "c" && ec !== "v" && ec !== "d") {
  console.log("Digitaste errado, digite a letra correspondente:");
  ec = +prompt("Qual é o seu estado civil?\n(s= solteiro; c= casado, v= viúvo, d= divorciado): ");
}

console.log(`Seus dados: `);
console.log();
console.log(`Seu nome é ${n}.`);
console.log(`Você tem ${i} anos.`);
console.log(`Seu salário hoje é de ${s}R$.`);

if (ec == 's') {
        console.log(`Você atualmente está solteiro.`)
} else if (ec == 'c') {
        console.log(`Você atualmente está casado.`)
} else if (ec == 'v') {
        console.log(`Você atualmente é viúvo.`)
} else if (ec == 'd') {
        console.log(`Você atualmente está divorciado.`)
}
console.log();

// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/