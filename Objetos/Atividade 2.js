const prompt = require('prompt-sync')();
console.log();

// Atividade 2
// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)

// Cadastro de funcionarios

// Funcao
function nf(funcionario){ //novo funcionario
    let nomeFun = prompt(`Digite o nome do funcionário: `);
    let cargoFun = prompt(`Digite o cargo do funcionário: `);
    let salarioFun = +prompt(`Digite o salário do funcionário: `);
    let obfuncionario = {
        Nome: nomeFun,
        Cargo: cargoFun,
        Salario: salarioFun,
    }
}
let teste = nf()
console.log(teste)
// let = nf(nnfuncionario)
// console.log(nnfuncionario)
// console.log(nf.obfuncionario)