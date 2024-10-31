import React from "react";

import {BASE_URL_IMG} from "@utils/constants";
import {closeFlip, getId, onErrorImg, openFlip} from "@utils/util";
import {
  InfoExtraCharacters,
  InfoExtraFilms
} from "@component/infoExtra";
import Feature from "@component/Feature";

import {CardStarships} from '@typings/components';


import './Card.scss';

const Starships = ({id, item}: CardStarships.Props) => {
  const id_character = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e, id); }}><img src={`${BASE_URL_IMG}/starships/${id_character}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e, id); }}>x</button>
            <div className="info">
              <Feature title="Model" value={`${item.model}`} />
              <Feature title="Cargo Capacity" value={`${item.cargo_capacity}`} />
              <Feature title="Consumable" value={`${item.consumables}`} />
              <Feature title="Hyperdrive Rating" value={`${item.hyperdrive_rating}`} />
              <Feature title="Length" value={`${item.length}`} />
              <Feature title="Cost In Credits" value={`${item.cost_in_credits}`} />
              <Feature title="Manufacturer" value={`${item.manufacturer}`} />
              <Feature title="Max Atmosphering Speed" value={`${item.max_atmosphering_speed}`} />
              <Feature title="Passengers" value={`${item.passengers}`} />
              <Feature title="Starships Class" value={`${item.starship_class}`} />
            </div>
            <InfoExtraFilms info={item.films} />
            <InfoExtraCharacters info={item.pilots} title='Pilotos'/>
          </div>
        </div>
        <figcaption><h4>Nombre: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default Starships;