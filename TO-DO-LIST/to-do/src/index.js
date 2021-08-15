import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  { id: 1, name: "Do Margit´s homework" },
  { id: 2, name: "To doo doo do ther thum -Job2Do" },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
