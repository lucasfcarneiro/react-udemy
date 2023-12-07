import { useCounterContext } from "../hooks/useCounterContext";

const MiddlePage = () => {
  const {counter } = useCounterContext();
  return (
    <div>
      <h1>Middle Page</h1>
      <p>Valor do contador: {counter}</p>
      {/* alterando o valor contexto */}
    </div>
  )
}

export default MiddlePage