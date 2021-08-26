import React, {useEffect} from 'react'
import { Table, Container, Button } from 'reactstrap';
import axios from 'axios';
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, Redirect, useHistory } from 'react-router-dom'

const FoodList = (props) => {

    const history = useHistory();

      //Código para listado del menu
      useEffect(() => {
        axios.get('/api/menu')
          .then(resp => props.setMenuArray(resp.data.data))
          .catch(error => console.log("error en data", error))
      }, []);

      // Código para eliminar
     const deleteMenu = (event, id) => {
        axios.delete(`/api/menu/delete/${id}`)
            .then(res => {
                const menu = props.menuArray.filter(p => p._id !== id);
                props.setMenuArray(menu); 
            })
    }

    const update =(e, id) => {
        history.push('/menu/edit/'+id);
    }

    return (

        <Container style={{border:'2px solid black', marginTop:'2rem', backgroundColor:'white'}}>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre del Plato</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.menuArray.map((menu, index) => (
            <tr key={index}>
              <td>{menu.name}</td>
              <td>{menu.category}</td>
              <td>{menu.price}</td>
              <td>Aquí va la imagen</td>
              <td><Button onClick={e => update(e, menu._id)}><BiEditAlt/></Button></td>
              <td><Button onClick={(event) => deleteMenu(event, menu._id)}><AiOutlineDelete/></Button></td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    )
}

export default FoodList