import React, { useContext } from 'react';
//import { MyContext } from '../App';
import { FaBars,  FaTimes } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import {Route, Switch, Link, useHistory} from "react-router-dom";
import axios from 'axios';
import './Header.scss';
import UserContext from "../context/userContext";
import { Button } from 'reactstrap';

const Header = () => {

    const context = useContext(UserContext);
    const history = useHistory();

    //const value = useContext(MyContext);
    
    /* //Vista del NavBar Admin
    const adminNavBar = () => {
        return(
            <>
                <li><Link to={`/create_menu`}>Crear menu</Link></li>
                <li><Link to={`/category`}>Categorias</Link></li>
            </>
        )
    }

    //Vista del NavBar Usuario
    const userNavBar = () => {
        return(
            <>
                <li><Link to={`/history`}>Historial</Link></li>
                <li><Link to={`/`}>Logout</Link></li>
            </>
        )
    } */

    const onLogout = async (event) => {
        event.preventDefault();
        localStorage.removeItem('user');
        history.push('/');
    }

    return (
        <header>
            <div className="menu"><FaBars/></div>
            <div className="logo">
                <h1><Link to = {`/`}>Restaurante</Link></h1>
            </div>
            <ul>
                <li><Link to={`/register`}>Registro Usuario</Link></li>

                <li><Link to={`/login`}>Ingreso Administrador</Link></li>

                {context.users.rol &&
                  context.users.rol == "Admin" && (
                <li><Link to={`/menu/list`}>Ver listado de menú</Link></li>
                  )}

                {context.users.rol &&
                  context.users.rol == "Admin" && (
                <li><Link to={`/menu/new`}>Crear nuevo menú</Link></li>
                  )}

                <li><Button onClick={onLogout} to={`/`}>Logout</Button></li>

                <li><FaTimes className="menu"/></li>
            </ul>
            <div className="cartIcon">
                <span>0</span>
                    <GiCookingPot style={{fontSize: "1.8rem"}}/>
            </div>     
        </header>
    );
}

export default Header;