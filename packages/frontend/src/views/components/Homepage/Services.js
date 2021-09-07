import React from "react";
import AssistanceServiceCard from "../../common/AssistanceServiceCard";
import { useDispatch, useSelector } from "react-redux";

const Services = () => {
  let data = [1, 2, 1, 1, 1, 1];
  return (
    data.map((service, index) => (
        <AssistanceServiceCard key={index} />
      )) 
  );
};

export default Services;
