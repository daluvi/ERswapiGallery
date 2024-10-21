import React from "react";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId} from "../../utils/util";
import Characters from "../infoExtra/Characters";
import Films from "../infoExtra/Films";
import Planets from "../infoExtra/Planets";

import {CardSpecies as CS} from '../../@type/component/components';

const CardSpecies = ({id, item}: CS.Props) => {
  const openFlip: CS.OpenFlip = (e) => {
    e.preventDefault();

    const allFlipElements = document.querySelectorAll(`.flip-card .inner`);
    const currentElement = document.querySelector(`#${id} .flip-card .inner`);
    
    allFlipElements.forEach((item) => {
      item?.classList.remove('flip');
    });
    currentElement?.classList.add('flip');
  };
  const closeFlip: CS.CloseFlip = (e) => {
    e.preventDefault();

    const currentElement = document.querySelector(`#${id} .flip-card .inner`);

    currentElement?.classList.remove('flip');
  };
  const onErrorImg: CS.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  const id_species = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e); }}><img src={`${BASE_URL_IMG}/planets/${id_species}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e); }}>x</button>
            <div className="info">
              <div className="feature">
                <h6>colores de ojos: </h6><p>{item.eye_colors} hs</p>
              </div>
              <div className="feature">
                <h6>colores de pelo: </h6><p>{item.hair_colors} días</p>
              </div>
              <div className="feature">
                <h6>colores de piel: </h6><p>{item.skin_colors} días</p>
              </div>
              <div className="feature">
                <h6>promedio altura: </h6><p>{item.average_height}</p>
              </div>
              <div className="feature">
                <h6>promedio tiempo de vida: </h6><p>{item.average_lifespan}</p>
              </div>
              <div className="feature">
                <h6>clasificacion: </h6><p>{item.classification}</p>
              </div>
              <div className="feature">
                <h6>designacion: </h6><p>{item.designation}</p>
              </div>
              <div className="feature">
                <h6>lenguaje: </h6><p>{item.language}</p>
              </div>
            </div>
            <Planets info={item.homeworld} />
            <Films info={item.films} />
            <Characters info={item.people} title='Personas'/>
          </div>
        </div>
        <figcaption><h4>Nombre: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default CardSpecies;