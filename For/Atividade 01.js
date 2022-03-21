const prompt = require('prompt-sync')();
console.clear();

// Atividade 1
// Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

let l = []; // Linhas
let c = []; // Colunas

l.push(+prompt('Digite a quantidade de linhas desejada: '));
c.push(+prompt('Digite a quantidade de colunas desejada: '));
for (let i = 0; i < l; i++) {
    console.table(i)
    console.table(l);
}
console.table(l);
console.table(c);

// Mais pra frente termino, nao entendi ainda como fazer a tabela