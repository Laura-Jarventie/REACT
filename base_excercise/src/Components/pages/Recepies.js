import React, { Component } from "react";

import RecepyList from "./RecepyList";

class Recepies extends Component {
  state = {
    recepies: [],
    searchInput: "",
  };

  searchValueHandler = (event) => {
    console.log("input was used");
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };
  /*
  render() {
    const receptyFilter = this.state.recepties.filter((recepty) => {
      return recepty.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const recepylist = receptyFilter.map((laura) => {
      return (
        <ReceptyCard
          name={laura.name}
          clickme={() => this.clickHandler(laura.name)}
          key={laura.name}
        />
      );
    });*/

  componentDidMount() {
    fetch("http://localhost:3001/recepies")
      .then((resp) => resp.json())
      .then((data) => this.setState({ recepies: data }));
  }
  render() {
    return (
      <div>
        <RecepyList recepies={this.state.recepies} />
        {/* <div className="recepylist">{recepylist}</div>; */}
      </div>
    );
  }
}

export default Recepies;
