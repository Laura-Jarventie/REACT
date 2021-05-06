import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recepypage from "../pages/Recepypage";
import MargitinRecipeForm from "../pages/MargitinRecipeForm";
import About from "../pages/About";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recepies" component={Recepypage} />
        <Route path="/MargitinRecipeForm" component={MargitinRecipeForm} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
