


//crie a página home com o texto abaixo. Use props para apresentar o texto.
// 1. Variável de apresentação da loja
const apresentacao = "Bem-vindo à nossa loja! Aqui você encontra produtos de qualidade, preços justos e um atendimento impecável.";


// Crie a pagina produtos com um array de produtos. Use props para apresentar os produtos, usando renderização de componentes por loop
// 2. Array de produtos
const produtos = [
    { id: 1, nome: "Camiseta", preco: 49.90, descricao: "Camiseta 100% algodão, confortável e estilosa." },
    { id: 2, nome: "Tênis Esportivo", preco: 199.90, descricao: "Tênis leve e resistente, ideal para corrida e academia." },
    { id: 3, nome: "Relógio Digital", preco: 299.90, descricao: "Relógio à prova d'água com diversas funções inteligentes." },
    { id: 4, nome: "Smartphone", preco: 999.90, descricao: "Smartphone com tela de 6 polegadas, camera profissional e bateria longa duração." },
    { id: 5, nome: "Notebook", preco: 1599.90, descricao: "Notebook potente com processador de 8 cores e 16GB de RAM." },
    { id: 6, nome: "Tablet", preco: 699.90, descricao: "Tablet com tela de 10 polegadas, camera profissional e bateria longa duração." }
];

// Crie a pagina contato com um objeto de contatos. Use props para apresentar os contatos
// 3. Array de contatos da loja
const contatos = {
    endereco: "Rua das Flores, 123 - Centro, São Paulo - SP",
    telefone: "(11) 98765-4321",
    email: "contato@lojaexemplo.com"
};

// Crie a pagina fale conosco com um formulário. Use props para apresentar o formulário
// 4. Descrição da página 'Fale Conosco'
const descricaoFormulario = `
Nossa página de Fale Conosco permite que você entre em contato conosco para dúvidas, sugestões ou reclamações.
Preencha o formulário abaixo com seu nome, email, telefone e mensagem. Nossa equipe responderá o mais breve possível.
`;

//Estilize as páginas com estilos CSS
// 5. Estilos CSS como objetos
const estilosPagina = {
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "0",
    backgroundColor: "#f5f5f5"
};

const estilosContainer = {
    width: "80%",
    margin: "20px auto",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
};

const estilosTitulo = {
    color: "#333"
};

const estilosFormulario = {
    display: "flex",
    flexDirection: "column"
};

const estilosInput = {
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
};

const estilosBotao = {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

const estilosBotaoHover = {
    backgroundColor: "#218838"
};

// use roteamento para navegar entre as páginas
// 6. Roteamento de páginas
const rotas = {
    home: "/",
    produtos: "/produtos",
    contato: "/contato",
    faleConosco: "/fale-conosco",
    paginaNaoEncontrada: "*"
};
