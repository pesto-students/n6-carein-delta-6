import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import FriendCard from "../../common/friendCard";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { listFriend } from "../../../actions/friendsActions";
import { listNFriend } from "../../../actions/friendsNActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
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
  console.log(friendsData);
  console.log(friendsNData);
  const renderSwitch = () => {
    switch (page) {
      case "myFriends":
        return friendsData.data?.friendList?.map((text, index) => (
          <FriendCard key={index} />
        ));
      case "approval":
        return friendsData.data?.openRequest?.map((text, index) => (
          <FriendCard key={index} />
        ));
      case "findFriends":
        return "bar";
      default:
        return friendsData.data?.friendList?.map((text, index) => (
          <FriendCard key={index} />
        ));
    }
  };
  let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <Grid className={classes.leftCont} container lg={2} md={2} xs={12}>
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
      <Grid container lg={10} md={10} xs={12}>
        {renderSwitch()}
      </Grid>
    </>
  );
};

export default Friends;
