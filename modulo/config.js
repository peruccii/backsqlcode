/*************************************************************************************************************
 * Objetivo: Arquivo responsavel pela configuracao de variavesi, constantes e mensagens do sistema
 * Autor: Eduardo Perucci Martins de Souza
 * Data Criacao: 13/10/2022
 * Versao: 1.0
 * **********************************************************************************************************/

const MESSAGE_ERROR = {
    REQUIRED_FIELDS     :     'Exist fields required that should be filled',
    INVALID_EMAIL       :     'Email informed not is valid',
    CONTENT_TYPE        :     'The request header does not have a valid Content-Type',
    EMPTY_BODY          :     'The request body can not be empty',
    NOT_FOUND_DB        :     'Were not found registers in Banco de Dados',
    INTERNAL_ERROR_DB   :     'Nao foi possivel realizar a operacao com o Banco de Dados',
    REQUIRED_ID     :       'Nao foi possivel localizar o id'
}

const MESSAGE_SUCCESS = {
    INSERT_ITEM         :   'Item created successfully in Banco de Dados',
    UPDATE_ITEM         :   'Item atualized successfully in Banco de Dados',
    DELETE_ITEM         :   'Item deleted successfuylly in Banco de Dados'
}

module.exports = {
    MESSAGE_ERROR,
    MESSAGE_SUCCESS
}