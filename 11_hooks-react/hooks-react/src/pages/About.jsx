import React from 'react'

//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
  const { contextValue } = useContext(SomeContext); //usa o context pra passar valor

  return (
    <div>
      <h2>useContext</h2>
      <p>valor do contexto: {contextValue}</p> 
      <hr />
    </div>
  )
}

export default About