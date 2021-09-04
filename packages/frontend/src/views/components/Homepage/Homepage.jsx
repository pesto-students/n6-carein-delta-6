import React, { useState, useEffect } from "react";
import PostCard from "../../common/PostCard";
import FeedCard from "../../common/FeedCard";
import { Grid } from "@material-ui/core";
import DashboardLayout from "../../../containers/TheLayout";
import { useDispatch, useSelector } from "react-redux";
import { listFeed } from "../../../actions/feedActions";

const Homepage = (props) => {
  const feedData = useSelector((state) => state.apiRes.feeds);
  const dispatch = useDispatch();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  useEffect(() => {
    dispatch(listFeed());
  }, []);

  console.log(feedData);

  return (
    <Grid md={12} xs={12} lg={12}>
        <PostCard />
        {feedData.data.length
          ? feedData.data.map((data, id) => (
              <FeedCard user={user} key={id} feed={data} />
            ))
          : ""}
          <button onClick={() => dispatch(listFeed(feedData._start + feedData._limit))}>Load More</button>
      </Grid>
  );
};

export default Homepage;
