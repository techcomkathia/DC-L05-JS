import { useState } from 'react'
import './App.css'
import CardFilme from './componentes/CardFilme'
import jobs from './assets/jobs.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 19 - React</h1>
      <CardFilme 
        id = '1'
        imagem={jobs} 
        titulo='JOBS' 
        sinopse=' https://www.adorocinema.com/filmes/filme-198187/' 
        assistir='https://www.primevideo.com/-/pt/detail/Jobs/0FWPZNVMWB0D6ZZNVRW3FDBCXF' 
      />
       
    </>
  )
}

export default App
