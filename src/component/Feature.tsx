import React from "react";
import {Feature as F} from "../@type/component/components";
const Feature = ({title, value, long}: F.Props) => {
  return (
    <div className={`feature ${long? 'long': ''}`}>
      <h6>{title}: </h6><p>{value}</p>
    </div>
  );
};

export default Feature;