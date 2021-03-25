import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
//exports function, not component box. could write allready export default funtion App() etc. exports to index.js
