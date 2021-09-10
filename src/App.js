import './App.css';
import Events from './components/events.js';
import Login from './components/login.js';
import Items from './components/items.js';
import Item from './components/item.js';
import Weather from './components/weather.js'
import Registration from './components/registration.js';
import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Link to="/">login</Link>
        <Link to ="/registration">Registration</Link>
        <Link to="/events">Events</Link>
        <Link to="/items">Items</Link>
        <Link to="/item">Item</Link>
        <Link to="/weather">Weather</Link>
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
          <Route path="/item/:eventId/:itemId">
            <Item />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;