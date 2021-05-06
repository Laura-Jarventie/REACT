import React from "react";
import RecepyCard from "./RecepyCard";

const RecepyList = ({ recepies }) => {
  return (
    <div className="posts">
      {recepies &&
        recepies.map((r) => (
          <RecepyCard
            key={r.id}
            name={r.name}
            recipeCategory={r.recipeCategory}
            niceToKnow={r.niceToKnow}
            recipeIngredient={r.recipeIngredient}
            recipeInstructions={r.recipeInstructions}
          />
        ))}
    </div>
  );
};

export default RecepyList;
