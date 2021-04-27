import React, { useState, useEffect } from "react";
import RecepyAdd from "./RecepyAdd";
import RecepyList from "./RecepyList";
import axios from "axios";

const Recepies = () => {
  const [recepty, setRecepty] = useState([]);
  const [newRecepy, setNewRecepy] = useState({
    name: "",
    recipeCategory: "",
    niceToKnow: "",
    recipeIngredient: "",
    recipeInstruction: "",
    link: "",
    searchInput: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/recepies")
      .then((res) => setRecepty(res.data));
  }, []);

  /*SearchBox = (props) => {
    return (
      <div>
        <input
          type="text"
          className="searchBox"
          onChange={props.search}
          placeholder="Etsi resepti"
        ></input>
      </div>
    );
  };*/

  const valueChangeHandler = (e) => {
    setNewRecepy({ ...newRecepy, [e.target.name]: e.target.value });
  };

  const submitRecepy = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/recepies", newRecepy)
      .then(() => {
        return axios.get("http://localhost:3001/recepies");
      })
      .then((res) => setRecepty(res.data));
    e.target.reset();
  };

  /*SearchSelector = (props) => {
    return (
      <div>
        <input
          type="text"
          className="searchBox"
          onChange={props.search}
          placeholder="Kategoria"
        ></input>
      </div>
    );
  };*/

  /* searchValueHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };
*/

  /*render() {
    /*const recipeFilter = this.state.recepies.filter((recipe) => {
      return (
        recipe.name &&
        recipe.recipeCategory
          .toLocaleLowerCase()
          .includes(this.state.searchInput.toLocaleLowerCase())
      );
    });*/
  /*
    const recepylist = recipeFilter.map((recipe) => {
      return (
        <main>
          <RecepyList />
          <RecepyAdd change={valueChangeHandler} submit={submitRecepy} />
        </main>
      );
    });*/

  /*
    return (
      <div className="recipes">
        <div className="card2">
          <this.SearchBox search={this.searchValueHandler} />
          <this.SearchSelector search={this.searchValueHandler} />
        </div>
        <div>{recepylist}</div>
      </div>
    );*/

  return (
    <main>
      <RecepyList recepty={recepty} />
      <RecepyAdd change={valueChangeHandler} submit={submitRecepy} />
    </main>
  );
};

export default Recepies;

/*
class Recepies extends Component {
  state = {
    recepies: [],
    isLoading: false,
    searchInput: "",
  };

  SearchBox = (props) => {
    return (
      <div>
        <input
          type="text"
          className="searchBox"
          onChange={props.search}
          placeholder="Etsi resepti"
        ></input>
      </div>
    );
  };

  SearchSelector = (props) => {
    return (
      <div>
        <input
          type="text"
          className="searchBox"
          onChange={props.search}
          placeholder="Kategoria"
        ></input>
      </div>
    );
  };

  searchValueHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/recepies")
      .then((resp) => resp.json())
      .then((data) => this.setState({ recepies: data, isLoading: false }));
  }

  render() {
    const recipeFilter = this.state.recepies.filter((recipe) => {
      return (
        recipe.name &&
        recipe.recipeCategory
          .toLocaleLowerCase()
          .includes(this.state.searchInput.toLocaleLowerCase())
      );
    });

    const recepylist = recipeFilter.map((recipe) => {
      return (
        <main>
          <RecepyList
            name={recipe.name}
            key={recipe.id}
            recipeCategory={recipe.recipeCategory}
            recipeNiceToKnow={recipe.niceToKnow}
            recipeIngredient={recipe.recipeIngredient}
            recipeInstructions={recipe.recipeInstructions}
          />
         
      );
    });

    return (
      <div className="recipes">
        <div className="card2">
          <this.SearchBox search={this.searchValueHandler} />
          <this.SearchSelector search={this.searchValueHandler} />
        </div>
        <div>{recepylist}</div>
      </div>
    );
  }
}

export default Recepies;

*/
