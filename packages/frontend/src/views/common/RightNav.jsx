import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ListItemText } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { listFriend } from "../../actions/friendsActions";
import { Link } from "react-router-dom";
const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  "drawer::-webkit-scrollbar": {
    width: "5px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  activity: {
    margin: theme.spacing(1, 1, 1),
  },

  name: {
    fontSize: "14px",
  },
  seemore: {
    margin: theme.spacing(-6, 20, 4),
  },

  drawerPaper: {
    width: drawerWidth,
  },
  "MuiListItemText-primary": {
    fontSize: "14px",
  },
  drawerContainer: {
    overflow: "auto",
    background: "linear-gradient(45deg, #b7e9f7 30%, #92dff3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 800,
    //padding: '0 30px',
    margin: theme.spacing(0, 0, 0),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function RightNav() {
  const classes = useStyles();
  const friendsData = useSelector((state) => state.apiRes.friends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listFriend());
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />

        <List component="nav">
          <Typography
            component="h1"
            variant="h6"
            sx={{ color: "text.secondary", mt: 3 }}
            className={classes.activity}
          >
            Friends
          </Typography>
          {friendsData.data?.friendList?.map((user, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={`/profile/${user.id}`}
            >
              <ListItemIcon>
                <Avatar
                  alt="M"
                  src={
                    user.media
                      ? user.media.url
                      : `./assets/media/bg/profile.jpg`
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={`${user.firstName ? user.firstName : ""} ${
                  user.lastName ? user.lastName : ""
                }`}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
