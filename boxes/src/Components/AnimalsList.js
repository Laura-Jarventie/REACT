import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import "./Animal.css";
import SearchBox from "./SearchBox/SearchBox";

import { animals } from "./animals";

class AnimalsList extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };
  /* eli ennen piti kirjottaa manuaalisesti, nyt voi vaan tuoda..[
      { id: 1, name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/" },

      {
        id: 2,
        name: "Rabbit",
        img: "https://source.unsplash.com/hS41iEO300E/",
      },

      { id: 3, name: "Wolf", img: "https://source.unsplash.com/WFPWB7Vum1E/" },
    ],*/

  clickHandler = (jotain) => {
    alert("Hello, my name is " + jotain);
  };

  searchValueHandler = (event) => {
    console.log("input was used");
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const animalslist = animalFilter.map((laura) => {
      return (
        <AnimalCard
          name={laura.name}
          clickme={() => this.clickHandler(laura.name)}
          key={laura.name}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        <div className="animallist">{animalslist}</div>;
      </div>
    );
  }
}

export default AnimalsList;
