import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recepies from "../pages/Recepies";
import About from "../pages/About";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Recepies" exact component={Recepies} />
        <Route path="/About" exact component={About} />
      </Switch>
    </main>
  );
};

export default Main;
