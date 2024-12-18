import React from "react";
import {useAppSelector} from "@store/hooks";
import './Loading.scss';

const Loading = () => {
  const {isLoading} = useAppSelector((state) => state.data);        

  return (
    <div className={`loading-wrapper ${isLoading ? 'loading' : ''}`}>
      <div className="loading-item"></div>
    </div>
  );
};
  
export default Loading;