## Atividade 
Nesta atividade, iremos explorar a criação de componentes React utilizando **props** e a aplicação de **loops em listas** para a geração dinâmica de componentes.

### Componente `CardFilme.jsx`
O componente `CardFilme` será responsável por exibir as informações de um filme, incluindo: 
- Uma **imagem** do filme;
- O **título** do filme;
- Dois **links** relacionados.

O conteúdo dessas tags será passado para o componente por meio de **props**. Além da implementação em JSX, o componente deverá incluir **estilização personalizada** para garantir uma aparência adequada.

### Componente `ListaFilme.js`
O componente `ListaFilme` será responsável por renderizar uma lista de filmes. Ele receberá um **array de objetos** como prop, onde cada objeto representará um filme. Utilizando um loop, o componente iterará pelo array para criar dinamicamente múltiplos componentes `CardFilme`, garantindo uma exibição organizada da lista de filmes.
