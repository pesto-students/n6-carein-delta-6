import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SideNav from "../views/common/SideNav";
import RightNav from "../views/common/RightNav";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "50px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const DashboardLayout = (props) => {
  const classes = useStyles();
  console.log(props)
  return (
    <div className={classes.root}>
      <SideNav></SideNav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container className={useStyles.root}>
          {props.children}
        </Grid>
      </div>
      {props.rightDrawer ? (<Hidden smDown implementation="css"><RightNav  /></Hidden>) : ""}
    </div>
  );
};

export default DashboardLayout;
