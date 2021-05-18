import RecepyCard from "./RecepyCard";
import React, { useState, useEffect } from "react";

const RecepyList = ({ recepies }) => {
  return (
    <div className="posts">
      {recepies &&
        recepies.map((r) => (
          <>
            <RecepyCard
              key={r.id}
              desc={r.desc}
              link={r.id}
              name={r.name}
              recipeCategory={r.recipeCategory}
              niceToKnow={r.niceToKnow}
              recipeIngredient={r.recipeIngredient}
              recipeInstructions={r.recipeInstructions}
            />
          </>
        ))}
    </div>
  );
};

export default RecepyList;
