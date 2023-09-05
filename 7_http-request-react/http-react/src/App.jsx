import './App.css'
import { useState, useEffect } from 'react'

//Custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [myProducts, setMyProducts] = useState([]);

  //custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [testeId, setTesteId] = useState(null)

  //COMENTARIO 2

  //Adding products
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, price
    };

    //  COMENTARIO 1
    //refectoring POST
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  };

  const handleDelete = (id) => {
    httpConfig(id,"DELETE")
  }

  return (
    <div >
      <h1>Lista de produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && <ul>
        {/* mapeando os produtos e exibindo */}
        {items && items.map((product) => (
          <li key={product.id}> {product.name} - R$: {product.price}
            <button onClick={()=> handleDelete(product.id)} >Deletar</button> </li>
        ))}
      </ul>}
      <div className='add-products'>
        <form onSubmit={handleSubmit}>
          <label>Nome:
            <input type='text'
              name="name"
              value={name}

              onChange={(e) => setName(e.target.value)} />
          </label>

          <label> Preço:
            <input type='text'
              price="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)} />
          </label>

          {/* State de Loading no post */}
          {loading && <input type="submit" value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>


    </div>
  )
}

export default App

//  COMENTARIO 1
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(product)
    //   });

    //   //Dynamic Loading
    //   const addedProduct = await response.json();

    //   setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //COMENTARIO 2
  // //Request data from API
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);

  //     const data = await response.json();

  //     setProducts(data);
  //   }
  //   fetchData()
  // }, []);