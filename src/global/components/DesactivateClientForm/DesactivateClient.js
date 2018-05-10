import React,{Component} from 'react';
import axios from 'axios';
import qs from 'qs';
class DesactivateClient extends Component{
    constructor(){
        super();
        this.state={
            op: 3,
            user:"",
            password:""
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
                alert("Usuario desactivado correctamente");
            }     
            else{
                alert(response.data);
            }        
        })
    }
    render(){
        return(
        <form>
            <h1>Desactivar cliente</h1>
            <div className="form-group">
                <label htmlFor="user">Usuario*</label>
                <input type="text" className="form-control" name="user" placeholder="Usuario del cliente" value={this.state.user} onChange={this.handleChange}/>
            </div>
            <input className="btn btn-success" readOnly value="Desactivar Cliente" onClick={this.Submit}/>
        </form>
        );
    }

}
export default DesactivateClient;