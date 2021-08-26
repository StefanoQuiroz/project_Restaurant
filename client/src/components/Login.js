import React, { useContext, useState } from 'react';
import {Route, Switch, Link, useHistory} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import './Login.scss';
import { Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';
import UserContext from "../context/userContext";
//export const loginContext = createContext();

const Login = () => {

    //const [isAdmin, setIsAdmin] = useState(false);

    const context = useContext(UserContext);
    const {users, setUsers} = context;
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    const history = useHistory();
    const home = (event) => {
        history.push("/")
    }

    const onChange = (event) => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = (event) => {
        event.preventDefault();
        axios.post("/api/login", user).then((resp) => {
          if (resp.data && !resp.data.error) {
            setUsers(resp.data.data)
            localStorage.setItem("user", JSON.stringify(resp.data.data));
            home(event);
          } else {
    
            Swal.fire('Error', resp.data.mensaje, 'error');
          }
        });
      };




    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post("/api/login", user)
    //         .then(response => {
    //             //console.log("rol", response.data.data.rol)
    //             //response.data.data.rol === 1 ? setIsAdmin(true) : setIsAdmin(false);
    //             if(response.data && !response.data.error){
    //                 home(event);
    //             } else {
    //                 Swal.fire({
    //                     icon:"error",
    //                     title: "Error - Login",
    //                     text: response.data.message
    //                 })
    //             }
    //         });
    //     }
    // //console.log("Es admin ?", isAdmin);
    // //cambie algo
    const {email, password} = user;
    return (

        <>
        <div>
            <Row>
                <Button><Link to= {`/menu`}>Ver menú</Link></Button>
            </Row>
        </div>

        <div className="loginPage"> 

        <Row>
            <form onSubmit={login}>
                <h2>Ingreso de Administrador</h2>
                <input type="email" name="email" value={email} placeholder="Email" onChange={onChange} required/>
                <input type="password" name="password" value={password} placeholder="Contraseña" onChange={onChange} required/>
                <div className="row">
                    <button type="submit">Login</button>
                    <Link to={`/register`}>Registrarse</Link>
                </div>
            </form>
        </Row>
        </div>
        </>
    );
}

export default Login;