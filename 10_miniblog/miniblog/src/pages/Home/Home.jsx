//CSS
import styles from "./Home.module.css"

//hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

//components
import PostDetail from "../../components/PostDetail";
 
const Home = () => {
  const [query, setQuery] = useState("");

  const { documents: posts, loading } = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button button-dark">Pesquisar</button>
      </form>
      <div className={styles.home}>
        {loading && <p>Carregando...</p>}

        {posts ? (posts.map((post) => <PostDetail key={post.id} post={post}/>)
        ) : (
          <div className={styles.noposts}>
            <p>Nao foram encontrados posts</p>
            <Link to="/posts/create" className="button">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
