#Permite visualizar todos os databases existentes no BD
show databases;

#permite apagar um database e toda a sua estrutura de tabelas e dados
drop database db_lions_school;

#Permite criar um database
create database db_lions_school;

#Permite ativar a utilizacao de um database
use db_lions_school;

#Permite vizualizar todas as tabelas existentes dentro de um database
show tables;


create table tbl_aluno(
id int UNSIGNED not null auto_increment primary key, #Unsigned nao deixa ter numeros negativos, auto_increment é pra colocar o ID automaticamnente
nome varchar(80) not null,
foto varchar(256) not null,
sexo varchar(1),
rg varchar(30) not null,
cpf varchar(30) not null,
email varchar (256) not null,
telefone varchar (30),
celular varchar(30),
data_nascimento date not null,
unique index(id)

);


create table tbl_curso(
id int UNSIGNED not null auto_increment primary key,
nome varchar(80) not null,
carga_horaria int not null,
icone varchar(100),
sigla varchar(6),
unique index(id)
);
drop table tbl_cursos;

create table tbl_aluno_curso (
id int unsigned not null auto_increment primary key,
id_aluno int unsigned not null,
id_curso int unsigned not null,
matricula varchar(15),
status_aluno varchar(10) not null,

foreign key (id_aluno)
	references tbl_aluno (id),
foreign key (id_curso)
	references tbl_curso (id),
    unique index(id)
);

#Permite vizualizas os dados de todas as colunas de uma tabela
select * from tbl_aluno;

#qualquer atributo que nao seja do tipo inteiro exije aspas simples
insert into tbl_aluno (nome,foto,sexo,rg,cpf,email,telefone,celular,data_nascimento)
	values('Jose da Silva','https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png','M','45.375.656.77','098.765.676-78','josesilva@gmail.com,','5511343', '551143634', '2000-04-10');
    
insert into tbl_aluno (nome,foto,sexo,rg,cpf,email,telefone,celular,data_nascimento)
	values('Maria da Silva','https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png','F','32.392.646.77','128.765.516-78','mariasilva@gmail.com,','5511996443872', '55114363400938', '2005-07-17');


#Atualiza os dados de uma tebela SET = atributo que vc quer mudar = 'mudanca' where id = 1 é a chave primnaria ID que seria o JOSE ja que cadastramos ele primeiro
update tbl_aluno set rg = '34.567.23-4' where id =1;
update tbl_aluno set data_nascimento = '2005-07-27' where id =2;


#Deleta da tabela  o ID 1, que seria o Jose no caso, deixando somente o ID 2 na tabela aluno
delete from tbl_aluno where id = 1;





