import { Component } from 'react'
import './App.css'
import MeuProvedorDeContexto from './contexto/meuProvedorDeContexto'
import Componente1 from './componentes/Componente1'
import Componente2 from './componentes/Componente2'

import PessoasProvider from './contexto/PessoasProvider'
import Cadastrar from './componentes/Cadastrar'
import Listagem from './componentes/Listagem'
function App() {

  let style = {
    textAlign: 'left'
  }


  return (
    <>

      <h1 style={style}>Aula 24</h1>

      <MeuProvedorDeContexto>
        <Componente1/>
        <Componente2/>
      </MeuProvedorDeContexto>   

      <PessoasProvider>
        <Listagem/>
        <Cadastrar/>      
      </PessoasProvider>      
   
      
    </>
  )
}

export default App
