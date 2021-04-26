import React, { useState, useEffect } from "react";
import axios from "axios";

import RecepyCard from "./RecepyCard";

const RecepyList = () => {
  const [recepty, setRecepty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recepies")
      .then((res) => setRecepty(res.data));
  }, []);

  return (
    <div className="posts">
      {recepty.map((r) => (
        <RecepyCard
          key={r.id}
          name={r.name}
          recipeCategory={r.recipeCategory}
          niceToKnow={r.niceToKnow}
          recipeIngredient={r.recipeIngredient}
          recipeInstruction={r.recipeInstruction}
        />
      ))}
    </div>
  );
};

export default RecepyList;

/*
id,
  name,
  recipeCategory,
  recipeNiceToKnow,
  recipeIngredient,
  recipeInstructions,
  link,

  <ul key={id}>
        <h2>{name}</h2>
        <h4>{recipeCategory}</h4>
        <h4>{recipeNiceToKnow}</h4>
        <ul>
          {recipeIngredient.map((ingredients) => {
            return <p> {ingredients} </p>;
          })}
        </ul>
        <h4>Valmistus:</h4>
        <p>{truncate(recipeInstructions, 2)} ...</p>
      </ul>
      <a href={link}>Lue koko resepti</a>

      */
