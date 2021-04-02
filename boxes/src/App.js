import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main_router from "./Main_router";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Main_router />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
//exports function, not component box. could write allready export default funtion App() etc. exports to index.js
