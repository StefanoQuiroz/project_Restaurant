import React, { useEffect } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';


/* import menu2 from '../images/menu-2.jpg';
import menu3 from '../images/menu-3.jpg';
import menu4 from '../images/menu-4.jpg';
import menu5 from '../images/menu-5.jpg';
import menu6 from '../images/menu-6.jpg';
import menu7 from '../images/menu-7.jpg';
import menu8 from '../images/menu-8.jpg'; */


import { Row,Col, Container } from 'reactstrap';

export default function MenuComponent(props) {
  const {listState, setListState} = props;

  return (
    <Container className="menu" id="menu">
      <button className="btn logout">Logout</button>
      <Row>
        <h3 class="sub-heading"> our menu </h3>
      </Row>
      <Row>
        <h1 class="heading"> today's speciality </h1>
      </Row>
      
      <Row className="row">
        { listState && listState.map((item, index) => (
          <Col sm={3} className="col" key={index}>
            <MenuItem 
                image={item.image} 
                title={item.name} 
                description={item.description}
                price={item.price}
              />
          </Col>

        ))}
        

        {/* <Col sm={3} className="col">
          <MenuItem 
              image={menu2} 
              title="Cheeseburger" 
              description="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium."
              price="$7.99"
            />
        </Col>

        <Col sm={3} className="col">
          <MenuItem 
              image={menu3} 
              title="Pancakes" 
              description="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium."
              price="$5.99"
            />
        </Col>

        <Col sm={3} className="col">
          <MenuItem 
              image={menu4} 
              title="Ice Cream" 
              description="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium."
              price="$4.99"
            />
        </Col>
 */}
      </Row>
{/* 
      <Row className="row">
        <Col sm={3} className="col" >
          <MenuItem 
              image={menu5} 
              title="Fruit Delight" 
              description="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium."
              price="$9.99"
            />
        </Col>

        <Col sm={3} className="col">
          <MenuItem 
              image={menu6} 
              title="3 Cupcakes" 
              description="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium."
              price="$9.99"
            />
        </Col>

        <Col sm={3} className="col">
          <MenuItem 
              image={menu7} 
              title="Fruit Juice" 
              description="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium."
              price="$5.99"
            />
        </Col>

        <Col sm={3} className="col">
          <MenuItem 
              image={menu8} 
              title="Fruit Salad" 
              description="Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium."
              price="$6.99"
            />
        </Col>

      </Row> */}
      
      
     
    </Container>
  )
}
