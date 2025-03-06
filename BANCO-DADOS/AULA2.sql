create database escola;
use escola;

 /*a) Tabela Alunos:
id (INT, chave primária, auto-incremento)
nome (VARCHAR(100), não nulo)
data_nascimento (DATE, não nulo)
email (VARCHAR(100), único)*/

create table alunos(
id int primary key auto_increment,
nome varchar(100) not null,
data_nascimento date,
email varchar(100) unique
);

/*b) Tabela Professores:
id (INT, chave primária, auto-incremento)
nome (VARCHAR(100), não nulo)
especialidade (VARCHAR(50), não nulo)*/

create table professores(
id int primary key auto_increment,
nome varchar(100) not null,
especialidade varchar(50) not null
);

/*c) Tabela Disciplinas:
id (INT, chave primária, auto-incremento)
nome (VARCHAR(100), não nulo)
id_professor (INT, chave estrangeira para Professores(id))*/

-- chave estrangeira 
create table disciplinas(
id int primary key auto_increment, -- chave primária nesta tabela
nome varchar(100) not null,
id_professor int, 
constraint fk_professor foreign key (id_professor) references professores(id) -- chave estrangeira 
);


/*d) Tabela Matriculas:
id (INT, chave primária, auto-incremento)
id_aluno (INT, chave estrangeira para Alunos(id))
id_disciplina (INT, chave estrangeira para Disciplinas(id))
data_matricula (DATE)*/
create table matriculas(
id int primary key auto_increment,
id_aluno int,
id_disciplina int,
foreign key (id_aluno) references alunos(id),
foreign key (id_disciplina) references disciplinas(id)
);


-- 3. Altere a tabela Alunos para adicionar uma coluna telefone (VARCHAR(15)).
alter table alunos add telefone varchar(15);

-- 4. Remova a coluna telefone da tabela Alunos.
alter table alunos drop column telefone;

-- 5. Renomeie a coluna especialidade da tabela Professores para area_atuacao.
alter table professores change especialidade  area_atuacao varchar(50) not null;
alter table professores modify area_atuacao varchar(51) not null;