import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";
import { FaJediOrder } from "react-icons/fa";
import pic from "../../assets/sw-t-logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { Timeline } from "rsuite";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/`).then((response) => {
      const movies = response.data.results;
      setMovies(movies);

      console.log(movies);
    });
  }, []);

  return (
    <div id="home-page">
      <Header></Header>
      <div className="homepage">
        <img src={pic} alt="" />
        <section>
          <h2>Star Wars Wiki</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            unde saepe consequuntur velit voluptates! Dolores.
          </p>
        </section>
        <div className="features">
          <div className="feature-card">
            <h1>Characters</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, qui.
            </p>
            <button>View more</button>
          </div>
          <div className="feature-card">
            <h1>Planets</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, qui.
            </p>
            <button>View more</button>
          </div>
          <div className="feature-card">
            <h1>Spaceships</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, qui.
            </p>
            <button>View more</button>
          </div>
        </div>
        <section>
          <h2>Star Wars timeline</h2>
          <Timeline>
            {movies.map((movie) => (
              <Timeline.Item dot={<FaJediOrder />} key={movie.episode_id}>
                <h3>{movie.title}</h3>
                <strong>Episode {movie.episode_id}</strong>
                <p>{movie.opening_crawl}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};
