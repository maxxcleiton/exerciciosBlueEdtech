const prompt = require('prompt-sync')();
console.log();

// Atividade 1
// Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.

const pessoa = {
    nome: 'Max',                    
    idade: 20,
    peso: 72,
    altura: 30,
    
    envelhecer: function(){
        this.idade++
    },
    engordar: function(){
        this.peso++
    },
    emagrecer: function(quilos){
        let pesoperdido = pessoa.peso - quilos
        console.log(`A pessoa emagreceu ${pessoa.peso} quilos`)
        return pesoperdido
    },
    crescer: function(){
    
    }
}

pessoa.emagrecer(3)
console.log(pessoa.peso)


// const pessoaEmJSON = JSON.stringify(pessoa);
// console.log(pessoaEmJSON)