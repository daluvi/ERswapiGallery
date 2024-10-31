import React from "react";
import {isArray} from "underscore";

import {BASE_URL_IMG} from "@utils/constants";
import {getId, isResFilms} from "@utils/util";

import {InfoExtra as IE} from "@typings/components";
import {ResultFilms} from "@typings/service";

const Films = ({info}: IE.Props ) => {
  const onErrorImg: IE.OnErrorImg = (e) => {
    e.currentTarget.src = `${BASE_URL_IMG}/placeholder.jpg`;
  };
  return isArray(info) && isResFilms(info) && (
    <div className="list-feature films"><h6>Filmes: </h6>
        {info.map((film: ResultFilms) => {
          const id = getId(film.url);
          return (
            <div key={id} className="info">
              <img src={`${BASE_URL_IMG}/films/${id}.jpg`} alt={film.title} width="30"  onError={onErrorImg} />
              <div className="feature">
                <p>
                  <strong>Titulo: </strong>{film.title}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Films;