import './App.css';
import Events from './components/events.js';
import Home from './components/home.js';
import Items from './components/items.js';
// import Item from './components/item.js';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar.js";
import { Switch } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <h3>STILL WORKING OUT A FEW THINGS, WILL BE DONE BY EOD SEPT 8</h3>
        <Home />
        <Events />
        <Switch>
          <Route exact path="/" component={<Home />} />
          <Route path="/events" component={<Events />} />
          <Route path="/items" component={<Items />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
