
import { uploads } from '../../utils/config'

//components
import Message from '../../components/Message'
import { Link } from 'react-router-dom'
import PhotoItem from '../../components/PhotoItem'

//hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

//redux
import { getPhoto } from '../../slices/photoSlice'


const Photo = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth) //pega o usuario logado
    const { photo, loading, error, message } = useSelector((state) => state.photo)

    //load photo data
    useEffect(() => {
        dispatch(getPhoto(id));
    }, [dispatch, id]);
    
    //comentarios

    //like e comentario

    if (loading) {
        return <p>Carregando...</p>
    }

    return <div id="photo">
        <PhotoItem photo={photo} />
    </div>
};

export default Photo


