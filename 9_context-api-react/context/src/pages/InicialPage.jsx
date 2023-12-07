//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

//4 refatorando com o hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const InicialPage = () => {
  //const { counter } = useContext(CounterContext);
const {counter} = useCounterContext();

//5 context mais complexo
const {color,dispatch} = useTitleColorContext();

//6 alterando context complexo
const setTitleColor = (color) => {
dispatch({type: color});
};

  return (
    <div>
      <h1 style={{color:color}}>InicialPage</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 alterando o valor contexto */}
      <ChangeCounter />
      {/* 6 alterando context complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default InicialPage