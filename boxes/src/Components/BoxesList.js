import React, { Component } from "react";
import BoxCard from "./BoxCard";

class BoxesList extends Component {
  state = {
    persons: [
      {
        name: "Laura",
        age: 25,
        title: "CEO",
      },
      {
        name: "Paxi",
        age: 30,
        title: "seller",
      },
      {
        name: "Milli",
        age: 1,
        title: "Doggie",
      },
    ],
  };

  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "sdfdsfsdf",
          age: 25,
          title: "CEO",
        },
        {
          name: "sfdsfdsfsd",
          age: 30,
          title: "seller",
        },
        {
          name: "sdfsfsd",
          age: 1,
          title: "Doggie",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Click me</button>
        <div>
          <BoxCard
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />
          <BoxCard
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />
          <BoxCard
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default BoxesList;
