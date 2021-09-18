import React, { useEffect } from "react";
import PostCard from "../../common/PostCard";
import FeedCard from "../../common/FeedCard";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { listFeed } from "../../../actions/feedActions";
import { FixedSizeList } from "react-window";
import { AutoSizer, List } from "react-virtualized";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
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
    <>
      <div style={style}>
        <FeedCard user={user[index]} feed={feedData.data[index]} />
      </div>
    </>
  );
  return (
    <Grid item md={12} xs={12} lg={12}>
      <PostCard />
      {feedData.data.length ? (
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={750}
              rowCount={feedData.data.length}
              rowHeight={({ index }) => {
                if (feedData.data[index].media.length) {
                  return feedData.data[index].comments.length ? 700 : 600;
                } else {
                  return feedData.data[index].comments.length ? 400 : 300;
                }
              }}
              rowRenderer={Row}
              width={width}
            />
          )}
        </AutoSizer>
      ) : (
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, id) => (
          // <FeedCard user={user} key={id} feed={data} />
          <Card style={{ marginTop: 20 }}>
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
