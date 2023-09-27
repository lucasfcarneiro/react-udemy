//CSS
import styles from "./Home.module.css"

//hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

//components

const Home = () => {

  const [query, setQuery] = useState("")
  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)} />
        <button className="button button-dark">Pesquisar</button>
      </form>
      <div>
        <h1>posts</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nao foram encontrados posts</p>
            <Link to="/posts/create" className="button">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home