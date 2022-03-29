const prompt = require('prompt-sync')();
console.log();

// Atividade 1
// Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.

const pessoa = {
    nome: '',                    
    idade: 0,
    peso: 0,
    altura: 0,
    
    envelhecer: function(){
        this.idade++
    },
    engordar: function(){
        this.peso++
    },
    // emagrecer: 
    // function(quilos){
    //     let pesoperdido = pessoa.peso - quilos
    //     console.log(`A pessoa emagreceu ${pessoa.peso} quilos`)
    //     return pesoperdido
    // },
    // crescer: function(){
        
    // },
}

pessoa.nome = prompt('Digite o nome de uma pessoa: ');
pessoa.idade = +prompt('Digite a idade dela: ');
pessoa.peso = +prompt('Peso também (em kg): ');
pessoa.altura = +prompt('E por fim, a altura (em cm): ');

console.log(`Essa pessoa chamada ${pessoa.nome}, tem ${pessoa.idade} anos, e pesa ${pessoa.peso} quilos. Possuindo também a altura até então de ${pessoa.altura}.`)