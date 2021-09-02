import React from "react";
import PostCard from "../../common/PostCard";
import RightNav from "../../common/RightNav";
import SideNav from "../../common/SideNav";
import FeedCard from "../../common/FeedCard";
import { Grid } from "@material-ui/core";
import DashboardLayout from "../../../containers/TheLayout";

const Homepage = () => {
  return (
 
    <DashboardLayout rightDrawer={true}>
      <Grid >
        <PostCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </Grid>
    </DashboardLayout>
  );
};

export default Homepage;
