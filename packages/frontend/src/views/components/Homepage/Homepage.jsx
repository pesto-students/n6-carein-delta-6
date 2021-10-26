import React, { useEffect } from "react";
import PostCard from "../../common/PostCard";
import FeedCard from "../../common/FeedCard";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { listFeed } from "../../../actions/feedActions";
import { countFeed } from "../../../actions/feedActions";
import { FixedSizeList } from "react-window";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Collection } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "@mui/material/Skeleton";
import { AutoSizer, List, ContentBox } from "react-virtualized";
const Homepage = (props) => {
  const feedData = useSelector((state) => state.apiRes.feeds);
  const feedCount = useSelector((state) => state.apiRes.feedCount);
  const dispatch = useDispatch();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  useEffect(() => {
    dispatch(listFeed());
    dispatch(countFeed());
  }, []);

  const Row = ({ index, style }) => (
    <div style={style}>
      <FeedCard user={user[index]} feed={feedData.data[index]} />
    </div>
  );
  const cellSizeAndPositionGetter = ({ index }) => {
    const datum = feedData.data[index];

    return {
      height: 300,
      width: 300,
      x: 0,
      y: 0,
    };
  };
  const cellRenderer = ({ index, key, style }) => {
    return (
      <FeedCard
        style={{ height: 500 }}
        key={key}
        user={user}
        feed={feedData.data[index]}
      />
    );
  };

  return (
    <Grid item md={12} xs={12} lg={12}>
      <PostCard />


      {feedData.data.length ? (
        <InfiniteScroll
          dataLength={feedCount.data - feedData.data.length} //This is important field to render the next data
          next={() => dispatch(listFeed(feedData._start + feedData._limit))}
          hasMore={feedCount.data - feedData.data.length < 0 ? false : true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {feedData.data.map((data, id) => (

            <FeedCard user={user} key={id} feed={data} />
          ))}
        </InfiniteScroll>
      ) : (
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, id) => (
          // <FeedCard user={user} key={id} feed={data} />
          <Card key={id} style={{ marginTop: 20 }}>
            <CardHeader
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subheader={<Skeleton animation="wave" height={10} width="40%" />}
            />

            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />

            <CardContent>
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            </CardContent>
          </Card>
        ))
      )}
    </Grid>
  );
};

export default Homepage;
