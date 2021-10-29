import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home" className="navbar-brand">
                <img height="50" width="50" src={Logo} alt="Logo MascoTic"/>&nbsp;&nbsp;
                <strong>MascoTic</strong>
            </Link>
            <Link to="/mascotas" className="btn btn-success my-2 my-sm-0 mr-3">Mascotas</Link>
            <Link to="/servicios" className="btn btn-success my-2 my-sm-0 mr-3">Servicios</Link>
        </nav>
    )
}
export default Navbar