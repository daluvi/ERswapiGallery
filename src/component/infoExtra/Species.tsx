import React from "react";
import {isArray} from "underscore";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId, isResSpecies} from "../../utils/util";

import {InfoExtra as IE} from "../../@type/component/components";
import {ResultSpecies} from "../../@type/service/service";

const Species = ({info, title = 'Especies'}: IE.Props ) => {
  
  const onErrorImg: IE.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  
  return isArray(info) && isResSpecies(info) && (
    <div className="list-feature starships"><h6>{title}: </h6>
      {info.map((specie: ResultSpecies) => {
        const id = getId(specie.url);
        return (
          <div key={id} className="info">
            <img src={`${BASE_URL_IMG}/species/${id}.jpg`} alt={specie.name} width="32.9" onError={onErrorImg} />
            <div className="feature">
              <p>
                <strong>Nombre: </strong>{specie.name}
              </p>
            </div>
          </div>
        );
      })
    }
  </div>
  );
};

export default Species;