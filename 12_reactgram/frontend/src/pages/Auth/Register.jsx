import "./Auth.css"

//Components
import {Link} from 'react-router-dom'

//Hooks
import {useState, useEffect} from 'react'

const Register = () => {

const handleSubmit = (e) => {
e.preventDefault()
}

  return (
    <div>
      <h2>Register</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome"/>
      <input type="email" placeholder="E-mail"/>
      <input type="password" placeholder="Senha"/>
      <input type="password" placeholder="Confirme sua senha"/>
      <input type="submit" placeholder="Cadastrar"/>
      </form>
      <p>Já tem conta? <Link to="/login" >Clique aqui.</Link></p>
    </div>
  )
}

export default Register