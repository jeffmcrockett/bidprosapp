import './App.css';
import Events from './components/events.js';
import Login from './components/login.js';
import Items from './components/items.js';
import Item from './components/item.js';
import Registration from './components/registration.js';
import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <h3>STILL WORKING OUT A FEW THINGS, WILL BE DONE BY EOD SEPT 9</h3>
        <Link to="/">Login</Link>
        <Link to ="/registration">Registration</Link>
        <Link to="/events">Events</Link>
        <Link to="/items">Items</Link>
        <Link to="/item">Item</Link>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/items/:eventId">
            <Items />
          </Route>
          <Route path="/item/:itemId">
            <Item />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;