import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import './App.css';
import Logout from './global/components/AdminLogout/logout';
import ClientForm from './global/components/AddClientForm/CreateClient';
import EditClientForm from './global/components/EditClientForm/EditClient';
import DesactivateClientForm from './global/components/DesactivateClientForm/DesactivateClient';
import ChangeCardForm from './global/components/ChangeClientCard/ChangeCard';
class App extends Component {
  constructor(){
    super();
    axios.post("http://localhost:80/Administracion/Requests/Login.php",qs.stringify({
      user:"gersiocb",
      password: "newPass",
      type:"Administrador"
    }),{
      withCredentials:true
    })
    .then(function(response){/*
      if(response.data==="Debe de iniciar sesión como Administrador"){
        alert("No tiene permiso de ver está página");
        // Redirect
      }
      if(response.data==="Su sesión ha terminado"){
        alert("Su sesión ha caducado");
        // Redirect
      }*/
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-md-9">
            <h1 className="App-title">Administrador</h1>
            </div>
            <Logout/>
          </div>
        </header>
        <div className="container">
          <ClientForm/>
          <EditClientForm/>
          <DesactivateClientForm/>
          <ChangeCardForm/>
        </div>
        
      </div>
    );
  }
}

export default App;
