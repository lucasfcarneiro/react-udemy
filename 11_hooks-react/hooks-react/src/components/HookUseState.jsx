import { useState } from 'react'

const HookUseState = () => {
    //1 - useState
    let userName = "Joao";

    const [name, setName] = useState("Lucas");

    const changeNames = () => {
        userName = "Joao Pedro";
        setName ("Lucas Fagundes");
    }

    return <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames} >Alterar nomes</button>
        <hr/>
    </div>

}

export default HookUseState