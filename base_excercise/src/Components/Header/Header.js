import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <span className="Logo">
        <h2>Järventie-suvun reseptit</h2>
      </span>
      <span className="Nav">
        <Nav />
      </span>
    </div>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Etusivu</Link>
        </li>
        <li>
          <Link to="/Recepies">Recipes</Link>
        </li>
        <li>
          <Link to="/RecepyAdd">Lisää resepti</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
