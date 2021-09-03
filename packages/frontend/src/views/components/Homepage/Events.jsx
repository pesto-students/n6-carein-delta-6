import React, { useState, useEffect } from "react";
import SideNav from "../../common/SideNav";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import WalkCard from "../../common/WalkCard";
import DashboardLayout from "../../../containers/TheLayout";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../../actions/eventActions";

const Events = () => {
  const eventData = useSelector((state) => state.apiRes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listEvents());
  }, []);
  console.log(eventData);

  return (
    <DashboardLayout rightDrawer={true}>
      {eventData.length
        ? eventData.map((text, index) => <WalkCard event={text} key={index} />)
        : ""}
    </DashboardLayout>
  );
};

export default Events;
