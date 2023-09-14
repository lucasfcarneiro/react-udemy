import { useParams } from "react-router-dom"

const Product = () => {
    // rota dinamica
    const { id } = useParams();

  return (
    <div>Id do produto: {id}</div>
  )
}

export default Product