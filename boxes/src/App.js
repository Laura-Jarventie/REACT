import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./App.css";

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
//exports function, not component box. could write allready export default funtion App() etc. exports to index.js
