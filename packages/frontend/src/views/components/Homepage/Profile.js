import React, { useState, useEffect } from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import FriendCard from "../../common/friendCard";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { profileData } from "../../../actions/profileAction";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import randomColor from "randomcolor";
import FeedCard from "../../common/FeedCard";
import PostCard from "../../common/PostCard";
import { listFeed } from "../../../actions/feedActions";
import ProfileDetails from "../../common/ProfileDetails";
import ProfileCard from "../../common/ProfileCard";
import Skeleton from "@mui/material/Skeleton";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
  },

  leftCont: {},
  list: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    marginBottom: "10px",
  },
  listFont: {
    fontSize: theme.spacing(1.605),
    marginBottom: "0px",
  },

  nameText: {
    marginBottom: 0,
    fontSize: 20,
    color: "white",
    fontWeight: 600,
    textTransform: "capitalize",
  },
  cityText: {
    fontSize: "14px",
    marginBottom: "0",
    color: "whitesmoke",
    textTransform: "capitalize",
  },
  infoText: {
    fontSize: "14px",
    marginBottom: "0",
    color: "whitesmoke",
    textTransform: "capitalize",
  },
  friends: {
    display: 'flex',
    marginTop: '10px',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

const Profile = (props) => {
  let color = randomColor();
  const classes = useStyles();
  let profile = useSelector((state) => state.apiRes.profile);
  const feedData = useSelector((state) => state.apiRes.feeds);
  const [page, setPage] = useState("about");
  const dispatch = useDispatch();
  const me = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  // const [id,setId] = useState(me.id)
  console.log(props.match.params.id)
  const id = props.match.params.id ? props.match.params.id : me.id;
  console.log(id)
  useEffect(() => {
    profile = { data: {}, _error: "" };
    if (id) {
      dispatch(profileData(id));
      setPage("about");
    }
  }, [id]);

  const renderSwitch = () => {
    switch (page) {
      case "about":
        return (
          <>
            <Grid className={classes.main} item xl={12} md={12} lg={12}>
              <ProfileDetails profile={profile.data}></ProfileDetails>
            </Grid>
          </>
        );

      case "feeds":
        return (
          <>
            <Grid item xl={12} md={12} lg={12}>
              {feedData.data.length
                ? feedData.data.map((data, id) => (
                    <FeedCard user={me} key={id} feed={data} />
                  ))
                : ""}
            </Grid>
          </>
        );

      case "team":
        return (
          <>
            <Grid className={classes.friends} item xl={12} md={12} lg={12}>
              {profile.data?.friends?.map((user, index) => (
                <ProfileCard user={user} key={index}></ProfileCard>
              ))}
            </Grid>
          </>
        );
      default:
        return (
          <>
            <Grid item xl={12} md={12} lg={12}>
              <div className={classes.header}>My Team</div>
            </Grid>
          </>
        );
    }
  };

  const goto = (page) => {
    console.log(page);
    switch (page) {
      case "about":
        setPage("about");
        return;
      case "feeds":
        dispatch(listFeed(0, profile.data.id));
        setPage("feeds");
        return;
      case "team":
        setPage("team");
        return;
    }
  };
  return (
    <>
      <div
        className="cardheader1"
        style={{
          background: `linear-gradient(2deg, rgb(4 39 80), #b8c2d1)`,
          width: "100%",
        }}
      >
        <div className="profileDash">
          {profile.data ? (
            <img
              className="cardProfileimg1"
              src={
                profile.data.profilePic
                  ? profile.data.profilePic.url
                  : `./assets/media/bg/profile.jpg`
              }
            />
          ) : (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          )}
          <div>
            <p className={classes.nameText}>
              {profile.data.firstName} {profile.data.lastName}
            </p>
            <p className={classes.cityText}>
              {profile.data.city} {profile.state}{" "}
            </p>
            <p className={classes.infoText}>{profile.data.infoStatus}</p>
          </div>
        </div>
        <Button
          size="small"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ borderRadius: "14px", width: "180px" }}
        >
          Add As Friend
        </Button>
      </div>
      <Grid className={classes.leftCont} item lg={2} md={2} xs={12}>
        <List className={classes.root} style={{ width: "90%" }} component="nav">
          <ListItem
            className={classes.list}
            button
            onClick={() => goto("about")}
          >
            <p className={classes.listFont}>About</p>
          </ListItem>
          <ListItem
            className={classes.list}
            button
            onClick={() => goto("feeds")}
          >
            <p className={classes.listFont}>Feeds </p>
          </ListItem>
          <ListItem
            className={classes.list}
            button
            onClick={() => goto("team")}
          >
            <p className={classes.listFont}>Team </p>
          </ListItem>
        </List>
      </Grid>
      <Grid item lg={10} md={10} xs={12}>
        {renderSwitch()}
      </Grid>
    </>
  );
};

export default Profile;
