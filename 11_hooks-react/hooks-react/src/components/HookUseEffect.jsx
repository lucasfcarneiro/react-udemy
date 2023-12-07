import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    //1 - useEffect, sem dependencias. 
    //(Executa sempre que o componente e muda)
    useEffect(() => {
        console.log("Estou sendo executado!")
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    //2 - array de dependecias, vazio. 
    //(executa somente quando o componente e carregado)
    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, []);

    //3 - item no array de dependendia. 
    //(executa so quando algum valor especifico é alterado, no caso o anotherNumber)
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("executado apenas quando o anotherNumber muda")
        }
    }, [anotherNumber])

    //4 - cleanup do useEffect
    useEffect(() => {

        // const timer = setTimeout(() => {
        //     console.log("hello world!");

        //     setAnotherNumber(anotherNumber+1)
        // }, 2000);

        // return () => clearTimeout(timer)
    }, [anotherNumber]);
    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}
            >Mudar anotherNumber</button>
            <hr />
        </div>
    )
}

export default HookUseEffect