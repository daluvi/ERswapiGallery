import React from "react";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId} from "../../utils/util";
import Characters from "../infoExtra/Characters";
import Films from "../infoExtra/Films";

import {CardPlanets as CP} from '../../@type/component/components';

const CardPlanets = ({id, item}: CP.Props) => {
  const openFlip: CP.OpenFlip = (e) => {
    e.preventDefault();

    const allFlipElements = document.querySelectorAll(`.flip-card .inner`);
    const currentElement = document.querySelector(`#${id} .flip-card .inner`);
    
    allFlipElements.forEach((item) => {
      item?.classList.remove('flip');
    });
    currentElement?.classList.add('flip');
  };
  const closeFlip: CP.CloseFlip = (e) => {
    e.preventDefault();

    const currentElement = document.querySelector(`#${id} .flip-card .inner`);

    currentElement?.classList.remove('flip');
  };
  const onErrorImg: CP.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  const id_planets = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e); }}><img src={`${BASE_URL_IMG}/planets/${id_planets}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e); }}>x</button>
            <div className="info">
              <div className="feature">
                <h6>Rotación: </h6><p>{item.rotation_period} hs</p>
              </div>
              <div className="feature">
                <h6>periodo orbital: </h6><p>{item.orbital_period} días</p>
              </div>
              <div className="feature">
                <h6>Diámetro: </h6><p>{item.diameter}</p>
              </div>
              <div className="feature">
                <h6>Gravedad: </h6><p>{item.gravity}</p>
              </div>
              <div className="feature">
                <h6>Superficies terrestres: </h6><p>{item.terrain}</p>
              </div>
              <div className="feature">
                <h6>Clima: </h6><p>{item.climate}</p>
              </div>
              <div className="feature">
                <h6>superficies de agua: </h6><p>{item.surface_water}</p>
              </div>
              <div className="feature">
                <h6>Población: </h6><p>{item.population}</p>
              </div>
            </div>
            <Films info={item.films} />
            <Characters info={item.residents} title='Residentes'/>
          </div>
        </div>
        <figcaption><h4>Nombre: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default CardPlanets;