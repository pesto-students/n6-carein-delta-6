import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
// import { Avatar } from "@material-ui/core";
// import { TextField } from "@material-ui/core";
// import PhotoIcon from "@material-ui/icons/Photo";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",

    width: "100%",
  },
  main: {
    margin: theme.spacing(0, 0, 0),
  },
  listInnerValue: {
    textAlign: "right",
    textTransform: "capitalize",
    fontSize: "14px",
    color: "#636363",
  },
  listInnerTitle: {
    fontWeight: 600,
  },
  profile1: {
    margin: theme.spacing(1, 0, 1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "20px",
  },
  text: {
    margin: theme.spacing(0, -2, 2),
  },
  icon: {
    margin: theme.spacing(2, 2, 2),
  },
}));

function ProfileDetails(props) {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.main} variant="h6" component="h6">
          Profile Details
        </Typography>
        <Divider />
        <Grid item lg={12} md={12} xs={12} className={classes.profile1}>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}>Name</div>
            <div className={classes.listInnerValue}>
              {props.profile.firstName} {props.profile.lastName}
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}> </div>
            <div className={classes.listInnerValue}> </div>
          </Grid>
        </Grid>
        <Divider />

        <Grid item lg={12} md={12} xs={12} className={classes.profile1}>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}>Email</div>
            <div className={classes.listInnerValue}>{props.profile.email}</div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}>Phone</div>
            <div className={classes.listInnerValue}>
              {props.profile.username}
            </div>
          </Grid>
        </Grid>
        <Divider />

        <Grid item lg={12} md={12} xs={12} className={classes.profile1}>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}>Address</div>
            <div className={classes.listInnerValue}>
              {props.profile.addressLine1} {"\n"}
              {props.profile.addressLine2}
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}>City</div>
            <div className={classes.listInnerValue}>{props.profile.city}</div>
          </Grid>
        </Grid>
        <Divider />

        <Grid item lg={12} md={12} xs={12} className={classes.profile1}>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}>State</div>
            <div className={classes.listInnerValue}>{props.profile.state}</div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={classes.profile1}>
            <div className={classes.listInnerTitle}>Pincode</div>
            <div className={classes.listInnerValue}>
              {props.profile.pincode}
            </div>
          </Grid>
        </Grid>
        <Divider />
      </CardContent>
    </Card>
  );
}

export default ProfileDetails;
