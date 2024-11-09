import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {BASE_URL} from "@utils/constants";
import {CardVehicles} from '@component/Card';
import Footer from "@component/Footer";
import Header from "@component/Header";
import useGettingInfo from "@hooks/useGettingInfo";

import {Data as D} from "@typings/reducers";
import {Paginate} from "@typings/app";
import {StarWars_Response_people} from "@typings/service";

import './Pages.scss';

const Vehicles = () => {
  const {id} = useParams();
  const {getInfo, info, count, next, previous} = useGettingInfo();

  const paginate: Paginate = (id) => {
    getInfo<StarWars_Response_people>(`${BASE_URL}/vehicles/?page=${id}`);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    paginate(id);
  }, [id]);
  
  return (
    <>
      <Header data={{count, next, previous}} />
      <article>
        {info?.length > 0 && info?.map((item: D.VehiclesState, index: number) => {
          return (<CardVehicles key={item.name} item={item} id={`Card${index}`}/>);
        })}
      </article>
      <Footer data={{count, next, previous}} />
      
    </>
  );
};

export default Vehicles;