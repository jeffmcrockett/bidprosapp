import './App.css';
import Events from './components/events.js';
import Home from './components/home.js';
import Items from './components/items.js';
import Item from './components/item.js';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar.js";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={<Home />} />
          <Route path="/events" component={Events} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
