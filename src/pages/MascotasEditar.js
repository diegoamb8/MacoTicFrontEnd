import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";

class MascotasEditar extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            nombre: '',
            edad: 0,
            responsable: '',
            servicio: ''
        }

    }

    componentDidMount() {
        document.getElementById("nombre").focus()
    }

    handleChange(e) {
        this.setState({
            nombre: e.target.value,
            edad: e.target.value,
            responsable: e.target.value,
            servicio: e.target.value
        })
    }

    async add() {
        const data = {
            nombre: this.state.nombre,
            edad: this.state.edad,
            responsable: this.state.responsable,
            servicio: this.state.servicio,
        }

        const response = await APIInvoke.invokePUT("/api/v1/mascota", data)
        console.log(response)

        if (response.id !== 0) {
            this.props.history.push('/mascota')
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
                            <h2 className="text-center text-white">EDITAR MASCOTAS</h2>
                            <div className="form-group">
                                <label for="nombre" className="form-label text-white">Nombre: </label>
                                <input type="text" name="nombre" id="nombre"
                                    className="form-control"
                                    placeholder="Ingrese nombre de la mascota"
                                    size="50"
                                    value={this.state.nombre}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label for="edad" className="form-label text-white">Edad: </label>
                                <input type="number" name="edad" id="edad" 
                                    className="form-control"
                                    placeholder="Ingrese la edad de la mascota"
                                    size="50"
                                    value={this.state.edad}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="responsable" className="form-label text-white">Responsable: </label>
                                <input type="text" name="responsable" id="responsable"
                                    className="form-control"
                                    placeholder="Ingrese el responsable de la mascota"
                                    size="50"
                                    value={this.state.responsable}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="servicio" className="form-label text-white">Servicio: </label>
                                <select name="servicio" id="servicio" className="form-control">
                                    <option value="baño" selected="true">Baño</option>
                                    <option value="consulta">Consulta</option>
                                    <option value="cirugia">Cirugia</option>
                                    <option value="otro">Otro</option>
                                    value={this.state.servicio}
                                    onChange={this.handleChange.bind(this)}
                                </select>
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
export default MascotasEditar