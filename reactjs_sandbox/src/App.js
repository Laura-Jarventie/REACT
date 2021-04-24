import React, { Component } from "react";

import Form from "./Components/Form";
import View from "./Components/View";
import Popup from "./Components/Popup";
import NotesList from "./Components/NotesList";

class App extends Component {
  state = {
    notes: [],
    inputData: {
      firstname: "",
      lastname: "",
      number: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((resp) => resp.json())
      .then((data) => this.setState({ notes: data }));
  }

  formValueHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  popupHandler = (event) => {
    this.setState({ showPopup: true });
    event.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOptions);
    alert("ok. posted.", window.location.reload());
    //reload only to use now. later we learn better way.
    // .then((res) => res.json())
    //.then((data) => this.setState({ postId: data.id }));
  };

  render() {
    /*const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      message: this.state.message,
      role: this.state.role,
    }; we don´t need this anymore since we made inputdata as object*/
    return (
      <div>
        <Form change={this.formValueHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.sendDataHandler} />
        )}
      </div>
    );
  }
}

export default App;
