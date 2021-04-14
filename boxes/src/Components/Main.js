import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AnimalsList from "./AnimalsList";
import BoxesList from "./BoxesList";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <h1>This is the gallery page</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/boxes">Boxes</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/boxes" component={BoxesList}></Route>
        <Route path="/animals" component={AnimalsList}></Route>
      </Switch>
    </div>
  );
};

export default Main;
