-- Criando o banco de dados
CREATE DATABASE Biblioteca_Cleitinho;
-- Selecionando o Banco
USE Biblioteca_Cleitinho;

-- Criando a tabela de Autores
CREATE TABLE autores (
    idAutor INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único do autor
    nome VARCHAR(255) NOT NULL -- Nome do autor
);

-- Criando a tabela de Livros
CREATE TABLE livros (
    idLivro INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único do livro
    titulo VARCHAR(255) NOT NULL, -- Título do livro
    idAutor INT NOT NULL, -- Chave estrangeira referenciando um autor
    preco DECIMAL(10,2) NOT NULL, -- Preço do livro
    FOREIGN KEY (idAutor) REFERENCES autores(idAutor) -- Relacionamento com a tabela autores
);

-- Criando a tabela de Clientes
CREATE TABLE clientes (
    idCliente INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único do cliente
    nome VARCHAR(255) NOT NULL, -- Nome do cliente
    telefone VARCHAR(15), -- Número de telefone do cliente
    cpf VARCHAR(14) UNIQUE NOT NULL, -- CPF do cliente (único)
    dataNascimento DATE NOT NULL, -- Data de nascimento do cliente
    cidade VARCHAR(100) NOT NULL, -- Cidade onde o cliente reside
    estado VARCHAR(2) NOT NULL, -- Estado (UF)
    cep VARCHAR(9) NOT NULL, -- Código postal (CEP)
    endereco VARCHAR(255) NOT NULL -- Endereço completo do cliente
);

-- Criando a tabela de Empréstimos
CREATE TABLE emprestimos (
    idEmprestimo INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único do empréstimo
    idCliente INT NOT NULL, -- Chave estrangeira referenciando um cliente
    idLivro INT NOT NULL, -- Chave estrangeira referenciando um livro
    dataEmprestimo DATE NOT NULL, -- Data em que o livro foi emprestado
    dataDevolucao DATE, -- Data em que o livro foi devolvido (pode ser NULL se ainda não devolvido)
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente),
    FOREIGN KEY (idLivro) REFERENCES livros(idLivro)
);

-- Inserindo autores na tabela
INSERT INTO autores (nome) VALUES 
('Machado de Assis'),
('J. K. Rowling'),
('George Orwell'),
('Clarice Lispector'),
('Stephen King'),
('Agatha Christie'),
('José de Alencar'),
('J. R. R. Tolkien');

-- Inserindo livros na tabela
INSERT INTO livros (titulo, idAutor, preco) VALUES 
('Dom Casmurro', 1, 39.90),
('Harry Potter e a Pedra Filosofal', 2, 59.90),
('1984', 3, 45.50),
('A Hora da Estrela', 4, 34.99),
('O Iluminado', 5, 49.99),
('Assassinato no Expresso do Oriente', 6, 42.90),
('Iracema', 7, 29.99),
('O Senhor dos Anéis', 8, 79.90);

-- Inserindo clientes na tabela
INSERT INTO clientes (nome, telefone, cpf, dataNascimento, cidade, estado, cep, endereco) VALUES 
('Ana Souza', '85999999999', '123.456.789-01', '1992-03-10', 'Fortaleza', 'CE', '60123-456', 'Rua A, 123'),
('Carlos Silva', '85988888888', '234.567.890-12', '1985-08-22', 'Fortaleza', 'CE', '60876-543', 'Av. B, 456'),
('Mariana Oliveira', '85977777777', '345.678.901-23', '1990-11-05', 'Eusébio', 'CE', '61760-000', 'Rua C, 789'),
('Pedro Lima', '85966666666', '456.789.012-34', '2000-05-15', 'Caucaia', 'CE', '61600-000', 'Rua D, 321'),
('João Ferreira', '85955555555', '567.890.123-45', '1998-12-30', 'Fortaleza', 'CE', '60345-678', 'Av. E, 987'),
('Larissa Costa', '85944444444', '678.901.234-56', '1987-09-18', 'Eusébio', 'CE', '61760-001', 'Rua F, 654'),
('Ricardo Mendes', '85933333333', '789.012.345-67', '1995-04-22', 'Caucaia', 'CE', '61615-000', 'Av. G, 741'),
('Fernanda Alves', '85922222222', '890.123.456-78', '1982-07-10', 'Fortaleza', 'CE', '60111-222', 'Rua H, 852'),
('Tiago Moreira', '85911111111', '901.234.567-89', '1993-01-25', 'Eusébio', 'CE', '61760-002', 'Av. I, 963'),
('Beatriz Nunes', '85900000000', '012.345.678-90', '2001-06-14', 'Caucaia', 'CE', '61620-000', 'Rua J, 357');

-- Inserindo empréstimos na tabela
INSERT INTO emprestimos (idCliente, idLivro, dataEmprestimo, dataDevolucao) VALUES 
(1, 2, '2024-02-01', '2024-02-10'),
(2, 4, '2024-02-05', NULL),
(3, 5, '2024-02-07', '2024-02-15'),
(4, 1, '2024-02-10', '2024-02-20'),
(5, 6, '2024-02-12', NULL),
(6, 3, '2024-02-15', '2024-02-25'),
(7, 7, '2024-02-18', NULL),
(8, 8, '2024-02-20', '2024-02-28'),
(9, 2, '2024-02-22', NULL),
(10, 4, '2024-02-24', '2024-03-05');