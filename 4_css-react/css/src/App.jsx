import { useState } from 'react';
import './App.css'

import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = true; //se true o css é red-title, se false é title. classe dinamica

  return (

    <div>
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent/>
      <p>Este paragrafo é do APP.JSX</p>

      {/* Inline CSS PS: Deve ser evitado */}
      <p style = {{color: "black", padding: "20px", borderTop: "2px solid red"}}>
        Este paragrafo foi estilizado pelo CSS Inline.</p>

      {/*CSS Inline dinamico */}
      <h2 
        style = {n > 10 ? {color: "purple"} : {color: "pink"}} >CSS Dinamico 
      </h2>
      <h2 
        style = {n < 10 ? {color: "purple"} : {color: "pink"} } >CSS Dinamico 
      </h2>
      <h2 
        style = {name === "Matheus" ? 
        ({color: "green", backgroundColor: "#000"}) 
        :
        (null)} 
        >Imprimindo {name}
      </h2>

      {/* Classe dinamica*/}
      <h2
        className={redTitle ? 
        "red-title"
        :
        "title"}
        >Este titulo vai ter classe dinamica</h2>

        {/* CSS modules */}
        <Title/>
    </div>
  )
}

export default App
