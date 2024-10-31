import React from "react";

import Pagination from "@component/Pagination/Pagination";
import {hasValue} from "@utils/util";

import {Footer as F} from "@typings/components";

const Footer = ({data}: F.Props) => {
  return (
    <footer>
      {hasValue(data) && (<Pagination data={data} />)}
    </footer>
  );
};

export default Footer;