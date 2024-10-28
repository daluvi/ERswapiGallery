import React from "react";

import {BASE_URL_IMG} from "../../utils/constants";
import {closeFlip, getId, onErrorImg, openFlip} from "../../utils/util";
import InfoExtraCharacters from "../infoExtra/Characters";
import InfoExtraFilms from "../infoExtra/Films";

import {CardVehicles} from '../../@type/component/components';
import Feature from "../Feature";

const Vehicles = ({id, item}: CardVehicles.Props) => {
  
  const id_character = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e, id); }}><img src={`${BASE_URL_IMG}/vehicles/${id_character}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e, id); }}>x</button>
            <div className="info">
              <Feature title="Model" value={`${item.model}`} />
              <Feature title="Cargo Capacity" value={`${item.cargo_capacity}`} />
              <Feature title="Consumables" value={`${item.consumables}`} />
              <Feature title="Length" value={`${item.length}`} />
              <Feature title="Cost In Credits" value={`${item.cost_in_credits}`} />
              <Feature title="Manufacturer" value={`${item.manufacturer}`} />
              <Feature title="Max Atmosphering Speed" value={`${item.max_atmosphering_speed}`} />
              <Feature title="Passengers" value={`${item.passengers}`} />
              <Feature title="Vehicles Class" value={`${item.vehicle_class}`} />
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

export default Vehicles;