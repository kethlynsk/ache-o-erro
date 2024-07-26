const prompt = require("prompt-sync")();

const {
    criar,
    atualizar,
    listar,
    remover
} = require("./erro1.js")

while(true){
    console.log(`
    1. Adicionar aluno
    2. Listar todos os alunos
    3. Atualizar aluno
    4. Deletar aluno
    5. Sair
    `);

    let opcao = +prompt("Escolha uma opção")

    switch (opcao) {
        case 1:
        criar();
        break;

        case 2:
        listar();    
        break;

        case 3:
        atualizar();    
        break;

        case 4:
        remover();
        break;

        case 5:
        process.exit();
        break;
    
        default:
            console.log("Opção inválida")
            break;
    }

}