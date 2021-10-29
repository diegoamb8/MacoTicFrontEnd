import React from "react";
import './Login.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

class Login extends React.Component {

    componentDidMount() {
        document.getElementById("username").focus()
    }

    render() {
        return (
            <div className="container">
                <div className="card card-login mx-auto text-center bg-dark">
                    <div className="card-header mx-auto bg-dark">
                        <span> <img src={Logo} className="w-75" width="100" height="100" alt="Logo" /> </span><br />
                        <span className="logo_title mt-5"> Iniciar Sesión</span>

                    </div>
                    <div className="card-body">
                        <form id="login-form" className="form">
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input id="username" type="text" name="username" className="form-control" placeholder="Usuario" />
                            </div>

                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control" placeholder="Contraseña" />
                            </div>

                            <div className="form-group">
                                <Link to="/home" type="submit" className="btn btn-outline-submit float-right login_btn">Ingresar</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login