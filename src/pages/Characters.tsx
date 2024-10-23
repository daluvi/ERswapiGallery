import React, {useEffect} from "react";

import {BASE_URL} from "../utils/constants";
import {useAppSelector} from "../store/hooks";
import {useParams} from 'react-router-dom';
import CardCharacter from '../component/Card/Character';
import Footer from "../component/Footer";
import Header from "../component/Header";
import useGettingInfo from "../hooks/useGettingInfo";

import {Data as D} from "../@type/store/reducers";
import {Paginate} from "../@type/app";
import {StarWars_Response_people} from "../@type/service/service";

const Characters = () => {
  const {id} = useParams();
  const {getInfo, count, next, previous} = useGettingInfo();
  const {info} = useAppSelector((state) => state.data);
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
        {info?.length > 0 && info?.map((item: D.CharacterState, index) => 
          (<CardCharacter key={item.name} item={item} id={`Card${index}`}/>))
        }
      </article>
      <Footer data={data} />
    </>
  );
};

export default Characters;