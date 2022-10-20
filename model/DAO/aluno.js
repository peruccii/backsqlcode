/*************************************************************************************************************
 * Objetivo: Arquivo responsavel pela manipulacao de dados com o Banco de Dados(Insert,Uptade,Delete e Select)
 * Autor: Eduardo Perucci Martins de Souza
 * Data Criacao: 06/10/2022
 * Versao: 1.0
 * **********************************************************************************************************/

//Funcao para inserir um novo registro no Banco de Dados
const insertAluno = async function(aluno){

    try {


    

        //Import da classe prismaclient que eh responsavel pela interacoes com o banco de dados
        const { PrismaClient } = require('@prisma/client')   

        //Instancia da classe PrismaClient
        const prisma = new PrismaClient()

        let sql = `insert into tbl_aluno (nome,
                                        foto,
                                        rg,
                                        cpf,
                                        email,
                                        data_nascimento,
                                        telefone,
                                        celular,
                                        sexo) 
                                        values('${aluno.nome}','${aluno.foto}','${aluno.rg}','${aluno.cpf}','${aluno.email}','${aluno.data_nascimento}','${aluno.telefone}','${aluno.celular}','${aluno.sexo}')`
        
        //Executa o script sql no banco de dados ($executeRawUnsafe) permite encaminhar uma variavel contendo o script
        const result = await prisma.$executeRawUnsafe(sql)
        
        //Verifica se o script foi executado com sucesso no banco de dados
        if(result)
            return true
        else
            return false

    }catch (error) {
        return false
    }
}

//Funcao para atualizar um novo registro no Banco de Dados
const uptadeAluno = async function(aluno){
    try {

        

     //Import da classe prismaclient que eh responsavel pela interacoes com o banco de dados
     const { PrismaClient } = require('@prisma/client')   

     //Instancia da classe PrismaClient
     const prisma = new PrismaClient()

     

     let sql = `update tbl_aluno set nome = '${aluno.nome}', foto ='${aluno.foto}',rg ='${aluno.rg}',cpf ='${aluno.cpf}',email ='${aluno.email}',data_nascimento ='${aluno.data_nascimento}',telefone ='${aluno.telefone}',celular ='${aluno.celular}',sexo ='${aluno.sexo}' where id =${aluno.id};`

     const result = await prisma.$executeRawUnsafe(sql)
        
        //Verifica se o script foi executado com sucesso no banco de dados
        if(result)
            return true
        else
            return false
    }catch (error) {
        return false
    }
    
}

//Funcao para deletar um registro no Banco de Dados
const deleteAluno = async function(id){

    
    
}

//Funcao para retornar todos os registros no Banco de Dados
const selectAllAlunos= async function(){

    //Import da classe prismaclient que eh responsavel pela interacoes com o banco de dados
    const { PrismaClient } = require('@prisma/client')   

    //Instancia da classe PrismaClient
    const prisma = new PrismaClient()

    //rs = RecordSet, seria quando a gente roda um select no banco e o banco ira devolver dados que eh o RecordSet
    //Criamos um objeto do tipo recordSet para receber os dados do banco de dados atraves do script SQL (select)
    //Essa linha antes de passar para a proxima, aguarde - Essa eh a funcao do await, enquanto o banco nao retornar os dados o await vai esperar
    const rsAlunos = await prisma.$queryRaw `select cast(id as float) as id, nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento from tbl_aluno order by id desc` //order by id desc(decrescente) a ordem que aparece no json
    //SE o rsAlunos receber mais que 0 dados ele retorna o rsAlunos, caso contrario ele estara vazio( nao recebeu dados )
    if (rsAlunos.length > 0)
        return rsAlunos
    else   
        return false 
}

module.exports = {
    selectAllAlunos,
    insertAluno,
    uptadeAluno
}



