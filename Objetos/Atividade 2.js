const prompt = require('prompt-sync')();
console.log();

// Atividade 2
// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)

function objeto(){
    
}

function novofuncionario(){
    let dados = [];
    let n = '';
    let c = '';
    let s = 0;

    n = prompt('Digite o nome do funcionário: ');
    c = prompt('Digite o cargo do funcionário: ');
    s = +prompt('Digite o salário do funcionário: ');

    dados.push[n]
    dados.push[c]
    dados.push[s]
    return dados
    console.log(dados)
}



// const nf={
//     nome:'',
//     cargo:'',
//     salário:0,
// }
// nf.nome = 'Max'
// console.log(nf.nome)

novofuncionario()


// dados.push = prompt('Digite o nome do funcionário: ');
// dados.push = prompt('Digite o cargo do funcionário: ');
// dados.push = +prompt('Digite o salário do funcionário: ');

// function novof(){ //novo funcionario
//     let dados = [];
//     dados.push = prompt(`Digite o nome do funcionário: `);
//     console.log(dados)
//     dados.unshift = prompt(`Digite o cargo do funcionário: `);console.log(dados)
//     dados.push = +prompt(`Digite o salário do funcionário: `);

//     return dados
//     console.log(dados)
    // let obfuncionario = {
    //     dados: dados,
    //     Nome: nomeFun,
    //     Cargo: cargoFun,
    //     Salario: salarioFun,
    // }
    // console.log(obfuncionario)
    // return obfuncionario

// }
// novof()
// console.log(dados)

// let teste = nf()
// console.log(teste)
// let = nf(nnfuncionario)
// console.log(nnfuncionario)
// console.log(nf.obfuncionario)