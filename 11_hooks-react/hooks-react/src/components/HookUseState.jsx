import { useState } from 'react'

const HookUseState = () => {
    //1 - useState
    let userName = "Joao";

    const [name, setName] = useState("Lucas");

    const changeNames = () => {
        userName = "Joao Pedro";
        setName("Lucas Fagundes");
    }

    //2 - useState e input
    const [age, setAge] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()

        //Enviar para uma API
        console.log(age);
    }

    return <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames} >Alterar nomes</button>

        {/* 2 - useState e input*/}
        <p>Digite sua idade:</p>

        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type='submit' value='submit'/>     
        </form>
        <p>Voce tem {age} anos</p>

        <hr />
    </div>

}

export default HookUseState