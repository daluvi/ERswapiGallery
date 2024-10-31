import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';

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
  const data = {count, next, previous};

  const paginate: Paginate = (id) => {
    getInfo<StarWars_Response_people>(`${BASE_URL}/people/?page=${id}`);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    paginate(id);
  }, [id]);

  return (
    <>
      <Header data={data} />
      <article>
        {info?.length > 0 && info?.map((item: D.CharacterState, index: number) => 
          (<CardCharacter key={item.name} item={item} id={`Card${index}`}/>))
        }
      </article>
      <Footer data={data} />
    </>
  );
};

export default Characters;