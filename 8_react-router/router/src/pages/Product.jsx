import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // rota dinamica
    const { id } = useParams();

    // carregamento dado individual
    const url = "http://localhost:3000/products/" + id;

    const {data:product,loading,error} = useFetch(url);

    console.log(product)

  return (
    <div>Id do produto: {id}
    {error && <p>{error}</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
    )}

    </div>
  )
}

export default Product