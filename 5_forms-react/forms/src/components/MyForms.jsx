import { useState } from 'react'
import './MyForms.css'

const MyForms = ({ user }) => {

    // gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault() //Impede a pagina de recarregar
        console.log(name, email, bio, role)

        // limpar formulario
        setEmail("")
        setName("")
        setBio("")
    };

    return (
        <div>
            {/* criacao de forms com funcao externa*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name"
                        placeholder='Digite seu nome'
                        onChange={handleName}
                        value={name} />
                </div>
                {/* label envolvendo input modificando dados direto no onchange */}
                <label>
                    <span>E-mail:</span>
                    <input type="email"
                        name='email'
                        placeholder='Digite seu e-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </label>

                {/* text area */}
                <label>
                    <span>Bio:</span>
                    <textarea name="name"
                        placeholder='Descricao do usuario'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    ></textarea>
                </label>

                {/* select */}
                <label>
                    <span>Funcao no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuario</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms