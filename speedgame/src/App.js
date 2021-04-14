import React, { Component } from "react";
import Circle from "./Components/Circle";
import gameOverNotification from "./Components/gameOverNotification";

import "./App.css";

import startSound from "./assets/sounds/jne";
import endSound from "./assets/sounds/jne";

let gameStartSound = new Audio(startSound);
let gameEndSound = new Audio(endSound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
    ],
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log("wow, you cliked " + id);
    this.setState({
      score: this.state.score + 10,
    });
  };
  //setState is ready made method. Has to be before render.

  nextCircle = () => {
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
    });
    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("active circle is", this.state.current);
  };
  //current = currently active circle

  startHandler = () => {
    this.nextCircle();
  };
  endHandler = () => {
    clearTimeout(this.timer);
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.id}
          color={c.color}
          click={() => this.clickHandler(c.id)}
          active={this.state.current === c.id}
        />
      );
    });
    //actually we don´t need cicleslist, we could add it directly to return but it would be very difficult to read
    return (
      <div>
        <h1>Speedtest</h1>
        <p>Your score is: {this.state.score} </p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.endHandler}>Stop</button>
      </div>
    );
  }
}
//you cold make the button also as component and call it here in return. Like the cirle.

export default App;
