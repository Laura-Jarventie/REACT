import React, { Component } from "react";

import RecepyList from "./RecepyList";

class Recepies extends Component {
  state = {
    recepies: [],
    isLoading: false,
    searchInput: "",
  };

  SearchBox = (props) => {
    return (
      <div>
        <input
          type="text"
          className="searchBox"
          onChange={props.search}
          placeholder="Etsi resepti"
        ></input>
      </div>
    );
  };

  SearchSelector = (props) => {
    return (
      <div>
        <input
          type="text"
          className="searchBox"
          onChange={props.search}
          placeholder="Kategoria"
        ></input>
      </div>
    );
  };

  searchValueHandler = (event) => {
    console.log("input was used");
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/recepies")
      .then((resp) => resp.json())
      .then((data) => this.setState({ recepies: data, isLoading: false }));
  }

  render() {
    const recipeFilter = this.state.recepies.filter((recipe) => {
      return (
        recipe.name &&
        recipe.recipeCategory
          .toLocaleLowerCase()
          .includes(this.state.searchInput.toLocaleLowerCase())
      );
    });

    const recepylist = recipeFilter.map((recipe) => {
      return (
        <RecepyList
          name={recipe.name}
          key={recipe.id}
          recipeCategory={recipe.recipeCategory}
          recipeIngredient={recipe.recipeIngredient}
          recipeInstructions={recipe.recipeInstructions}
        />
      );
    });

    return (
      <div className="recipes">
        <div className="card2">
          <this.SearchBox search={this.searchValueHandler} />
          <this.SearchSelector search={this.searchValueHandler} />
        </div>
        <div>{recepylist}</div>
      </div>
    );
  }
}

export default Recepies;
