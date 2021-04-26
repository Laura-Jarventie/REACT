import React, { useEffect } from "react";

const RecepyCard = ({
  name,
  recipeCategory,
  niceToKnow,
  recipeIngredient,
  recipeInstruction,
  link,
}) => {
  /*const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };*/

  return (
    <div className="post">
      <div>
        <h2>{name}</h2>
        <h4>{recipeCategory}</h4>
        <h4>{niceToKnow}</h4>
        <ul>
          {recipeIngredient.map((ingredients) => {
            return <p> {ingredients} </p>;
          })}
        </ul>
        <h4>Valmistus:</h4>
        <p>{recipeInstruction}</p>
        {/* {*<p>{truncate(recipeInstruction, 2)} ...</p>*} */}

        <a href={link}>Lue koko resepti</a>
      </div>
    </div>
  );
};

export default RecepyCard;
