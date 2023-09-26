import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que voce tem interesse!</h3>
        <p>Mini <span>Blog</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer