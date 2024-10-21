import React from "react";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId} from "../../utils/util";
import Characters from "../infoExtra/Characters";
import Planets from "../infoExtra/Planets";
import Species from "../infoExtra/Species";
import Starships from "../infoExtra/Starships";
import Vehicles from "../infoExtra/Vehicles";

import {CardFilms as CF} from '../../@type/component/components';

const CardFilms = ({id, item}: CF.Props) => {
  const openFlip: CF.OpenFlip = (e) => {
    e.preventDefault();

    const allFlipElements = document.querySelectorAll(`.flip-card .inner`);
    const currentElement = document.querySelector(`#${id} .flip-card .inner`);
    
    allFlipElements.forEach((item) => {
      item?.classList.remove('flip');
    });
    currentElement?.classList.add('flip');
  };
  const closeFlip: CF.CloseFlip = (e) => {
    e.preventDefault();

    const currentElement = document.querySelector(`#${id} .flip-card .inner`);

    currentElement?.classList.remove('flip');
  };
  const onErrorImg: CF.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  const id_films = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e); }}><img src={`${BASE_URL_IMG}/films/${id_films}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e); }}>x</button>
            <div className="info">
              <div className="feature long">
                <h6>Texto de apertura: </h6><p>{item.opening_crawl}</p>
              </div>
              <div className="feature">
                <h6>Episodio: </h6><p>{item.episode_id}</p>
              </div>
              <div className="feature">
                <h6>Director: </h6><p>{item.director}</p>
              </div>
              <div className="feature">
                <h6>Productores: </h6><p>{item.producer}</p>
              </div>
              <div className="feature">
                <h6>fecha de lanzamiento: </h6><p>{item.release_date}</p>
              </div>
            </div>
            <Characters info={item.characters} title='Personajes'/>
            <Planets info={item.planets} />
            <Species info={item.species} />
            <Starships info={item.starships} />
            <Vehicles info={item.vehicles} />
          </div>
        </div>
        <figcaption><h4>titulo: {item.title}</h4></figcaption>
      </figure>
    </section>
  );
};

export default CardFilms;

