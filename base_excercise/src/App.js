import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
