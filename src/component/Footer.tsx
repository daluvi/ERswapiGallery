import React from "react";

import Pagination from "./Pagination";

import {Footer as F} from "../@type/component/components";

const Footer = ({data}: F.Props) => {
  return (
    <footer>
      <Pagination data={data} />
    </footer>
  );
};

export default Footer;