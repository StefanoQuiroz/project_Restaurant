import React from 'react';
import styled from 'styled-components';

const FoodItemStyled = styled.div`
  background: #fff;
  border:.1rem solid rgba(0,0,0,.2);
  border-radius: .5rem;
  width: 85%;
  box-shadow: 2px 2px 4px 0px rgb(0 0 0 / 75%);
  margin-bottom: 5rem;
  :hover{
    transform: translateY(2px);
  }

  .image{
    height: 25rem;
    width: 98%;
    padding: 1.5rem;
    overflow: hidden;
    position: relative;

    img{
      height: 100% !important;
      width: 100% !important;
      border-radius: .5rem;
      object-fit: cover;
    }
    
  }

  .content{
      padding: 2rem;
      padding-top: 0;
      text-align: left;

      h3{
        color: var(--green);
        font-size: 2.5rem;
        font-weight: 600;
        
      }

      p{
        color: var(--light-color);
        font-size: 1.8rem;
        font-weight: 550;
        padding: .5rem 0;
        line-height: 1.5;
      }

      .price{
        color: var(--green);
        margin-left: 1rem;
        font-size: 2.8rem;
        font-weight: 600;
        
      }
    }
  
`;

export default function FoodItem({image,title,description,price}) {
    
  return (
    <FoodItemStyled className="box">
      <div className="image">
        <img src={image} alt="comida"style={{height:"100px",width:"100px"}}/>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" class="btn">add to cart</a>
        <span className="price">{price}</span>
      </div>
    </FoodItemStyled>
  )
}
