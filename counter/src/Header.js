import React from "react";

class Header extends React.Component {
  state = {
    currentDate: new Date().toDateString(),
  };
  render() {
    return (
      <div className="Header">
        <h1>Welcome to my counter app</h1>
        <p>Today is {this.state.currentDate}</p>
      </div>
    );
  }
}

export default Header;
