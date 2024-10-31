import React from "react";
import {Link, useLocation} from "react-router-dom";
import {isUndefined} from "underscore";

import Pagination from "@component/Pagination";
import {changeOpenNavigation, getUrlPath, hasValue, onChangeTheme} from "@utils/util";

import {Header as H} from "@typings/components";

import starWarIcon from '@static/iconos/android-icon-36x36.png';
import './Header.scss';

const Header = ({data}: H.Props) => {
  const location = useLocation();
  const currentPath = getUrlPath(location.pathname);
  
  return (
    <header>
      <button type="button" className="openNav" onClick={() => changeOpenNavigation()} ><span className="icon-hamburger"></span></button>
      <Link className="homeLink" to="/" ><img src={starWarIcon} alt="Home" /></Link>
      <div className="navigation">
        <nav className={`pages ${isUndefined(currentPath)? 'disabled': ''}`}>
          <Link to="/people/1" className={currentPath === 'people'? 'disabled': ''}>People</Link>
          <Link to="/films/1" className={currentPath === 'films' ? 'disabled': ''}>Films</Link>
          <Link to="/species/1" className={currentPath === 'species' ? 'disabled': ''}>Species</Link>
          <Link to="/planets/1" className={currentPath === 'planets' ? 'disabled': ''}>Planets</Link>
          <Link to="/starships/1" className={currentPath === 'starships' ? 'disabled': ''}>Starships</Link>
          <Link to="/vehicles/1" className={currentPath === 'vehicles' ? 'disabled': ''}>Vehicles</Link>
        </nav>
        <select name="theme" id="theme" onChange={(e) => onChangeTheme(e)}>
          <option value="default">saber green</option>
          <option value="blue">saber blue</option>
          <option value="red">saber red</option>
          <option value="yellow">saber yellow</option>
          <option value="orange">saber orange</option>
          <option value="golden">saber golden</option>
          <option value="silvery">saber silvery</option>
          <option value="white">saber white</option>
          <option value="purplish">saber purplish</option>
          <option value="black">saber black</option>
        </select>
      </div>
      {hasValue(data) && (<Pagination data={data} />)}
    </header>
  );
};

export default Header;