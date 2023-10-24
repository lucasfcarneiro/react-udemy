//CSS
import styles from "./About.module.css"

import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o Mini <span>Blog</span></h1>
      <p>
        Este projeto consiste em um blog feito com o <span>React</span> no Front-End e <span>Firebase </span>
        no Back-End, utilizado o <span>Github</span> para repositório de código e <span>SourceTree</span> como interface.
      </p>
      <Link to="/posts/create" className="button">Criar post</Link>
    </div>
  )
}

export default About