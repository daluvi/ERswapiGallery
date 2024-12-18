import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {isUndefined} from "underscore";

import {BASE_URL} from "@utils/constants";
import Header from "@component/Header";
import {CardCharacter} from "@component/Card";
import Footer from "@component/Footer";
import useGettingInfo from "@hooks/useGettingInfo";

import {Data as D} from "@typings/reducers";
import {Paginate} from "@typings/app";
import {StarWars_Response_people} from "@typings/service";

import './Pages.scss';


const Characters = () => {
  const {id} = useParams();
  const {getInfo, count, next, previous, info} = useGettingInfo();

  const paginate: Paginate = (id) => {
    getInfo<StarWars_Response_people>(`${BASE_URL}/people/?page=${id}`);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    !isUndefined(id) && paginate(id);
  }, [id]);

  return (
    <>
      <Header data={{count, next, previous}} />
      <article>
        {info?.length > 0 && (info as D.CharacterState[])?.map((item, index: number) => 
          (<CardCharacter key={item.name} item={item} id={`Card${index}`}/>))
        }
      </article>
      <Footer data={{count, next, previous}} />
    </>
  );
};

export default Characters;