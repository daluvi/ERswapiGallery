import React from "react";

import {BASE_URL_IMG} from "@utils/constants";
import {closeFlip, getId, onErrorImg, openFlip} from "@utils/util";
import {
  InfoExtraCharacters,
  InfoExtraFilms,
  InfoExtraPlanets
} from "@component/infoExtra";
import Feature from "@component/Feature";

import {CardSpecies} from '@typings/components';

import './Card.scss';

const Species = ({id, item}: CardSpecies.Props) => {
  const id_species = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e, id); }}><img src={`${BASE_URL_IMG}/species/${id_species}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e, id); }}>x</button>
            <div className="info">
              <Feature title="Eyes Colors" value={`${item.eye_colors}`} />
              <Feature title="Hair Colors" value={`${item.hair_colors}`} />
              <Feature title="Skins Colors" value={`${item.skin_colors}`} />
              <Feature title="Rate Height" value={`${item.average_height}`} />
              <Feature title="Rate Life" value={`${item.average_lifespan}`} />
              <Feature title="Classification" value={`${item.classification}`} />
              <Feature title="Designation" value={`${item.designation}`} />
              <Feature title="Languages" value={`${item.language}`} />
            </div>
            <InfoExtraPlanets info={item.homeworld} />
            <InfoExtraFilms info={item.films} />
            <InfoExtraCharacters info={item.people} title='Personas'/>
          </div>
        </div>
        <figcaption><h4>Nombre: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default Species;