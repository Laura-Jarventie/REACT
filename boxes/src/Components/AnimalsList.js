import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import "./Animal.css";

class AnimalsList extends Component {
  state = {
    animals: [
      { id: 1, name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/" },

      {
        id: 2,
        name: "Rabbit",
        img: "https://source.unsplash.com/hS41iEO300E/",
      },

      { id: 3, name: "Wolf", img: "https://source.unsplash.com/WFPWB7Vum1E/" },
    ],
  };
  clickHandler = (jotain) => {
    alert("Hello, my name is " + jotain);
  };
  render() {
    const animalslist = this.state.animals.map((laura) => {
      return (
        <AnimalCard
          name={laura.name}
          img={laura.img}
          clickme={this.clickHandler.bind(this, laura.name)}
          key={laura.id}
        />
      );
    });
    return <div className="animallist">{animalslist}</div>;
  }
}

export default AnimalsList;
