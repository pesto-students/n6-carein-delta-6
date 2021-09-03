import React, { useState, useEffect } from "react";
import PostCard from "../../common/PostCard";
import FeedCard from "../../common/FeedCard";
import { Grid } from "@material-ui/core";
import DashboardLayout from "../../../containers/TheLayout";
import { useDispatch, useSelector } from "react-redux";
import { listFeed } from "../../../actions/feedActions";

const Homepage = () => {
  let feedData = []
  feedData = useSelector((state) => state.apiRes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listFeed());
  }, []);
  console.log(typeof feedData)
  return (
    <DashboardLayout rightDrawer={true}>
      <Grid>
        
        <PostCard />
        {feedData.map((data, id) => (
          <FeedCard key={id} feed={data} />
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default Homepage;
