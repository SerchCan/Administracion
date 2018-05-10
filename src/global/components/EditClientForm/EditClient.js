import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
class EditClients extends Component{
    constructor(){
        super();
        this.state={
            op:2,
            user: "",
            password: "",
            mail: "",
            address: "",
            new_password: ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.Submit=this.Submit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    Submit(){
        axios.post("http://localhost:80/Administracion/Requests/AdminRequests.php",
        qs.stringify(this.state),{withCredentials: true})
        .then(function (response) {
            if(response.data===""){
                alert("Usuario editado correctamente");
            }     
            else{
                alert(response.data);
            }        
        })
    }
    render(){
        return(
            <form>
                <h1>Editar Cliente</h1>
                <div className="form-group">
                    <label htmlFor="user">Usuario*</label>
                    <input type="text" className="form-control" name="user" placeholder="Usuario del cliente" value={this.state.user} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mail">Correo electrónico</label>
                    <input type="text" className="form-control" name="mail" placeholder="Nuevo correo electrónico" value={this.state.mail} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección</label>
                    <input type="text" className="form-control" name="address" placeholder="Nueva dirección" value={this.state.address} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="new_password">Contraseña</label>
                    <input type="password" className="form-control" name="new_password" placeholder="Nueva contraseña" value={this.state.new_password} onChange={this.handleChange}/>
                </div>
                <input className="btn btn-success" readOnly value="Editar Cliente" onClick={this.Submit}/>
            </form>
        );
    }

    
}
export default EditClients;