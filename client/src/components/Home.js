import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Bienvenido</h1>
            <Button><Link to={`/menu`}>Ver menú</Link></Button>
        </div>
    )
}

export default Home
