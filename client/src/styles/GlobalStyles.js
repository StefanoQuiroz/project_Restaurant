import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
      --green:#27ae60;
      --black:#192a56;
      --orange:#f07a02;
      --light-color:#666;
      --box-shadow:0 .5rem 1.5rem rgba(0,0,0,.1);
    }

    *{
      font-family: 'Nunito', sans-serif;
      margin:0; padding:0;
      box-sizing: border-box;
      text-decoration: none !important;
      outline: none; border:none;
      text-transform: capitalize;
      transition: all .2s linear;
      font-size: 0.6rem;
      scroll-padding-top: 5.5rem; 
      scroll-behavior: smooth; 
    }

    section{
      padding:2rem 9%;
    }


.sub-heading{
    text-align: center;
    color:var(--green);
    font-size: 3rem;
    padding-top: 1rem;
}

.heading{
    text-align: center;
    color:var(--black);
    font-size: 4.5rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 600;
}

.btn{
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.7rem;
    color:#fff;
    background: var(--orange);
    border-radius: .5rem;
    cursor: pointer;
    padding:.8rem 3rem;
}

.btn:hover{
  background-color: var(--green);
  transform: translatey(-3px); 
  color: white;
  font-weight: bold;
}

`;

export default GlobalStyle;