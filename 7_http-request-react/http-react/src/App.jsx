import './App.css'
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //Request data from API
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);

      const data = await response.json();

      setProducts(data);
    }
    fetchData()
  }, []);

  //Adding products
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, price
    };
    const response = await fetch(url, {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
    body: JSON.stringify(product)
    });
    console.log(products)
  };

  return (
    <div >
      <h1>Lista de produtos</h1>
      <ul>
        {/* mapeando os produtos e exibindo */}
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>

      <div className='add-products'>
        <form onSubmit={handleSubmit}>
          <label>Nome:
            <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label> Preço:
            <input type='text' price="price" value={price} onChange={(e) => setPrice(e.target.value)} />

          </label>
          <input type="submit" value="Criar" />
        </form>




      </div>

    </div>
  )
}
export default App