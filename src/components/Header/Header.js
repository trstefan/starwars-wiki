import React from "react";
import "./style.css";
import logo from "../../assets/logo-horizontal.png";
import { Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <header>
      <nav className="nav-main">
        <img src={logo} alt="Logo Star Wars"></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
