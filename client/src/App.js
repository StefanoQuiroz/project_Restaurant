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

function App() {
  const [users, setUsers] = useState({});
  const [listState, setListState] = useState({});

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
            <body>
              <Route exact path={`/`}>
                <Home />
              </Route>
              <Route exact path={`/menu`}>
                <Menu />
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
            </body>
          </div>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
