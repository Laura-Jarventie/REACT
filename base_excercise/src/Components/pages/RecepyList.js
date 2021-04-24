import React from "react";

const RecepyList = ({ recepies }) => {
  return (
    <div>
      <h1>Your Recepy:</h1>
      <div className="receptycard">
        <ul>
          {recepies.map((recipe) => {
            return (
              <li key={recipe.id}>
                <h2>{recipe.name}</h2>
                {recipe.image}
                <h4>{recipe.recipeCategory}</h4>
                <ul>
                  {recipe.recipeIngredient.map((ingredients) => {
                    return <p> {ingredients} </p>;
                  })}
                </ul>
                <h4>Valmistus:</h4>
                {recipe.recipeInstructions}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecepyList;
