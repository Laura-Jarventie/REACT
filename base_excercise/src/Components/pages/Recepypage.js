import React, { useState, useEffect } from "react";
import SearchBox from "./Searchbox";
import RecepyList from "./RecepyList";
import RecepySingle from "./RecepySingle";
import { useRouteMatch, Route, Switch } from "react-router";
import axios from "axios";

const Recepypage = () => {
  const [recepies, setRecepty] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let match = useRouteMatch();
  const recipeFilter = recepies.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      recipe.recipeCategory.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  useEffect(() => {
    axios
      .get("https://limitless-citadel-22858.herokuapp.com/recipes/all")
      .then((res) => setRecepty(res.data));
  }, []);

  const searchValueHandler = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  return (
    <div>
      <main>
        <SearchBox search={searchValueHandler} />
      </main>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <RecepySingle />
        </Route>
        <Route path={match.path}>
          <RecepyList recepies={recipeFilter} />
        </Route>
      </Switch>
    </div>
  );
};

export default Recepypage;
