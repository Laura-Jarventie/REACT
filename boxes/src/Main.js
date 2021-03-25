import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Box name="Margit Tennosaar" age="25" title="teacher" />
      <Box name="Laura Järventie" age="26" title="student" />
      <Box name="Frodo Järventie" age="3" title="DOG" />
    </div>
  );
};

export default Main;
