import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";

class ServiciosEditar extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            nombre: '',
            precio: ''
        }

    }

    componentDidMount() {
        document.getElementById("nombre").focus()
    }

    handleChange(e) {
        this.setState({
            nombre: e.target.value,
            precio: e.target.value
        })
    }

    async add() {
        const data = {
            nombre: this.state.nombre,
            precio: this.state.precio
        }

        const response = await APIInvoke.invokePUT("/api/v1/servicios", data)
        console.log(response)

        if (response.id !== 0) {
            this.props.history.push('/servicios')
        } else {
            console.log(response.message)
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container mt-5 ">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <h2 className="text-center text-white">EDITAR SERVICIOS</h2>
                            <div className="form-group">
                                <label for="nombre" className="form-label text-white">Nombre: </label>
                                <input type="text" name="nombre" id="nombre"
                                    className="form-control"
                                    placeholder="Ingrese nombre del servicio"
                                    size="50"
                                    value={this.state.nombre}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label for="precio" className="form-label text-white">Precio: </label>
                                <input type="text" name="precio" id="precio" 
                                    className="form-control"
                                    placeholder="Ingrese el precio del servicio"
                                    size="50"
                                    value={this.state.precio}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="d-grid gap-2 ">
                                <button onClick={this.add.bind(this)} type="submit" tabindex="6" className="btn btn-dark btn-lg">Editar</button>
                                <button type="reset" tabindex="7" className="btn btn-danger btn-lg">Cancelar</button>
                            </div>
                        </div>

                        <div className="col-sm-3">&nbsp;</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ServiciosEditar