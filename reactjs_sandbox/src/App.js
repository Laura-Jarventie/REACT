import React, { Component } from "react";

import Form from "./Components/Form";
import View from "./Components/View";

import "./App.css";

class App extends Component {
  state = {
    firstnameInput: "",
    lastnameInput: "",
    numberInput: "",
    role: "",
    message: "",
  };

  formValueHandler = (event) => {
    console.log("input was used");
    this.setState({
      lastnameInput: event.target.value,
    });
    console.log(this.state.lastnameInput);
  };

  render() {
    return (
      <div>
        firsname={this.props.firstnameInput}
        lastName={this.props.lastnameInput}
        phonenumber={this.props.numberInput}
        role={this.props.role}
        message={this.props.message}
      </div>
    );
  }

  render() {
    return (
      <main>
        <h1>Please fill out you info:</h1>

        <Form lastName={this.formValueHandler} />
        <Form />

        <View />
      </main>
    );
  }
}

export default App;
