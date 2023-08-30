const UserDetails = ({name,age,profession,cpf}) => {
  

    return (
    <div>
        <ul>
            <h2>Nome: {name}</h2>
            <li>Idade: {age}</li>
            <li>Profissao: {profession}</li>
            <li>CPF: {cpf}</li>
        </ul>
        {age >= 18 ? (
            <p>Liberado para CNH</p>
        ):(
            <p>Menor de idade, nao Liberado.</p>
        )}
    </div>
  )
}

export default UserDetails