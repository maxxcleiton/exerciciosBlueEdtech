const prompt = require('prompt-sync')();

console.log();

// Atividade 1
// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

        do {
            user = prompt('Digite o nome de usuário: ');
            passw = prompt("Digite a sua senha: ");
            if (passw != user) {
                console.log("Logado com sucesso.")
                break
            }
            console.log("Erro, não se pode usar login e senha iguais, repita o processo.")
        } while (passw == user);

// Max Cleiton
