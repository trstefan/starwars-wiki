import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export const Planets = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/?page=${page}`)
      .then((response) => {
        const total = response.data.count;
        const planets = response.data.results;

        setCount(total);
        setPlanets(planets);

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
      <div className="count">Total: planets: {count}</div>
      <div className="planets-grid">
        {planets.map((planet) => (
          <div className="planet-card" key={planet.name}>
            <h3>{planet.name}</h3>
            <span>Climate:{planet.climate} </span>
            <span>Population:{planet.population} </span>
            <span>Terrain:{planet.terrain} </span>
            <span>Gravity:{planet.gravity} </span>
            <span>Rotation Peridon:{planet.rotation_orbit} </span>
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
