import React from "react";
import {BASE_URL_IMG} from "@utils/constants";
import Footer from "@component/Footer";
import Header from "@component/Header";
import {Link} from "react-router-dom";

const Home = () => {

  return (
    <>
      <Header />
        <article>
          <section className="card-home">
            <Link to="/people/1">
              <figure className="flip-card">
                  <img src={`${BASE_URL_IMG}/characters/1.jpg`} alt="1" height="auto" width="auto" />
                <figcaption><h4>Sección: People</h4></figcaption>
              </figure>
            </Link>
          </section>
          <section className="card-home">
            <Link to="/films/1">
              <figure className="flip-card">
                  <img src={`${BASE_URL_IMG}/films/1.jpg`} alt="1" height="auto" width="auto" />
                <figcaption><h4>Sección: Films</h4></figcaption>
              </figure>
            </Link>
          </section>
          <section className="card-home">
            <Link to="/species/1">
              <figure className="flip-card">
                  <img src={`${BASE_URL_IMG}/species/1.jpg`} alt="1" height="auto" width="auto" />
                <figcaption><h4>Sección: Species</h4></figcaption>
              </figure>
            </Link>
          </section>
          <section className="card-home">
            <Link to="/planets/1">
              <figure className="flip-card">
                  <img src={`${BASE_URL_IMG}/planets/2.jpg`} alt="1" height="auto" width="auto" />
                <figcaption><h4>Sección: Planets</h4></figcaption>
              </figure>
            </Link>
          </section>
          <section className="card-home">
            <Link to="/starships/1">
              <figure className="flip-card">
                  <img src={`${BASE_URL_IMG}/starships/5.jpg`} alt="1" height="auto" width="auto" />
                <figcaption><h4>Sección: Starships</h4></figcaption>
              </figure>
            </Link>
          </section>
          <section className="card-home">
            <Link to="/vehicles/1">
              <figure className="flip-card">
                  <img src={`${BASE_URL_IMG}/vehicles/4.jpg`} alt="1" height="auto" width="auto" />
                <figcaption><h4>Sección: Vehicles</h4></figcaption>
              </figure>
            </Link>
          </section>
        </article>
      <Footer />
    </>
  );
};

export default Home;