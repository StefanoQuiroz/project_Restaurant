import React from 'react'
import { Button } from 'reactstrap';
const Home = () => {
    return (
        <div>
            <h1>Bienvenido</h1>
            <Button><Link to={`/menu`}>Ver menú</Link></Button>
        </div>
    )
}

export default Home
