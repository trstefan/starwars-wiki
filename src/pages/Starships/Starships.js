import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export const Starships = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => {
        const total = response.data.count;
        const ships = response.data.results;

        setCount(total);
        setStarships(ships);

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
      <div className="count">Total: starships: {count}</div>
      <div className="starships-grid">
        {starships.map((ship) => (
          <div className="ship-card" key={ship.name}>
            <h3>{ship.name}</h3>
            <span>Model: {ship.model}</span>
            <span>Manufacturer:{ship.manufacturer}</span>
            <span>Cost:{ship.cost_in_credits}</span>
            <span>Length:{ship.length}</span>
            <span>Atmosphering Speed:{ship.max_atmosphering_speed}</span>
            <span>Crew:{ship.crew} </span>
            <span>Passengers:{ship.passengers}</span>
            <span>Cargo Capacity{ship.cargo_capacity}</span>
            <span>Consumables{ship.consumables}</span>
            <span>Hyperdrive Rating{ship.hyperdrive_rating}</span>
            <span>MGLT{ship.MGLT}</span>
            <span>Class:{ship.starship_class}</span>
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
