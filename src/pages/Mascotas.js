import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke'
import { Link } from 'react-router-dom'

class Mascotas extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            mascotas: []
        }
    }

    async componentDidMount() {
        const response = await APIInvoke.invokeGET("/api/v1/mascota")
        this.setState({
            mascotas: response
        })
    }

    async remove(e, mascota) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/api/v1/mascota/${mascota.id}`)
    }

    async componentDidUpdate() {
        const response = await APIInvoke.invokeGET("/api/v1/mascota")
        this.setState({
            mascotas: response
        })
    }

    render() {

        const arregloMascotas = this.state.mascotas

        return (
            <div>
                <Navbar />
                &nbsp;&nbsp;
                <div className="main container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/mascotas-crear" className="btn btn-outline-light">Registrar</Link>

                            <div className="col-md-12">&nbsp;</div>
                            {
                                arregloMascotas.length === 0 ? <div className="alert alert-warning">No existen Registros.</div> :
                                    <table class="table table-light text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Edad</th>
                                                <th scope="col">Tipo</th>
                                                <th scope="col">Responsable</th>
                                                <th scope="col">Servicio</th>
                                                <th scope="col">Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloMascotas.map(
                                                    mascota =>
                                                        <tr>
                                                            <td>{mascota.id}</td>
                                                            <td>{mascota.nombre}</td>
                                                            <td>{mascota.edad}</td>
                                                            <td>{mascota.tipo}</td>
                                                            <td>{mascota.responsable}</td>
                                                            <td>{mascota.servicio}</td>
                                                            <td>
                                                                <Link to="/mascotas-editar" className="btn btn-info btn-sm" title="Editar">
                                                                    <i className="fa fa-edit"></i>
                                                                </Link>
                                                                &nbsp;&nbsp;
                                                                <button onClick={(e) => this.remove(e, mascota)} className="btn btn-danger btn-sm" title="Eliminar">
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
export default Mascotas