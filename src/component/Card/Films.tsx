import React from "react";

import {BASE_URL_IMG} from "@utils/constants";
import {closeFlip, getId, onErrorImg, openFlip} from "@utils/util";
import {
  InfoExtraCharacters,
  InfoExtraPlanets,
  InfoExtraSpecies,
  InfoExtraStarships,
  InfoExtraVehicles,
} from "@component/infoExtra";
import Feature from "@component/Feature";

import {CardFilms} from '@typings/components';

import './Card.scss';

const Films = ({id, item}: CardFilms.Props) => {
  
  const id_films = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e, id); }}><img src={`${BASE_URL_IMG}/films/${id_films}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e, id); }}>x</button>
            <div className="info">
              <Feature title="Opening" value={item.opening_crawl} long />
              <Feature title="Episode" value={`${item.episode_id}`} />
              <Feature title="Director" value={item.director} />
              <Feature title="Producers" value={item.producer} />
              <Feature title="Release Date" value={item.release_date} />
            </div>
            <InfoExtraCharacters info={item.characters} title='Personajes'/>
            <InfoExtraPlanets info={item.planets} title='Planetas'/>
            <InfoExtraSpecies info={item.species} />
            <InfoExtraStarships info={item.starships} />
            <InfoExtraVehicles info={item.vehicles} />
          </div>
        </div>
        <figcaption><h4>titulo: {item.title}</h4></figcaption>
      </figure>
    </section>
  );
};

export default Films;

