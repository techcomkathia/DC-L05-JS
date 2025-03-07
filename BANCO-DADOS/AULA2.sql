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

/*INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES (valor1, valor2);*/


/*6. Adicione 3 alunos na tabela Alunos. (chaves primárias)
João Silva, 2005-05-10, joao@email.com
Maria Oliveira, 2006-08-22, maria@email.com
Pedro Santos, 2007-12-15, pedro@email.com*/


insert into alunos (nome, data_nascimento, email)
values 
('João Silva', '2005-05-10', 'joao@email.com'),
('Maria Oliveira', '2006-08-22', 'maria@email.com'),
('Pedro Santos', '2007-12-15', 'pedro@email.com');

select *  from alunos;

/*7. Insira 2 professores na tabela Professores.(chaves primárias)
Carlos Andrade, Matemática
Ana Paula, História*/
insert into professores (nome, area_atuacao)
values
('Carlos Andrade', 'Matemática'),
('Ana Paula', 'História');

select *  from professores;

/*8. Adicione 2 disciplinas na tabela Disciplinas, associando aos professores recém-inseridos.
Matemática Básica, lecionada por Carlos Andrade (usar ref de id)
História do Brasil, lecionada por Ana Paula (usar ref de id)*/
insert into disciplinas (nome, id_professor) values
('Matemática Básica', 1),
('História do Brasil', 2);

-- tentando fazer um insert para um id de professor que não existe
 insert into disciplinas (nome, id_professor) values
 ('disciplina exemplo', 999);

-- adicionar a coluna data_matricula na tabela matrículas 
alter table matriculas add data_matricula date not null;

/*9. Matricule os alunos nas disciplinas usando a tabela Matriculas.
João Silva em Matemática Básica, 2024-10-10 (usar ref de id)
Maria Oliveira em História do Brasil, 2024-10-11 (usar ref de id)
Pedro Santos em Matemática Básica, 2024-10-12 (usar ref de id)*/
insert into Matriculas (id_aluno, id_disciplina, data_matricula)
values
(1, 1, '2024-10-10'),
(2, 2, '2024-10-11'),
(3, 1, '2024-10-12');

-- ATUALIZAÇÃO DE DADOS (UPDATE)
-- 10.  Atualize o email do aluno 'Pedro Santos' para pedro.santos@email.com. 
update alunos set email = 'pedroNOVO.santos@email.com' where id = 3;
select * from alunos;

-- 11. Modifique a especialidade do professor 'Carlos Andrade' para Física.
update Professores set area_atuacao = 'Física' where id = 1;
select * from professores;

-- 12. Mude a data de matrícula de 'Maria Oliveira' para 2024-11-01, e a disciplina para Matemática básica
update matriculas set data_matricula = '2024-11-01', id_disciplina = 1 where id=2;
select * from matriculas;


-- DELEÇÃO DE DADOS DENTRO DA TABELA 
delete from matriculas where id_aluno = 2;


