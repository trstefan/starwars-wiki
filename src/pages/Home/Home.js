import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";
import pic from "../../assets/sw-t-logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { Timeline } from "rsuite";
import { Link } from "react-router-dom";

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
            Star Wars Wiki, the most complete wikipedia about the Star Wars
            universe.{" "}
          </p>
        </section>
        <div className="features">
          <div className="feature-card">
            <h1>Characters</h1>
            <p>Here you can find information about Star Wars characters.</p>
            <Link to="/characters">
              <button>View more</button>
            </Link>
          </div>
          <div className="feature-card">
            <h1>Planets</h1>
            <p>Here you can find information about Star Wars planets.</p>
            <Link to="/planets">
              <button>View more</button>
            </Link>
          </div>
          <div className="feature-card">
            <h1>Spaceships</h1>
            <p>Here you can find information about Star Wars starships.</p>
            <Link to="/starships">
              <button>View more</button>
            </Link>
          </div>
        </div>
        <section>
          <h2>Star Wars timeline</h2>
          <Timeline>
            {movies.map((movie) => (
              <Timeline.Item key={movie.episode_id}>
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
