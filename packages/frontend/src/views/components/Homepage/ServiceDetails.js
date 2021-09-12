import React, { useState } from "react";
import AssistanceService from "../../common/AssistanceService";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../../../actions/serviceActions";
import { useEffect } from "react";

const ServiceDetails = (props) => {
  const serviceData = useSelector((state) => state.apiRes.services);
  const dispatch = useDispatch();
  const [service, setService] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(listServices());
    let service_index = serviceData.data.findIndex((service) => {
      return service.id == id;
    });
    setService(serviceData.data[service_index]);
  }, [id]);

  console.log(service);
  return service ? <AssistanceService service={service} /> : '';
};

export default ServiceDetails;
