import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Recipes" exact component={Recipes} />
        <Route path="/About" exact component={About} />
      </Switch>
    </main>
  );
};

export default Main;
