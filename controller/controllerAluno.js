/*************************************************************************************************************
 * Objetivo: Arquivo responsavel pela manipulacao de recebimento, tratamento e retorno de dados entre a API e a model
 * Autor: Eduardo Perucci Martins de Souza
 * Data Criacao: 06/10/2022
 * Versao: 1.0
 * **********************************************************************************************************/

//Funcao para gerar um novo aluno
const novoAluno = async function(aluno){
  
}

//Funcao para atualizar um registro
const atualizarAluno = async function(aluno){   

}

//Funcao para excluir um registro
const excluirAluno = async function(id){   
   
}

//Funcao para retornar todos os registros
const listarAluno = async function(){  

    let dadosAlunosJSON = {}

    const { selectAllAlunos } = require('../model/DAO/aluno.js')
    const dadosAlunos = await selectAllAlunos()

   

    if(dadosAlunos)
    {
      //Conversao do tipo de dados BigInt para Int (????????)
      dadosAlunos.forEach(element => {
        element.id = Number(element.id)
    })
      //Criamos uma chave alunos no JSON para retornar o array de alunos
      dadosAlunosJSON.alunos = dadosAlunos //- DadosAlunosJSON."alunos" eu posso colocar qualquer nome pra ele aparecer no JSON
        return dadosAlunosJSON
    } 
     else
        return false    
}

module.exports = {
    listarAluno
}



