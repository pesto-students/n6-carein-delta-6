import React, { useState, useRef, useEffect } from "react";
import PostCard from "../../common/PostCard";
import FeedCard from "../../common/FeedCard";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { listFeed } from "../../../actions/feedActions";
import { FixedSizeList } from "react-window";

const Homepage = (props) => {
  const feedData = useSelector((state) => state.apiRes.feeds);
  const dispatch = useDispatch();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  useEffect(() => {
    dispatch(listFeed());
  }, []);

  const Row = ({ index, style }) => (
    <div style={style}>
      <FeedCard user={user[index]} feed={feedData.data[index]} />
    </div>
  );
  return (
    <Grid item md={12} xs={12} lg={12}>
      <PostCard />
      {feedData.data.length
        ? feedData.data.map((data, id) => (
            <FeedCard user={user} key={id} feed={data} />
          ))
        : ""}
      <button
        onClick={() => dispatch(listFeed(feedData._start + feedData._limit))}
      >
        Load More
      </button>
    </Grid>
  );
};

export default Homepage;
