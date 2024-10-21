import React from "react";
import {isArray} from "underscore";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId, isResStarships} from "../../utils/util";

import {InfoExtra as IE} from "../../@type/component/components";
import {ResultStarships} from "../../@type/service/service";

const Starships = ({info}: IE.Props ) => {
  const onErrorImg: IE.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  return isArray(info) && isResStarships(info) && (
    <div className="list-feature films"><h6>Naves estelares: </h6>
        {info.map((starship: ResultStarships) => {
          const id = getId(starship.url);
          return (
            <div key={id} className="info">
              <img src={`${BASE_URL_IMG}/starships/${id}.jpg`} alt={starship.name} width="30"  onError={onErrorImg} />
              <div className="feature">
                <p>
                  <strong>Titulo: </strong>{starship.name}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Starships;