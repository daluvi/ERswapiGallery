import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {BASE_URL} from "@utils/constants";
import {CardStarships} from '@component/Card';
import Footer from "@component/Footer";
import Header from "@component/Header";
import useGettingInfo from "@hooks/useGettingInfo";

import {Data as D} from "@typings/reducers";
import {Paginate} from "@typings/app";
import {StarWars_Response_people} from "@typings/service";

import './Pages.scss';

const Starships = () => {
  const {id} = useParams();
  const {getInfo, info, count, next, previous} = useGettingInfo();
  const data = {count, next, previous};
  

  const paginate: Paginate = (id) => {
    getInfo<StarWars_Response_people>(`${BASE_URL}/starships/?page=${id}`);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    paginate(id);
  }, [id]);
  
  return (
    <>
      <Header data={data} />
      <article>
        {info?.length > 0 && info?.map((item: D.StarshipsState, index: number) => {
          return (<CardStarships key={item.name} item={item} id={`Card${index}`}/>);
        })}
      </article>
      <Footer data={data} />
      
    </>
  );
};

export default Starships;