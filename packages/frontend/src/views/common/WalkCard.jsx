import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { Grid } from "@material-ui/core";
import { fDate, fTime } from "../../utils/formatTime";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    width: "calc(100% - 10px) !important",
    margin: "10px 5px !important",
  },
  card: {
    margin: "5px 5px",
  },
  text: {
    margin: theme.spacing(0, 0, 0),
    fontSize: "14px",
  },
  main: {
    margin: theme.spacing(0, 0, 1),
    fontSize: "18px",
  },
  buttoninterested: {
    margin: theme.spacing(0, 0, 0),
  },
  buttonregister: {
    margin: theme.spacing(0, 0, 0),
  },
}));

function WalkCard(props) {
  const classes = useStyles();

  return (
    <Grid xs={12} md={4} lg={4} sm={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" image={props.event.media.url} />
          <CardContent>
            <Typography
              className={classes.main}
              gutterBottom
              variant="h5"
              component="h6"
            >
              {fDate(props.event.startDate)}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {props.event.description}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {fTime(props.event.startDate)} to {fTime(props.event.endDate)}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {props.event.addressLine1}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className={classes.buttoninterested}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Interested
            </Button>
            <Button
              size="small"
              className={classes.buttoninterested}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default WalkCard;
