import './App.css'

import BotaoContagem from './componentes/BotaoContagem'
import CardComProps from './componentes/CardComProps'
import ComponenteCor from './componentes/ComponenteCor'
import CardUsuario from './componentes/CardUsuario'
import ModeloPaginas from './ModeloPaginas'


// function App() {

//   let dataVariavel = '20.12.2052'
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <p>Aula 22 será uma revisão dos conceitos iniciais de React. No segundo momento iremos aprender a usar o React Router DOM</p>

//       <BotaoContagem/>
//       <BotaoContagem/>

//       <CardComProps/> {/*Componente que não recebe props não renderiza as informações*/}
//       <CardComProps titulo="Testando um componente com props" data={dataVariavel} descricao="Teste de componente com propriedades e sua renderização"/>

//       <ComponenteCor cor="pink"/>
//       <ComponenteCor cor="blue"/>

//       <CardUsuario nome={'Cleitinho'} idade={20} email={'cleitinho@email'} corBorda={'blue'} tamanhoFonte={'10px'}/>
  
//     </>
//   )
// }

function App() {

  return(
    <>
      <ModeloPaginas/>
    </>

    // crie 3 páginas ( home, sobre nós e contato)
    // crie um arquivo de rotas para confifguração das rotas com elemento e path 
    //adicione as rotas no ModeloSite que terá cabeçalho e rodapé.
    //insira o modeloSite no App.jsx
  )

}

export default App
