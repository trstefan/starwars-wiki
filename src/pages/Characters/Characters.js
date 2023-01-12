import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";

export const Characters = () => {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${page}`).then((response) => {
      const total = response.data.count;
      const characters = response.data.results;

      setCount(total);
      setCharacters(characters);

      response.data.next === null
        ? (document.getElementById("btnNext").style.display = "none")
        : (document.getElementById("btnNext").style.display = "block");

      response.data.previous === null
        ? (document.getElementById("btnPrevious").style.display = "none")
        : (document.getElementById("btnPrevious").style.display = "block");
    });
  }, [page]);

  function goNextPage() {
    const currentPage = page + 1;
    setPage(currentPage);
  }

  function goPrevPage() {
    const currentPage = page - 1;
    setPage(currentPage);
  }

  return (
    <div id="main">
      <Header></Header>
      <div className="count">Total: characters: {count}</div>
      <div className="characters-grid">
        {characters.map((character) => (
          <div className="character-card" key={character.name}>
            <h3>{character.name}</h3>
            <span>Height: {character.height}</span>
            <span>Mass: {character.mass}</span>
            <span>Skin color: {character.skin_color}</span>
            <span>Hair color: {character.hair_color}</span>
            <span>Birth Year: {character.birth_year}</span>
            <span>Gender: {character.gender}</span>
          </div>
        ))}
      </div>
      <div className="buttons-panel">
        <button id="btnPrevious" onClick={goPrevPage}>
          Go to the previous page
        </button>
        <button id="btnNext" onClick={goNextPage}>
          Go to the next page
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};
