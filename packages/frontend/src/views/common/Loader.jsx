import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate() {
  const [loader, setLoader] = useState("false");
  const classes = useStyles();

  const showLoader = () => {
    setLoader(true);
  };

  const hideLoader = () => {
    setLoader(false);
  };
  return (
    <div className={classes.root}>{loader ? <CircularProgress /> : ""}</div>
  );
}
