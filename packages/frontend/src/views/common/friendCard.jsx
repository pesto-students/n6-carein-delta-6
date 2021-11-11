import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    width: "calc(100% - 10px) !important",
    margin: "10px 5px !important",
  },
  card: {
    margin: "5px 5px ",
  },
  text: {
    margin: theme.spacing(-2, 0, 0),
  },
  main: {
    margin: theme.spacing(0, 0, 2),
  },
  buttonstyle: {
    margin: theme.spacing(3, 0, 2),
  },
  removebutton: {
    margin: theme.spacing(3, 3, 2),
  },
}));

function FriendCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} lg={4} sm={6}>
      <Card className={classes.card}>
        <CardMedia component="img" image="./assets/media/bg/profile.jpg" />
        <CardContent>
          <Typography
            className={classes.main}
            gutterBottom
            variant="h5"
            component="h6"
          >
            {props.user.firstName} {props.user.lastName}
          </Typography>
          <Typography
            className={classes.text}
            color="textSecondary"
            component="p"
          >
            7 Mutual Friends
          </Typography>
          <Button size="small" className={classes.buttonstyle}>
            Add Friend
          </Button>
          <Button size="small" className={classes.removebutton}>
            Remove
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default FriendCard;
