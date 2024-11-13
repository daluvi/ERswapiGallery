import React, {useEffect} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {isUndefined} from "underscore";

import {addActiveClass} from "@utils/util";
import {MAX_RESULT_PER_PAGE} from "@utils/constants";

import {Pagination as P} from '@typings/components';

import './Pagination.scss';

const Pagination = ({data}: P.Props) => {
  const location = useLocation();
  const {id} = useParams();
  const {count, next, previous} = data;

  const quantityPage = Math.ceil(count / MAX_RESULT_PER_PAGE);

  useEffect(() => {
    !isUndefined(id) && addActiveClass(parseInt(id, 10) -1);
  }, [id]);
  return (
    !!quantityPage && <nav className="paginationNav">
      <div className="first">
      {(!isUndefined(id) && !!previous) && <Link to={`${location.pathname.replace(/\d/, (parseInt(id, 10) - 1).toString() )}`} className="prevBtn">Anterior</Link>}
      </div>
      <div className="middle">
        {
            new Array(quantityPage).fill(0).map((_, index) => (
              <Link to={`${location.pathname.replace(/\d/, (index + 1).toString() )}`} key={index} >{index+1}</Link>
            ))
        }
      </div>
      <div className="last">
        {( !isUndefined(id) && !!next) && <Link to={`${location.pathname.replace(/\d/, (parseInt(id, 10) + 1).toString() )}`} className="nextBtn">Siguiente</Link>}
      </div>
    </nav>
  );
};

export default Pagination;