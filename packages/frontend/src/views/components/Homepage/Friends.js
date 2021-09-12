import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import FriendCard from "../../common/friendCard";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { listFriend } from "../../../actions/friendsActions";
import { listNFriend } from "../../../actions/friendsNActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ProfileCard from "../../common/ProfileCard";
import FriendRequestCard from "../../common/FriendRequestCard";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
  },
  leftCont: {
    position: "relative",
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    marginBottom: "10px",
  },
  listFont: {
    fontSize: theme.spacing(1.605),
    marginBottom: "0px",
  },
  header: {
    height: theme.spacing(4),
    background: "white",
    lineHeight: "30px",
    padding: "0px 10px",
    fontWeight: "500",
    borderRadius: "5px",
    "box-shadow": "4px 3px 6px 0px #0000003b",
  },
  friendFlex: {
    display: "flex",
    margin: "16px 0px",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

const Friends = () => {
  const classes = useStyles();
  const friendsData = useSelector((state) => state.apiRes.friends);
  const friendsNData = useSelector((state) => state.apiRes.friendsN);
  const dispatch = useDispatch();
  const [page, setPage] = useState("myFriends");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  useEffect(() => {
    dispatch(listFriend());
    dispatch(listNFriend());
  }, []);

  const renderSwitch = () => {
    switch (page) {
      case "myFriends":
        return (
          <>
            <Grid item xl={12} md={12} lg={12}>
              <div className={classes.header}>My Friends</div>
              <Grid className={classes.friendFlex}>
                {friendsData.data?.friendList?.map((user, index) => (
                  // <FriendCard user={user} key={index} />
                  <ProfileCard user={user} key={index}></ProfileCard>
                ))}
              </Grid>
            </Grid>
          </>
        );

      case "approval":
        return (
          <>
            <Grid item xl={12} md={12} lg={12}>
              <div className={classes.header}>Friend Requests</div>
              <Grid className={classes.friendFlex}>
                {friendsData.data?.openRequest?.map((user, index) => (
                  <FriendRequestCard
                    request={user}
                    key={index}
                  ></FriendRequestCard>
                ))}
              </Grid>
            </Grid>
          </>
        );

      case "findFriends":
        return (
          <>
            <Grid item xl={12} md={12} lg={12}>
              <div className={classes.header}>People Nearby</div>
              <Grid className={classes.friendFlex}>
                {friendsNData.data?.nearby?.map((user, index) => (
                  <ProfileCard user={user} key={index}></ProfileCard>
                ))}
              </Grid>
            </Grid>
            {/* <Grid item xl={12} md={12} lg={12}>
              <div className={classes.header}>People you may know</div>
              <Grid className={classes.friendFlex}>
                {friendsNData.data?.fof?.map((user, index) => (
                  <ProfileCard user={user} key={index}></ProfileCard>
                ))}
              </Grid>
            </Grid> */}
          </>
        );
      default:
        return friendsData.data?.friendList?.map((text, index) => (
          <FriendCard key={index} />
        ));
    }
  };
  return (
    <>
      <Grid className={classes.leftCont} item lg={2} md={2} xs={12}>
        <List
          className={classes.root}
          style={{ position: "fixed" }}
          component="nav"
        >
          <ListItem
            className={classes.list}
            button
            onClick={() => setPage("myFriends")}
          >
            <p className={classes.listFont}>My Friends</p>
          </ListItem>
          <ListItem
            className={classes.list}
            button
            onClick={() => setPage("approval")}
          >
            <p className={classes.listFont}>Pending Approval </p>
          </ListItem>
          <ListItem
            className={classes.list}
            button
            onClick={() => setPage("findFriends")}
          >
            <p className={classes.listFont}>Find Friends </p>
          </ListItem>
        </List>
      </Grid>
      <Grid item lg={10} md={10} xs={12}>
        {renderSwitch()}
      </Grid>
    </>
  );
};

export default Friends;
