import React from "react";
import "./style.css";
import { FaJediOrder, FaCodepen, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="api">
        {" "}
        <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer">
          <FaJediOrder className="icon" />
          <p>Star Wars API </p>
        </a>
      </div>
      <div className="name">
        <div>Created by</div>
        <div>Stefan Traciu</div>
      </div>
      <div className="socials">
        <a
          href="https://github.com/trstefan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://codepen.io/StefFcp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCodepen className="icon" />
        </a>
      </div>
    </footer>
  );
};
