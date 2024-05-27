import "./Profile.css"

import { uploads } from "../../utils/config"

//components
import Message from "../../components/Message"
import { Link, useResolvedPath } from "react-router-dom"
import { BsFillEyeFill, BsFillPenFill, BsXLg } from "react-icons/bs"

//hooks
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"

//redux
import { getUserDetails } from "../../slices/userSlice"
import userService from "../../services/userService"
import { publishPhoto, resetMessage, getUserPhotos, deletePhoto } from "../../slices/photoSlice"


const Profile = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    const { user: userAuth } = useSelector((state) => state.auth)
    const { user, loading: loadingUser } = useSelector((state) => state.user)
    const { photos,
        loading: loadingPhoto,
        message: messagePhoto,
        error: errorPhoto
    } = useSelector((state) => state.photo)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    //New form and edit form refs
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()


    //Load user data
    useEffect(() => {
        dispatch(getUserDetails(id));
        dispatch(getUserPhotos(id));
    }, [dispatch, id])

    const handleFile = (e) => {
        const image = e.target.files[0]

        setImage(image)
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage());
        }, 2000);
    }

    const submitHandle = (e) => {
        e.preventDefault()
        //service -> slice (colocar o slice no store.jsx) -> component (ex: profile.jsx) 

        const photoData = {
            title,
            image
        }

        //build form data
        const formData = new FormData()

        const photoFormData = Object.keys(photoData).forEach((key) =>
            formData.append(key, photoData[key]))

        formData.append("photo", photoFormData)

        dispatch(publishPhoto(formData))

        setTitle("")

        resetComponentMessage()
    };

    //Delete a photo
    const handleDelete = (id) => {

        dispatch(deletePhoto(id))

        resetComponentMessage()
    }

    if (loadingUser) {
        return <p>Carregando...</p>
    }

    return (
        <div id="profile" >
            <div className="profile-header">
                {user.profileImage && (
                    <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className="profile-description">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>
            {id === userAuth._id && (
                <>
                    <div className="new-photo" ref={newPhotoForm}>
                        <h3>Compartilhe algum momento seu:</h3>
                        <form onSubmit={submitHandle}>
                            <label>
                                <span>Titulo para a foto:</span>
                                <input type="text" placeholder="Insira um titulo" on onChange={(e) => setTitle(e.target.value)} value={title || ""} />
                            </label>
                            <label>
                                <span>Imagem:</span>
                                <input type="file" onChange={handleFile} />
                            </label>
                            {!loadingPhoto && <input type="submit" value="Postar" />}
                            {loadingPhoto && <input type="submit" disabled value="Aguarde..." />}

                        </form>
                    </div>
                    {errorPhoto && <Message msg={errorPhoto} type="error" />}
                    {messagePhoto && <Message msg={messagePhoto} type="success" />}
                </>
            )}
            <div className="user-photos">
                <h2>Fotos publicadas:</h2>
                <div className="photos-container">
                    {photos && photos.length > 0 ? (
                        photos.map((photo) => (
                            <div className="photo" key={photo._id}>
                                {photo.image && (
                                    <img
                                        src={`${uploads}/photos/${photo.image}`}
                                        alt={photo.title}
                                    />
                                )}
                                {id === userAuth._id ? (
                                    <div className="actions">
                                        <Link to={`/photos/${photo._id}`}>
                                            <BsFillEyeFill/>
                                        </Link>
                                        <BsFillPenFill />
                                        <BsXLg onClick={() => handleDelete(photo._id)}/>
                                    </div>
                                ) : (
                                    <Link className="btn" to={`/photos/${photo._id}`}>Ver</Link>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>Ainda não há fotos publicadas</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile