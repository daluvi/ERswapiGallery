import React from "react";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId} from "../../utils/util";
import Films from "../infoExtra/Films";
import Planets from "../infoExtra/Planets";
import Starships from "../infoExtra/Starships";
import Vehicles from "../infoExtra/Vehicles";

import {CardCharacter as CC} from '../../@type/component/components';

const CardCharacter = ({id, item}: CC.Props) => {
  const openFlip: CC.OpenFlip = (e) => {
    e.preventDefault();

    const allFlipElements = document.querySelectorAll(`.flip-card .inner`);
    const currentElement = document.querySelector(`#${id} .flip-card .inner`);
    
    allFlipElements.forEach((item) => {
      item?.classList.remove('flip');
    });
    currentElement?.classList.add('flip');
  };
  const closeFlip: CC.CloseFlip = (e) => {
    e.preventDefault();

    const currentElement = document.querySelector(`#${id} .flip-card .inner`);

    currentElement?.classList.remove('flip');
  };
  const onErrorImg: CC.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  const id_character = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e); }}><img src={`${BASE_URL_IMG}/characters/${id_character}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e); }}>x</button>
            <div className="info">
              <div className="feature">
                <h6>A&ntilde;o de nacimiento: </h6><p>{item.birth_year}</p>
              </div>
              <div className="feature">
                <h6>G&eacute;nero: </h6><p>{item.gender}</p>
              </div>
              <div className="feature">
                <h6>Color de ojos: </h6><p>{item.eye_color}</p>
              </div>
              <div className="feature">
                <h6>Color de pelo: </h6><p>{item.hair_color}</p>
              </div>
              <div className="feature">
                <h6>Altura: </h6><p>{item.height}</p>
              </div>
              <div className="feature">
                <h6>Peso: </h6><p>{item.mass}</p>
              </div>
              <div className="feature">
                <h6>Color de piel: </h6><p>{item.skin_color}</p>
              </div>
            </div>
            <Planets info={item.homeworld} />
            <Films info={item.films} />
            <Starships info={item.starships} />
            <Vehicles info={item.vehicles} />
          </div>
        </div>
        <figcaption><h4>Name: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default CardCharacter;