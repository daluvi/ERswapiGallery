import React from "react";

import {BASE_URL_IMG} from "@utils/constants";
import {closeFlip, getId, onErrorImg, openFlip} from "@utils/util";
import {
  InfoExtraFilms,
  InfoExtraPlanets,
  InfoExtraStarships,
  InfoExtraVehicles
} from "@component/infoExtra";
import Feature from "@component/Feature";

import {CardCharacter} from '@typings/components';

import './Card.scss';

const Character = ({id, item}: CardCharacter.Props) => {
  
  const id_character = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e, id); }}><img src={`${BASE_URL_IMG}/characters/${id_character}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e, id); }}>x</button>
            <div className="info">
              <Feature title="Birth Year" value={item.birth_year} />
              <Feature title="Gender" value={item.gender} />
              <Feature title="Eye Color" value={item.eye_color} />
              <Feature title="Hair Color" value={item.hair_color} />
              <Feature title="Height" value={item.height} />
              <Feature title="Weight" value={item.mass} />
              <Feature title="Skin Colors" value={item.skin_color} />

            </div>
            <InfoExtraPlanets info={item.homeworld} />
            <InfoExtraFilms info={item.films} />
            <InfoExtraStarships info={item.starships} />
            <InfoExtraVehicles info={item.vehicles} />
          </div>
        </div>
        <figcaption><h4>Name: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default Character;