/*************************************************************************************************************
 * Objetivo: Arquivo responsavel pela manipulacao de recebimento, tratamento e retorno de dados entre a API e a model
 * Autor: Eduardo Perucci Martins de Souza
 * Data Criacao: 06/10/2022
 * Versao: 1.0
 * **********************************************************************************************************/
 


const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require('../modulo/config.js') 

//Funcao para gerar um novo aluno
const novoAluno = async function(aluno){

  
  
  //Validacao de campos obrigatorios
  if(aluno.nome == ''|| aluno.nome == undefined || aluno.foto == '' || aluno.foto == undefined|| aluno.rg == '' || aluno.rg == undefined || aluno.cpf == '' || aluno.cpf == undefined || aluno.email == '' || aluno.email == undefined || aluno.data_nascimento == ''|| aluno.data_nascimento == undefined)
    return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
  else if (!aluno.email.includes('@'))//Validacao se o email tiver arroba com o comando includes que vai achar o arroba e retornar true ou false
    return {status: 400, message: MESSAGE_ERROR.INVALID_EMAIL}
  else
  {
    //Import da model de alunos.js
    const novoAluno = require('../model/DAO/aluno.js')
    //Chama a funcao para inserir um novo aluno
    const result = await novoAluno.insertAluno(aluno)
    
    if(result)
      return {status: 201, message: MESSAGE_SUCCESS.INSERT_ITEM}
    else
    
      return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}


  }
  

}

//Funcao para atualizar um registro
const atualizarAluno = async function(aluno){   

  if(aluno.nome == ''|| aluno.nome == undefined || aluno.foto == '' || aluno.foto == undefined|| aluno.rg == '' || aluno.rg == undefined || aluno.cpf == '' || aluno.cpf == undefined || aluno.email == '' || aluno.email == undefined || aluno.data_nascimento == ''|| aluno.data_nascimento == undefined)
  return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
else if (!aluno.email.includes('@'))//Validacao se o email tiver arroba com o comando includes que vai achar o arroba e retornar true ou false
  return {status: 400, message: MESSAGE_ERROR.INVALID_EMAIL}
else
{
  //Import da model de alunos.js
  const atualizarAluno = require('../model/DAO/aluno.js')
  //Chama a funcao para atualizar um aluno
  const result = await atualizarAluno.uptadeAluno(aluno)
  
  if(result)
    return {status: 201, message: MESSAGE_SUCCESS.INSERT_ITEM}
  else
  
    return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}


}

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
    listarAluno, novoAluno, atualizarAluno
}



