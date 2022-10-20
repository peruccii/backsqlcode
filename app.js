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
const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require('./modulo/config.js') 

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
        message = MESSAGE_ERROR.NOT_FOUND_DB
    }
    
    
    response.status(statusCode)
    response.json(message)
})

//Endpoint para inserir um novo aluno
app.post('/aluno', cors(), jsonParser, async function(request,response){
    let statusCode
    let message
    let headerContentType

    //Recebe o tipo content-type que foi enviado no header da requisicao
    headerContentType = request.headers['content-type']
    //console.log(headerContentType);

    //Validar se o  content-type é application/json
    if(headerContentType == 'application/json'){
        let dadosBody = request.body// Escrevendo isso e possivel observar npo terminal o corpo/estrutura da requisicao do novo aluno que cadastramos no Posteman
        
        //Realiza um processo de conversao de dados para conseguir comparar o json vazio
        if(JSON.stringify(dadosBody) != '{}')
        {
            //Import do arquivo da controller do aluno
            const controllerAluno = require('./controller/controllerAluno.js')
            //Chama a funcao novoAluno da controller e encaminha os dados do body
            const novoAluno = await controllerAluno.novoAluno(dadosBody)

               statusCode = novoAluno.status
               message = novoAluno.message

        }else{
            statusCode = 400
            message = MESSAGE_ERROR.CONTENT_TYPE
        }
    }else{
        statusCode = 415
        message = MESSAGE_ERROR.CONTENT_TYPE
    }

    response.status(statusCode)
    response.json(message)
   

})

app.put('/atualizaraluno', cors(), jsonParser, async function(request,response){
       

    let statusCode
    let message
    let headerContentType
      //Recebe o tipo content-type que foi enviado no header da requisicao
      headerContentType = request.headers['content-type']
      //console.log(headerContentType);
  
      //Validar se o  content-type é application/json
      if(headerContentType == 'application/json'){
          let dadosBody = request.body// Escrevendo isso e possivel observar npo terminal o corpo/estrutura da requisicao do novo aluno que cadastramos no Posteman
          
          //Realiza um processo de conversao de dados para conseguir comparar o json vazio
          if(JSON.stringify(dadosBody) != '{}')
          {
              //Import do arquivo da controller do aluno
              const controllerAluno = require('./controller/controllerAluno.js')
              //Chama a funcao novoAluno da controller e encaminha os dados do body
              const atualizarAluno = await controllerAluno.atualizarAluno(dadosBody)
  
                 statusCode = atualizarAluno.status
                 message = atualizarAluno.message
  
          }else{
              statusCode = 400
              message = MESSAGE_ERROR.CONTENT_TYPE
          }
      }else{
          statusCode = 415
          message = MESSAGE_ERROR.CONTENT_TYPE
      }
  
      response.status(statusCode)
      response.json(message)
})

//Ativa o servidor para receber requisicoes HTTP
app.listen(8080, function(){
    console.log('Servidor aguardando requisicoes!');
})


