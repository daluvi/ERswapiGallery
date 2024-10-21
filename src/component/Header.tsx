import React from "react";

import Pagination from "./Pagination";

import {Header as H} from "../@type/component/components";

const Header = ({data}: H.Props) => {
  const changeOpenNavigation = () => {
    document.querySelector('.openNav').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
  };

  const onChangeTheme: H.OnChangeTheme = (e) => {
    e.preventDefault();
    document.getElementsByTagName('html')[0].setAttribute('theme', e.target.value);
  };
  return (
    <header>
      <button type="button" className="openNav" onClick={() => changeOpenNavigation()} ><span className="icon-hamburger"></span></button>
      <div className="navigation">
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
      <Pagination data={data} />
    </header>
  );
};

export default Header;