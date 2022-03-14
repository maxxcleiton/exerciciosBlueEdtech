const prompt = require('prompt-sync')();

console.log();

Atividade 1 - Aula 5

        do {
            user = prompt('Digite o nome de usuário: ');
            passw = prompt("Digite a sua senha: ");
            if (passw != user) {
                console.log("Logado com sucesso.")
                break
            }
            console.log("Erro, não se pode usar login e senha iguais, repita o processo.")
        } while (passw == user);