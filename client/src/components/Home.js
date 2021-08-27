import React from 'react'
import { useHistory } from 'react-router-dom';
import aboutImg from '../images/about-img.png';
import './Home.css';
const Home = () => {
    const history = useHistory();
    const onLogin = (e) => {
        history.push("/login");
    }

    const onRegister = (e) => {
        history.push("/register")
    }
    return (
        <section className="about" id="about">
        <button className="btn login" onClick={event => onLogin(event)}>Login</button>
        <button className="btn register" onClick={event => onRegister(event)}>Register</button>

        <h1 className="heading"> Menu Restaurante </h1>
      
        <div className="row">

            <div className="image">
                <img src={aboutImg} alt=""/>
            </div>

            <div className="content">
                <h3>best food in the country</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-shipping-fast" ></i>
                        <span>free delivery</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-dollar-sign"></i>
                        <span>easy payments</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-headset"></i>
                        <span>24/7 service</span>
                    </div>
                </div> 
                
            </div>

        </div>

    </section>
    )
}

export default Home



