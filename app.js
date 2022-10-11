/***********************************************************************
 * Objetivo: API responsavel pela manipulacao de dados do Back-end      =
 *              (GET, POST, PUT, DELETE)                                =
 * Autor: Eduardo Perucci Martins de Souza                              =
 * Data Criacao: 10/10/2022                                             =
 * Versao: 1.0                                                          =
 * ======================================================================   
 * Anotacoes:                                                           =
 * //npm install prisma --save                                          =
 * //npx prisma                                                         =
 * //npx prisma init//                                                  =   
 * //npm install @prisma/client                                         =
 * ********************************************************************/

//Importacao dabiblioteca
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

//Configuracao de cors para liberar os acessos a API
app.use((resquest,response,next) => {
    response.header ('Access-Control-Allow-Origin', '*')
    response.header ('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    app.use(cors())
    next()
})

//Criamos um objeto que permite receber um json no body das requisicoes
const jsonParser = bodyParser.json()

/******************************** 
*   Rotas para CRUD de alunos   *
*   Data: 10/10/2022            *
********************************/

//Endpoint para listar todos os alunos
app.get('/alunos', cors(),async function (request,response){
    let statusCode
    let message
    const controllerAluno = require ('./controller/controllerAluno.js') //Import do arquivo controllerAluno
    const dadosAlunos = await controllerAluno.listarAluno() //Retorna todos os alunos existentes no Banco de Dados

    //Valida se existe retorno de dados
    if(dadosAlunos)
    {
        statusCode = 200
        message = dadosAlunos
    }else{
        statusCode = 404
        message = "Nenhum aluno foi encontrado,verifique o codigo novamente"
    }
    
    
    response.status(statusCode)
    response.json(message)
})

//Endpoint para inserir um novo aluno
app.post('/aluno', cors(), jsonParser, async function(request,response){
    let statusCode
    let message
    let headerContentType


    headerContentType = request.headers['content-type']
    //console.log(headerContentType);

    if(headerContentType == 'application/json'){
        let dadosBody = request.body// Escrevendo isso e possivel observar npo terminal o corpo/estrutura da requisicao do novo aluno que cadastramos no Posteman
        if(dadosBody.length > 0)
        {
            statusCode = 200
            message = 'Sucesso'
        }else{
            statusCode = 400
            message = 'O tipo de midia content-type da solicitacao nao é suportado pelo servidor, use (application/json)'
        }


        statusCode = 200
        message = "Sucessoo"
    }else{
        statusCode = 415
        message = "O tipo de midia content-type da solicitacao nao é suportado pelo servidor, use (application/json)"
    }

    response.status(statusCode)
    response.json(message)
   

})

//Ativa o servidor para receber requisicoes HTTP
app.listen(8080, function(){
    console.log('Servidor aguardando requisicoes!');
})


