import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke'
import { Link } from 'react-router-dom'

class Servicios extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            servicios: []
        }
    }

    async componentDidMount() {
        const response = await APIInvoke.invokeGET("/api/v1/servicios")
        this.setState({
            servicios: response
        })
    }

    async remove(e, servicio) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/api/v1/servicios/${servicio.id}`)
    }

    async componentDidUpdate() {
        const response = await APIInvoke.invokeGET("/api/v1/servicios")
        this.setState({
            servicios: response
        })
    }

    render() {

        const arregloServicios= this.state.servicios

        return (
            <div>
                <Navbar />
                &nbsp;&nbsp;
                <div className="main container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/servicios-crear" className="btn btn-outline-light">Registrar</Link>

                            <div className="col-md-12">&nbsp;</div>
                            {
                                arregloServicios.length === 0 ? <div className="alert alert-warning">No existen Registros.</div> :
                                    <table class="table table-light text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloServicios.map(
                                                    servicio =>
                                                        <tr>
                                                            <td>{servicio.id}</td>
                                                            <td>{servicio.nombre}</td>
                                                            <td>{servicio.precio}</td>
                                                            <td>
                                                                <Link to="/servicios-editar" className="btn btn-info btn-sm" title="Editar">
                                                                    <i className="fa fa-edit"></i>
                                                                </Link>
                                                                &nbsp;&nbsp;
                                                                <button onClick={(e) => this.remove(e, servicio)} className="btn btn-danger btn-sm" title="Eliminar">
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Servicios