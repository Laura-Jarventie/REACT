import React from "react"; //this need to be here
import ReactDOM from "react-dom"; // this needs to be here
import "./index.css"; // for styling
/*
import App from "./App";
import reportWebVitals from "./reportWebVitals";*/

const Demo = () => {
  return (
    <div>
      <div id="logo">Logo</div>
      <div class="main">
        <div id="box1"></div>
        <div id="box2"></div>
        <div id="box3"></div>
      </div>
      <div id="footer">copyright</div>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));
