import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name,setName] = useState("joao")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora se o x for false, sim!</p>}

        <h1>If Ternario</h1> 
        {name === "joao" ? ( 
            <div>
                <p>O nome é Joao</p>
            </div>
        ):(
            <div>
                <p>Nome nao encontrado</p>
            </div>
        )}

        <button onClick={() => setName("Matheus")}>Alterar nome</button> 
    </div>
  )
}

export default ConditionalRender