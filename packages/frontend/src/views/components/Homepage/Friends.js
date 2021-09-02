import { Grid } from "@material-ui/core";
import React from "react";
import FriendCard from "../../common/friendCard";
import FriendHead from "../../common/FriendHead";
import SideNav from "../../common/SideNav";

const Friends = () => {
  return (
    <div>
      <SideNav />
      <FriendHead />
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FriendCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Friends;
