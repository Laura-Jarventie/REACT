import React from "react";

const RecepyList = (props) => {
  return (
    <div className="receptycard">
      <ul key={props.id}>
        <h2>{props.name}</h2>
        <h4>{props.recipeCategory}</h4>
        <ul>
          {props.recipeIngredient.map((ingredients) => {
            return <p> {ingredients} </p>;
          })}
        </ul>
        <h4>Valmistus:</h4>
        {props.recipeInstructions}
      </ul>
    </div>
  );
};

export default RecepyList;
