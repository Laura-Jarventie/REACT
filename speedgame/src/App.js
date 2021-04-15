import React, { Component } from "react";
import Circle from "./Components/Circle";
import GameOverNotification from "./Components/GameOverNotification";

import "./App.css";

import startSound from "./assets/sounds/music.mp3";
import endSound from "./assets/sounds/mistakeSound.mp3";

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
    showGameOverNotification: false,
    rounds: 0,
    gameStart: false,
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log("wow, you cliked " + id);

    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });
  };
  //setState is ready made method. Has to be before render.

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    console.log(this.state.rounds);

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("active circle is", this.state.current);
  };
  //current = currently active circle

  startHandler = () => {
    this.nextCircle();
    this.setState({ gameStart: true });
    gameStartSound.play();
  };

  endHandler = () => {
    gameStartSound.pause();
    gameEndSound.play();
    clearTimeout(this.timer);

    this.setState({
      showGameOverNotification: true,
    });
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
          disabled={this.state.gameStart}
        />
      );
    });
    //actually we don´t need cicleslist, we could add it directly to return but it would be very difficult to read
    return (
      <main>
        <h1>Speedtest</h1>
        <p>Your score is: {this.state.score} </p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>
          Start
        </button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOverNotification && (
          <GameOverNotification score={this.state.score} />
        )}
      </main>
    );
  }
}
//you cold make the button also as component and call it here in return. Like the cirle.

export default App;
