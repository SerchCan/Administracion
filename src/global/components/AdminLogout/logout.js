import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import Logoutimg from './imgs/black-logout-16.png';
class Logout extends Component{
    constructor(){
        super();
        this.Logout=this.logout.bind(this);
    }
    logout(){
        axios.post("http://localhost:80/Administracion/Requests/AdminRequests.php",
        qs.stringify({
            op:8
        }))
        .then(function(response){
            alert("Sesión cerrada exitosamente"); 
            //redirect
        });

    }
    render(){
        return(
            <div className="col-md-3 float-right">
                <a onClick={this.Logout}><img alt="logout" src={Logoutimg}/>Logout</a>
            </div>
        );
    }
}
export default Logout;