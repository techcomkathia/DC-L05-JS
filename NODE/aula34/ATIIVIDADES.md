# 📝 Enunciado – Criação das Tabelas com Sequelize

Você foi contratado para iniciar o desenvolvimento de um sistema de controle de **produtos** e **fornecedores** de uma empresa. Para isso, será necessário criar e configurar duas tabelas no banco de dados MySQL, utilizando **Sequelize**.

---

## 🔧 Requisitos

Crie as seguintes tabelas:

### 1. Fornecedor

Essa tabela será responsável por armazenar informações sobre os fornecedores da empresa.

| Campo     | Tipo         | Restrições              |
|-----------|--------------|-------------------------|
| id        | INTEGER      | Chave primária, auto incremento |
| nome      | STRING       | Obrigatório             |
| endereco  | STRING       | —                       |
| cnpj      | STRING       | Obrigatório             |

---

### 2. Produto

Essa tabela irá armazenar os produtos oferecidos pela empresa.

| Campo         | Tipo     | Restrições                                |
|---------------|----------|-------------------------------------------|
| id            | INTEGER  | Chave primária, auto incremento           |
| nome          | STRING   | Obrigatório                               |
| preco         | FLOAT    | Obrigatório                               |
| quantidade    | INTEGER  | Obrigatório                               |
| id_fornecedor | INTEGER  | Chave estrangeira referenciando Fornecedor |

---

## 🧩 Relacionamento

- Um **fornecedor** pode fornecer **vários produtos**.
- Um **produto** pertence a **um único fornecedor**.

---

## 🎯 Objetivo

Criar os modelos Sequelize para as duas tabelas e configurar o relacionamento entre elas.  
Ao sincronizar com o banco de dados utilizando `sequelize.sync()`, as tabelas deverão ser criadas automaticamente **caso ainda não existam**.

---

## 📌 Dicas

- Use o método `define` do Sequelize para criar os modelos.
- Use `belongsTo` e `hasMany` para configurar os relacionamentos.

