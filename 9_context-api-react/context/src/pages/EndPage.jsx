import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const EndPage = () => {
  const { counter } = useCounterContext()

  const { color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }} >End Page</h1>
      <p>Valor do contador: {counter}</p>
      {/* alterando o valor contexto */}
    </div>
  )
}

export default EndPage