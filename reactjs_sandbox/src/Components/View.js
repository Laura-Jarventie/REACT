import React from "react";
import "./Form";
import "./View.css";
import "../App";

const View = (props) => {
  return (
    <main>
      <h1>This is your input:</h1>
      <nav>
        <p> First name {props.firstnameInput} </p>

        <p>Last name {props.lastname}</p>
        <p>Phone number {props.phonenumber}</p>
        <p>Role {props.role}</p>
        <p>Message {props.message}</p>
      </nav>
    </main>
  );
};

export default View;
