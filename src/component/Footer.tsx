import React from "react";

import Pagination from "./Pagination";
import {hasValue} from "../utils/util";

import {Footer as F} from "../@type/component/components";

const Footer = ({data}: F.Props) => {
  return (
    <footer>
      {hasValue(data) && (<Pagination data={data} />)}
    </footer>
  );
};

export default Footer;