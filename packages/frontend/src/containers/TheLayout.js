import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SideNav from "../views/common/SideNav";
import RightNav from "../views/common/RightNav";
import Hidden from "@material-ui/core/Hidden";
import { TheContent, TheHeader, TheFooter } from "./index";
import Header from "./Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    marginTop: "50px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 240,
      marginRight: 220,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: theme.spacing(12),
  },
}));

const DashboardLayout = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.root}>
      <SideNav></SideNav>
      {/* <Header /> */}
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <Grid container className={useStyles.root}>
          <TheContent />
        </Grid>
      </div>
      <Hidden smDown implementation="css">
        <RightNav />
      </Hidden>
    </div>
  );
};

export default DashboardLayout;
