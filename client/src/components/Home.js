import React from 'react'
import { Button } from 'reactstrap';
import {Route, Switch, Link, useHistory} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Bienvenido</h1>
            <Button><Link to={`/menu`}>Ver menú</Link></Button>
        </div>
    )
}

export default Home
