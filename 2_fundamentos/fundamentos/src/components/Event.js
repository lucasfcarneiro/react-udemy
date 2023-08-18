const Event = () => {

    const handleMyEvent = (e) =>
    {
        console.log(e); //exibi no console as informacoes detalhadas do evento
        console.log("Ativou o evento de clique ")
    }
    const renderSomething = (x) =>{
        if(x){
            return <h1>renderizar isso</h1>
        }else{
            return <h1>renderizar isso aqui tambem</h1>
        }
    }
        return(
            <div>
                <div>
                    <button onClick =  {handleMyEvent} >Clique aqui</button>
                </div>
                <div>
                    <button onClick = {() => console.log("clicou")} >Clique aqui 2</button>
                </div>
                <div>
                    <button onClick = {() =>{
                        if(true){
                            console.log("logica no html! nao deveria estar aqui.")
                        }

                    }}>Clique aqui 3</button>
                </div>
                {renderSomething(true)};
                {renderSomething(false)};
            </div>
        );
    };
    
    export default Event;