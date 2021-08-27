import React, {useState} from 'react'
import { Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';
import {Route, Switch, Link, useHistory} from "react-router-dom";
import axios from 'axios';


const FoodLog = (props) => {

    const [stateMenu, setStateMenu] = useState({
        name:"",
        description:"",
        category:"",
        price:"",
        image: ""
    });

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setStateMenu({
          ...stateMenu,
          [name]: value,
        });
      };

    const history = useHistory();
    const list = (event) => {
      history.push("/menu/list")
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        axios.post('/api/menu/new', stateMenu)
        .then (res => {
            props.setListState( [...props.listState, res.data])
            list(event);
        })
        .catch (error => {
            console.log("Error", error);
        })
    }


  return (

    <Container style={{border:'2px solid black', marginTop:'2rem', backgroundColor:'white'}}>
            <Form onSubmit={onSubmitForm}>
                <Row>
                    <h4 style={{textAlign: 'center', marginTop:'2rem'}}>Registro de menú</h4>
                </Row>
                <FormGroup>
                    <Label for="dishName" sm={4}>Nombre del plato o bebida:</Label>
                    <Col sm={8}>
                        <Input type="text" name="name" id="dishName" value={stateMenu.name} onChange = {handleChangeForm} style={{border: '2px solid black'}}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label for="dishDescription" sm={4}>Descripción del plato o bebida:</Label>
                    <Col sm={8}>
                        <Input type="text" name="description" id="dishDescription" value={stateMenu.description} onChange = {handleChangeForm} style={{border: '2px solid black'}}/>
                    </Col>
                </FormGroup>
            
                <FormGroup>
                    <Label for="dishType" sm={4}>Tipo de plato o bebida:</Label>
                    <Col sm={8}>
                        <Input type="select" name="category" id="dishType" value={stateMenu.category} onChange = {handleChangeForm} style={{border: '2px solid black'}}>
                            <option>Seleccione un tipo de plato</option>
                            <option value="entrada">Entrada</option>
                            <option value="plato-principal">Plato principal</option>
                            <option value="postres">Postres</option>
                            <option value="bebidas">Bebidas</option>
                        </Input>
                    </Col>
                </FormGroup>
            
                <FormGroup>
                    <Label for="dishPrice" sm={4}>Precio del plato o bebida:</Label>
                    <Col sm={8}>
                        <Input type="number" name="price" id="dishPrice" value={stateMenu.price} onChange = {handleChangeForm} style={{border: '2px solid black'}}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label for="dishImage" sm={4}>Imagen del plato</Label>
                    <Col sm={8}>
                        <Input type="text" name="image" id="dishImage" value={stateMenu.image} onChange = {handleChangeForm} style={{border: '2px solid black'}}/>
                        <Row>
                        <FormText color="muted">
                            Subir link imagen del plato o bebida.
                        </FormText>
                        </Row>
                    </Col>
                </FormGroup>

                <FormGroup row style={{padding: '1rem'}}>
                    <Col xs>
                        <Button color="dark" size='lg' style={{width:'100%', color:'#fff' , fontWeight:'bold', border:'2px solid black'}} type="submit">Crear nuevo menú</Button>
                    </Col>
                </FormGroup>  
            
            </Form>
        </Container>

  );
}

export default FoodLog