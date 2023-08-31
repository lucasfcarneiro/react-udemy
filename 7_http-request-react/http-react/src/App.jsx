import './App.css'
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([])

  //resgatando dados na api
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);

      const data = await response.json();

      setProducts(data);
    }
    fetchData()
  }, []);

  return (
    <div >
      <h1>Lista de produtos</h1>
      <ul>
        {/* mapeando os produtos e exibindo */}
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
    </div>
  )
}
export default App