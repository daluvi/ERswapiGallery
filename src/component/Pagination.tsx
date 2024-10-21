import React, {useEffect} from "react";
import {Link, useLocation, useParams} from "react-router-dom";

import {addActiveClass} from "../utils/util";
import {MAX_RESULT_PER_PAGE} from "../utils/constants";

import {Pagination as P} from '../@type/component/components';

const Pagination = ({data}: P.Props) => {
  const location = useLocation();
  const {id} = useParams();
  const {count, next, previous} = data;

  const quantityPage = Math.ceil(count / MAX_RESULT_PER_PAGE);

  useEffect(() => {
    addActiveClass(parseInt(id, 10) -1);
  }, [id]);
  return (
    !!quantityPage && <nav>
      <div className="first">
        {!!previous && <Link to={previous} className="prevBtn">Anterior</Link>}
      </div>
      <div className="middle">
        {
            new Array(quantityPage).fill(0).map((_, index) => (
              <Link to={`${location.pathname.replace(/\d/, (index + 1).toString() )}`} key={index} >{index+1}</Link>
            ))
        }
      </div>
      <div className="last">
        {!!next && <Link to={next} className="nextBtn">Siguiente</Link>}
      </div>
    </nav>
  );
};

export default Pagination;