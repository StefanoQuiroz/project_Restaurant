import React, { useEffect, useState } from "react";
import UserContext from "./context/userContext";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import FoodLog from "./components/FoodLog";
import FoodList from "./components/FoodList";
import FoodEdit from "./components/FoodEdit";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {

  const [users, setUsers] = useState({});
  const [listState, setListState] = useState([]);

  useEffect(() =>{
    axios.get(`/api/menu`)
    .then(response => setListState(response.data.data))
    .catch(error => {
      console.log("error", error);
      Swal.fire({
          icon:"error",
          title: "Error en el Menu",
          text: error
      

    })
  }) 
  }, [])

  //console.log(listState);

  

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUsers(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <Router>
        <Switch>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>
              <Route exact path={`/`}>
                <Home />
              </Route>
              <Route exact path={`/menu`}>
                <Menu listState={listState} setListState={setListState} />
              </Route>
              <Route exact path={`/login`}>
                <Login />
              </Route>
              <Route exact path={`/register`}>
                <Register />
              </Route>
              <Route exact path="/menu/new">
                <FoodLog listState={listState} setListState={setListState} />
              </Route>
              <Route exact path="/menu/list">
                <FoodList menuArray={listState} setMenuArray={setListState} />
              </Route>
              <Route exact path="/menu/edit/:id">
                <FoodEdit />
              </Route>
          </div>
        </Switch>
      </Router>
    </UserContext.Provider>
  )

}

export default App;
