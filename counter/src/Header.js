import React from "react";

const Header = () => {
  return (
    <nav>
      <h1>Counter App</h1>
      <p id="demo"></p>
    </nav>
  );
};

let d = new Date();
document.getElementById("demo").innerHTML = d;

export default Header;
