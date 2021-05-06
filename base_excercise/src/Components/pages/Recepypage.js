import React, { useState, useEffect } from "react";
import SearchBox from "./Searchbox";
import RecepyList from "./RecepyList";
import axios from "axios";

const Recepypage = () => {
  const [recepies, setRecepty] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/recepies")
      .then((res) => setRecepty(res.data));
  }, []);

  const searchValueHandler = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  const recipeFilter = recepies.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      recipe.recipeCategory.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  return (
    <main>
      <SearchBox search={searchValueHandler} />
      <RecepyList recepies={recipeFilter} />
    </main>
  );
};

export default Recepypage;
