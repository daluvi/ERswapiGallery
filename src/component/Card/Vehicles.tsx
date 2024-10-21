import React from "react";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId} from "../../utils/util";
import Characters from "../infoExtra/Characters";
import Films from "../infoExtra/Films";

import {CardVehicles as CV} from '../../@type/component/components';

const CardVehicles = ({id, item}: CV.Props) => {
  const openFlip: CV.OpenFlip = (e) => {
    e.preventDefault();

    const allFlipElements = document.querySelectorAll(`.flip-card .inner`);
    const currentElement = document.querySelector(`#${id} .flip-card .inner`);
    
    allFlipElements.forEach((item) => {
      item?.classList.remove('flip');
    });
    currentElement?.classList.add('flip');
  };
  const closeFlip: CV.CloseFlip = (e) => {
    e.preventDefault();

    const currentElement = document.querySelector(`#${id} .flip-card .inner`);

    currentElement?.classList.remove('flip');
  };
  const onErrorImg: CV.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  const id_character = getId(item.url);

  return (
    <section id={id} className="card">
      <figure className="flip-card">
        <div className="inner">
          <div className="front" onClick={(e) => { openFlip(e); }}><img src={`${BASE_URL_IMG}/vehicles/${id_character}.jpg`} alt="1" height="auto" width="auto" onError={onErrorImg} /></div>
          <div className="back">
            <button type="button" onClick={(e) => { closeFlip(e); }}>x</button>
            <div className="info">
              <div className="feature">
                <h6>modelo: </h6><p>{item.model}</p>
              </div>
              <div className="feature">
                <h6>capacidad de carga: </h6><p>{item.cargo_capacity}</p>
              </div>
              <div className="feature">
                <h6>consumibles: </h6><p>{item.consumables} días</p>
              </div>
              <div className="feature">
                <h6>largo: </h6><p>{item.length}</p>
              </div>
              <div className="feature">
                <h6>costo en crédito: </h6><p>{item.cost_in_credits}</p>
              </div>
              <div className="feature">
                <h6>manufacturado: </h6><p>{item.manufacturer}</p>
              </div>
              <div className="feature">
                <h6>Velocidad atmosférica máxima: </h6><p>{item.max_atmosphering_speed}</p>
              </div>
              <div className="feature">
                <h6>capacidad de pasajeros: </h6><p>{item.passengers}</p>
              </div>
              <div className="feature">
                <h6>clase de vehiculo: </h6><p>{item.vehicle_class}</p>
              </div>
            </div>
            <Films info={item.films} />
            <Characters info={item.pilots} title='Pilotos'/>
          </div>
        </div>
        <figcaption><h4>Nombre: {item.name}</h4></figcaption>
      </figure>
    </section>
  );
};

export default CardVehicles;