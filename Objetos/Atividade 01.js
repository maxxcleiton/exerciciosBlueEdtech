const prompt = require('prompt-sync')();
console.log();

// Atividade 1
// Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.

const pessoa = {
    nome: 'Max',
    idade: 0,
    peso: 72,
    altura: 30,
    envelhecer: function(){
        this.idade++
    },
    engordar: function(){
        this.peso++
    },
    emagrecer: function(){
        this.peso--
    },
    crescer: function(){
        if (this.idade < 22){
            for (let i = 0; i < 22; i++){
                this.altura = 0.5 * i
            }
        }
    }
}


pessoa.crescer()

const pessoaEmJSON = JSON.stringify(pessoa);
console.log(pessoaEmJSON)

// console.log(pessoa) // Aqui mostra todo o objeto
// console.log(pessoa.envelhecer())
// console.log(pessoa.idade)
// console.log(pessoa.engordar())
// console.log(pessoa.peso)
// console.log(pessoa.crescer())
// console.log(pessoa.altura)
// console.log(pessoa.emagrecer())
// console.log(pessoa.peso)