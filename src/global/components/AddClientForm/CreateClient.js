import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

class CreateClient extends Component{
    constructor(){
        super();
        this.state={
            op:1,
            name: "", 
            mail: "", 
            user: "", 
            password: "",
            address: "", 
            genre: "MASCULINO",
            rfc: "", 
            curp: "", 
            id_pais: 1, 
            balance: "",
            details: "",
            tipoCuenta: "CHEQUES", 
            pin: 4321
        }
        this.handleChange=this.handleChange.bind(this);
        this.Submit=this.Submit.bind(this);
    }
    handleChange(event){
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
        
    }
    Submit(e){
        e.preventDefault();
        axios.post("http://localhost:80/Administracion/Requests/AdminRequests.php",
        qs.stringify(this.state),{withCredentials: true})
        .then(function(response){
            if(response.data===""){
                alert("Usuario creado correctamente");
            }
            else{
                alert(response.data);
            } 
        })
    }

    render(){
        //name: , mail: , user: , password: ,address: , genre: ,rfc: , curp: , id_pais: , balance: ,details: ,tipoCuenta: , pin:
        return(
            <form>
                <h1>Crear Cliente</h1>
                <div className='form-group'>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" className="form-control" name="name" placeholder="Nombre" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="text" className="form-control" name='mail' placeholder="Correo electrónico" value={this.state.mail} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="user">Usuario:</label>
                    <input type="text" className="form-control" name='user' placeholder="Usuario" value={this.state.user} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Contraseña:</label>
                    <input type='text' className="form-control" name='password' placeholder="Contraseña" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="address">Dirección:</label>
                    <input type="text" className="form-control" name='address' placeholder="Dirección" value={this.state.address} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="genre">Género</label>
                    <select className="form-control" name='genre' placeholder="Género" value={this.state.genre} onChange={this.handleChange}>
                        <option value="MASCULINO">Masculino</option>
                        <option value="FEMENINO">Femenino</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="rfc">RFC:</label>
                    <input type="text" className="form-control" name='rfc' placeholder="RFC" value={this.state.rfc} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="curp">CURP:</label>
                    <input type="text" className="form-control" name='curp' placeholder="CURP" value={this.state.curp} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="pais">Pais:</label>
                    <select className="form-control" name='id_pais' placeholder="País" value={this.state.id_pais} onChange={this.handleChange}>
                        <option value="1">México</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="balance">Balance:</label>
                    <input type="number" className="form-control" name='balance' placeholder="Balance" value={this.state.balance} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="details">Detalles</label>
                    <input type="text" className="form-control" name='details' placeholder="Detalles" value={this.state.details} onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="tipocuenta">Tipo de cuenta</label>
                    <select className="form-control" name='tipoCuenta' placeholder="Tipo de Cuenta" value={this.state.tipoCuenta} onChange={this.handleChange}>
                        <option value="CHEQUES">Cheques</option>
                        <option value="AHORROS">Ahorros</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="pin">PIN</label>
                    <input type="number" className="form-control" name='pin' value={this.state.pin} onChange={this.handleChange} placeholder="PIN 4 digitos" />
                </div>
                <input className="btn btn-success" readOnly value="Añadir Cliente" onClick={this.Submit}/>
            </form>
        )
    }
}
export default CreateClient;