import React from "react";
import AssistanceServiceCard from "../../common/AssistanceServiceCard";
import SideNav from "../../common/SideNav";
import { Grid } from "@material-ui/core";
import ServiceHead from "../../common/ServiceHead";
import DedicatedServiceCard from "../../common/DedicatedServiceCard";
import CaretackerCard from "../../common/CaretackerCard";
import DashboardLayout from "../../../containers/TheLayout";

const Services = () => {
  let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    data.map((text, index) => (
        <AssistanceServiceCard key={index} />
      )) 
  );
};

export default Services;
