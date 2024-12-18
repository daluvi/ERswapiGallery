import React from "react";
import {isArray} from "underscore";

import {BASE_URL_IMG} from "@utils/constants";
import {getId, isResVehicles} from "@utils/util";

import {InfoExtra as IE} from "@typings/components";
import {ResultVehicles} from "@typings/service";

const Vehicles = ({info, title = 'Vehículos'}: IE.Props ) => {
  const onErrorImg: IE.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  return isArray(info) && isResVehicles(info) && (
    <div className="list-feature vehicles"><h6>{title}: </h6>
      {info.map((vehicle: ResultVehicles) => {
        const id = getId(vehicle.url);
        return (  
          <div key={id} className="info">
            <img src={`${BASE_URL_IMG}/vehicles/${id}.jpg`} alt={vehicle.name} width="32.9" onError={onErrorImg} />
            <div className="feature">
              <p>
                <strong>Nombre: </strong>{vehicle.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Vehicles;