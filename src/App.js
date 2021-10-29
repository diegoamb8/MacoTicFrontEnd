import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Mascotas from './pages/Mascotas';
import MascotasCrear from './pages/MascotasCrear';
import MascotasEditar from './pages/MascotasEditar';
import Servicios from './pages/Servicios';
import ServiciosCrear from './pages/ServiciosCrear';
import ServiciosEditar from './pages/ServiciosEditar';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/mascotas" exact component={Mascotas} />
          <Route path="/mascotas-crear" exact component={MascotasCrear} />
          <Route path="/mascotas-editar" exact component={MascotasEditar} />
          <Route path="/servicios" exact component={Servicios} />
          <Route path="/servicios-crear" exact component={ServiciosCrear} />
          <Route path="/servicios-editar" exact component={ServiciosEditar} />
        </Switch>
      </Router>
    )
  }
}

export default App;