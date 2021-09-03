import { Grid } from "@material-ui/core";
import React from "react";
import FriendHead from "../../common/FriendHead";
import FriendCard from "../../common/friendCard";
import SideNav from "../../common/SideNav";
import { makeStyles } from "@material-ui/core";
import DashboardLayout from "../../../containers/TheLayout";

const Friends = () => {
  let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <DashboardLayout rightDrawer={true}>
      {data.map((text, index) => (
        <FriendCard key={index} />
      ))}
    </DashboardLayout>
  );
};

export default Friends;
