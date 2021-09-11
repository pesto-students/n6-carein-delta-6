import React from 'react'
import AssistanceService from '../../common/AssistanceService'
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../../../actions/serviceActions";
import { useEffect } from 'react';

const ServiceDetails = () => {
    const serviceData = useSelector((state) => state.apiRes.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listServices());
  }, []);

  console.log(serviceData);
    return serviceData.data.length
    ? serviceData.data.map((text, index) => <AssistanceService service={text} key={index} />)
    : "";
}

export default ServiceDetails
