import React from "react";

const RecepyCard = ({
  id,
  name,
  recipeCategory,
  niceToKnow,
  recipeIngredient,
  recipeInstructions,
}) => {
  return (
    <div>
      <>{id}</>
      <h2>{name}</h2>
      <h4>{recipeCategory}</h4>
      <h4>{niceToKnow}</h4>
      <h4>Ainekset:</h4>
      EI NÄY!!
      <ul>
        {recipeIngredient.map(function (d, idx) {
          return <p key={idx}>{d.ingredients}</p>;
        })}
      </ul>
      <h4>Valmistus:</h4>
      <p>{recipeInstructions}</p>
    </div>
  );
};

export default RecepyCard;
