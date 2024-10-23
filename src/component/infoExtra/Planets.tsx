import React from "react";
import {isArray} from "underscore";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId, isResPlanets} from "../../utils/util";

import {InfoExtra as IE} from "../../@type/component/components";
import {ResultPlanets} from "../../@type/service/service";

const Planets = ({info, title = 'Planeta de origen'}: IE.Props ) => {
  
  const onErrorImg: IE.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  
  return isArray(info) && isResPlanets(info) && (
    <div className="list-feature homeworld"><h6>{title}: </h6>
      {info.map((planet: ResultPlanets) => {
        const id = getId(planet.url);
        return (
          <div key={id} className="info">
            <img src={`${BASE_URL_IMG}/planets/${id}.jpg`} alt={planet.name} width="30"  onError={onErrorImg} />
            <div className="feature">
              <p>
                <strong>Nombre: </strong>{planet.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Planets;