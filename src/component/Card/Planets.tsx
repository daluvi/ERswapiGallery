import React from "react";

import {BASE_URL_IMG} from "../../utils/constants";
import {closeFlip, getId, onErrorImg, openFlip} from "../../utils/util";
import InfoExtraCharacters from "../infoExtra/Characters";
import InfoExtraFilms from "../infoExtra/Films";

import {CardPlanets} from '../../@type/component/components';
import Feature from "../Feature";

const Planets = ({id, item}: CardPlanets.Props) => {
  
  const id_planets = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e, id); }}><img src={`${BASE_URL_IMG}/planets/${id_planets}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e, id); }}>x</button>
            <div className="info">
              <Feature title="Rotation Period" value={`${item.rotation_period}`} />
              <Feature title="Orbital Period" value={`${item.orbital_period}`} />
              <Feature title="Diameter" value={`${item.diameter}`} />
              <Feature title="Gravity" value={`${item.gravity}`} />
              <Feature title="Earth Surface" value={`${item.terrain}`} />
              <Feature title="Weathers" value={`${item.climate}`} />
              <Feature title="Water Surface" value={`${item.surface_water}`} />
              <Feature title="Population" value={`${item.population}`} />
            </div>
            <InfoExtraFilms info={item.films} />
            <InfoExtraCharacters info={item.residents} title='Residentes'/>
          </div>
        </div>
        <figcaption><h4>Nombre: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default Planets;