
import axios from "axios";
import fetchAdapter from "@shiroyasha9/axios-fetch-adapter";

import {BASE_URL} from "@utils/constants";

import {GettingData} from "@typings/service";


const instance = axios.create({
  adapter: fetchAdapter,
});


const gettingData: GettingData = async (param = BASE_URL) => {
  return await instance.get(`${param}`).then(({data}) => {
    return data;
  });
};

export {
  gettingData
};