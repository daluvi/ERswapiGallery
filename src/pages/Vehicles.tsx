import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {BASE_URL} from "../utils/constants";
import CardVehicles from '../component/Card/Vehicles';
import Footer from "../component/Footer";
import Header from "../component/Header";
import useGettingInfo from "../hooks/useGettingInfo";

import {Data as D} from "../@type/store/reducers";
import {Paginate} from "../@type/app";
import {StarWars_Response_people} from "../@type/service/service";


const Vehicles = () => {
  const {id} = useParams();
  const {getInfo, info, count, next, previous} = useGettingInfo();
  const data = {count, next, previous};
  

  const paginate: Paginate = (id) => {
    getInfo<StarWars_Response_people>(`${BASE_URL}/vehicles/?page=${id}`);
  };
  
  useEffect(() => {
    paginate(id);
  }, [id]);
  
  return (
    <>
      <Header data={data} />
      <article>
        {info?.length > 0 && info?.map((item: D.VehiclesState, index) => {
          return (<CardVehicles key={item.name} item={item} id={`Card${index}`}/>);
        })}
      </article>
      <Footer data={data} />
      
    </>
  );
};

export default Vehicles;