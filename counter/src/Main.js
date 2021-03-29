import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    console.log("added");
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  removeHandler = () => {
    console.log("removed");
    if (this.state.counter !== 0) {
      this.setState({ counter: this.state.counter - 1 });
    } //tähän voi lisätä else
  };
  resetHandler = () => {
    console.log("reset");
    this.setState({
      counter: 0,
    });
  };

  render() {
    let circleClass = `${
      this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
        ? "even"
        : "odd"
    } circle`;
    return (
      <div>
        <h1 className={circleClass}>{this.state.counter}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default Main;
