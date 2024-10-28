import React from "react";
import {isArray} from "underscore";

import {BASE_URL_IMG} from "../../utils/constants";
import {getId, isResCharacter, onErrorImg} from "../../utils/util";

import {InfoExtra as IE} from "../../@type/component/components";
import {ResultCharacter} from "../../@type/service/service";

const Characters = ({info, title}: IE.Props ) => {
  return isArray(info) && isResCharacter(info) && (
    <div className="list-feature homeworld"><h6>{title}: </h6>
      {info.map((character: ResultCharacter) => {
        const id = getId(character.url);
        return (
          <div key={id} className="info">
            <img src={`${BASE_URL_IMG}/characters/${id}.jpg`} alt={character.name} width="30"  onError={onErrorImg} />
            <div className="feature">
              <p>
                <strong>Nombre: </strong>{character.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;