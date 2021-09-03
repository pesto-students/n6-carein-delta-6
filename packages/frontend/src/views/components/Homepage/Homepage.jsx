import React, { useState, useEffect } from "react";
import PostCard from "../../common/PostCard";
import FeedCard from "../../common/FeedCard";
import { Grid } from "@material-ui/core";
import DashboardLayout from "../../../containers/TheLayout";
import { useDispatch, useSelector } from "react-redux";
import { listFeed } from "../../../actions/feedActions";

const Homepage = () => {
  let feedData = [];
  feedData = useSelector((state) => state.apiRes);
  const dispatch = useDispatch();
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
  useEffect(() => {
    dispatch(listFeed());
  }, []);
  console.log(feedData);

  return (
    <DashboardLayout rightDrawer={true}>
      <Grid md={12} xs={12} lg={12}>
        <PostCard />
        {feedData.length
          ? feedData.map((data, id) => <FeedCard user={user} key={id} feed={data} />)
          : ""}
      </Grid>
    </DashboardLayout>
  );
};

export default Homepage;
