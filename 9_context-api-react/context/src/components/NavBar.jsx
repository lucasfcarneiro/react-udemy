import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/inicial">Inicial Page</NavLink>
            <NavLink to="/middle">Middle Page</NavLink>
            <NavLink to="/end">End Page</NavLink>
        </nav>
    )
}

export default NavBar