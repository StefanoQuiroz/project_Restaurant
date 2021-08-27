import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const FoodEdit = (props) => {

    const [stateMenu, setStateMenu] = useState({});

    const {id} = useParams();

    useEffect(() => {
    axios
      .get(`/api/menu/${id}`)
      .then((resp) => {
        setStateMenu({
          ...resp.data.data,
        });
      })
      .catch((error) => console.log("error en data", error));
  }, []);

    const handleChangeForm = (ev) => {
    const { name, value } = ev.target;
    setStateMenu({
      ...stateMenu,
      [name]: value,
    });
  };

  const history = useHistory();
    const list = (event) => {
      history.push("/menu/list")
    }

  const updateMenu = (event) => {
    event.preventDefault();
    axios
      .put(`/api/menu/update/${id}`, stateMenu)
      .then((res) => {
        console.log("Edición Realizada");
        list(event)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

    return (

        <Container style={{border:'2px solid black', marginTop:'2rem', backgroundColor:'white'}}>
        <Form onSubmit={updateMenu}>
            <Row>
                <h4 style={{textAlign: 'center', marginTop:'2rem'}}>Edición del menú</h4>
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
                    <Input type="file" name="image" id="dishImage"/>
                    <Row>
                    <FormText color="muted">
                        Subir imagen del plato o bebida.
                    </FormText>
                    </Row>
                </Col>
            </FormGroup>

            <FormGroup row style={{padding: '1rem'}}>
                <Col xs>
                    <Button color="dark" size='lg' style={{width:'100%', color:'#fff' , fontWeight:'bold', border:'2px solid black'}} type="submit">Editar plato seleccionado</Button>
                </Col>
            </FormGroup>  
        
        </Form>
    </Container>
    )
}

export default FoodEdit