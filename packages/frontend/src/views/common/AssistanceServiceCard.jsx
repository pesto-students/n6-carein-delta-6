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
import { Link } from "react-router-dom";

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
    fontSize: "14px",
  },
  buttoninterested: {
    margin: theme.spacing(0, 0, 0),
  },
  buttonregister: {
    margin: theme.spacing(0, 0, 0),
  },
}));

function AssistanceServiceCard(props) {
  const classes = useStyles();
  console.log(props)

  return (
    <Grid item xs={12} md={4} lg={4} sm={6}>
      <Card className={classes.card}
      style={{
        background: `linear-gradient(336deg, #C4D09E, transparent)`,
      }}>
        <CardActionArea>
          <CardMedia component="img" image={props.service.media.url} height="150" />
          <CardContent>
            <Typography
              className={classes.main}
              gutterBottom
              variant="h5"
              component="h5"
              color="primary"
            >
            {props.service.title}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              
            {/*props.service.description*/} 
            </Typography>
            
            <Typography
              className={classes.text}
              variant="h6"
              color="textSecondary"
              component="h6"
            >
              Charges: Rs.{props.service.price_per_day}/day
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
              component={Link}
              to={`/ServiceDetails/${props.service.id}`}>
              More Details
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default AssistanceServiceCard;
