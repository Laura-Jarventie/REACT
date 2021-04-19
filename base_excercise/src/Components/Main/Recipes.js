import React from "react";

const Recipes = ({ recepies }) => {
  return (
    <div>
      <h1>Here come´s recipies soon....</h1>
      <ul>
        {recepies.map((recipe) => {
          return (
            <li key={recipe.name}>
              {recipe.recipeCategory}
              {recipe.recipeIngredient}
              {recipe.recipeInstructions}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

class App extends Recipes {
  state = {
    notes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ recepies: data }));
  }
}
export default Recipes;
