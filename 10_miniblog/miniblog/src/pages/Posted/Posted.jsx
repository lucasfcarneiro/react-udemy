import styles from "./Posted.module.css"

//hooks
import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument";

const post = () => {

    const {id} = useParams();
    const {document:posted, loading} = useFetchDocument("posts", id)

    return (
        <div className={styles.posted_container}>
            {loading && <p>Carregando post...</p>}
            {posted && (
                <>
                <h1>{posted.title}</h1>
                <img src = {posted.image} alt={posted.title}/>
                <p>{posted.body}</p>
                <h3>Este poste trata sobre:</h3>
                <div className={styles.tags}>
                {posted.tagsArray.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
                </div>
                </>
            )}
        </div>
    )
}

export default post