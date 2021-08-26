import React, { useContext } from 'react';
//import { MyContext } from '../App';
import { FaBars,  FaTimes } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
<<<<<<< HEAD
import { Link, navigate } from 'react-router-dom';
=======
import { Link, useHistory } from 'react-router-dom';
>>>>>>> main
import axios from 'axios';
import './Header.scss';
import UserContext from "../context/userContext";

const Header = () => {
<<<<<<< HEAD

    const context = useContext(UserContext);
=======
    const history = useHistory();
    //const value = useContext(MyContext);
>>>>>>> main
    
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

    const onLogout = async (e) => {
        e.preventDefault();
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
                {context.users.userType &&
                  context.users.userType == "Admin" && (
                <li><Link to={`/menu/list`}>Ver listado de menú</Link></li>
                  )}
                <li><Link onClick={onLogout} to={`/`}>Logout</Link></li>
                <li><FaTimes className="menu"/></li>
            </ul>
            <div className="cartIcon">
                <span>0</span>
                <Link to={`/cart`}>
                    <GiCookingPot style={{fontSize: "1.8rem"}}/>
                </Link>    
            </div>     
        </header>
    );
}

export default Header;