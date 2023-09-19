import { useParams } from "react-router-dom"

const Info = () => {

    const {id} = useParams()
    
  return (
    <div>
        <h1>Mais informacoes sobre o produto {id}</h1>
    </div>
  )
}

export default Info