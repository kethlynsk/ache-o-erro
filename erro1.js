const prompt = require("prompt-sync")();

const alunos = [
{
nomeAluno: "Edson",
dataNascimento: 1988,
curso: "dev",
periodo: "noite",
},
{
nomeAluno: "Aluno 1",
dataNascimento: 2010,
curso: "dev",
periodo: "noite",
},
{
nomeAluno: "Aluno 2",
dataNascimento : 1999,
curso: "dev",
periodo: "tarde",
}
];

const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");

    if (nomeAluno == "" && curso 
    ==
    "" && periodo == "" &&
    !isNaN(dataNascimento) && dataNascimento < 2024) {
    return {
    nomeAluno,
    dataNascimento,
    curso,
    periodo,
    };
    } else {
    console.log("Dados inválidos");
    return undefined;
    }
    };

    const criar = () => {

        const aluno = modelo();
        if (aluno !== undefined) {
        alunos.push(aluno);
        console.log("Aluno cadastrado com sucesso");
        console.log(alunos);
        }
        };
        // como Executar a função
////////////

let year = getFullYear()

let cont = 0
alunos.forEach((aluno, indice) => {
    let conta = year - aluno.dataNascimento
if(conta < 18){
    cont++
}
})

    const listar = () => {
        if (alunos.length === 0) {
        console.log("Nenhum aluno encontrado ");
        return false;
        } else {
        alunos.forEach((aluno, indice) => {
        console.log(`
        ${indice + 1}.
        Nome do Aluno:
        ${aluno.nomeAluno }
        Ano de Nascimento:
        ${aluno.dataNascimento}
        Curso: ${aluno.curso}
        Período: ${aluno.periodo}
        ` );
        console.log("maior de idade: ", cont)
        });
        return true;
        }
        };

//////////

    const remover = () => {
        listar()
        const indice =
        parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;
        alunos.splice(indice, 1);
        console.log("Jogo removido com sucesso");
        console.log(alunos);
        };

///////////


    const atualizar = () => {
        listar()
        const indice =
        parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;
        const nomeAluno = prompt("Nome do aluno: ");
        const dataNascimento =
        parseInt(prompt("Ano de nascimento (AAAA): "), 10);
        const curso = prompt("Descrição do curso: ");
        const periodo = prompt("Qual o período: ");

        const aluno = {
            nomeAluno,
            dataNascimento,
            curso,
            periodo,
            };
            if (aluno !== undefined && !isNaN(indice)) {
            alunos[indice] = (aluno);
            console.log("Aluno atualizado com sucesso");
            console.log(alunos);
            } else {
            console.log("Falha na atualização");
            }
            };



module.exports = {
    criar,
    listar,
    atualizar,
    remover
            }