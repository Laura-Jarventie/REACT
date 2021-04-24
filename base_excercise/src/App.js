import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <span className="App-Header">
        <Header />
      </span>
      <span className="Main">
        <Main />
      </span>
      <span className="Footer">
        <Footer />
      </span>
    </Router>
  );
};

export default App;
