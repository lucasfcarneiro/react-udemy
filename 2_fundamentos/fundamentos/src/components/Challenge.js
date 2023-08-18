const Challenge = ()=> {
    const a = 138;
    const b = 27;

return(
    <div>
        <h1>Valor 1: {a} Valor 2: {b}</h1>
        <button onClick = {()=>{console.log(a+b)}} >Exibir soma no console</button> 
    </div>
);  
};
export default Challenge;