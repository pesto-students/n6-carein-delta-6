import React from "react";
import SideNav from "../../common/SideNav";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import WalkCard from "../../common/WalkCard";
import DashboardLayout from "../../../containers/TheLayout";
 
const Events = () => {
  
  let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <DashboardLayout rightDrawer={true}>
      {data.map((text, index) => (
        <WalkCard key={index} />
      ))}
    </DashboardLayout>
  );
};

export default Events;
