import React, { useState, useEffect } from "react";
import AssistanceServiceCard from "../../common/AssistanceServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../../../actions/serviceActions";

const Services = () => {
  const serviceData = useSelector((state) => state.apiRes.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listServices());
  }, []);

  console.log(serviceData);
  return serviceData.data.length
    ? serviceData.data.map((text, index) => <AssistanceServiceCard service={text} key={index} />)
    : "";
};

export default Services;
