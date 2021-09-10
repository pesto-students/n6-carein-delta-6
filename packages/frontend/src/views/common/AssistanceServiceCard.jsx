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
    fontSize: "18px",
  },
  buttoninterested: {
    margin: theme.spacing(0, 0, 0),
  },
  buttonregister: {
    margin: theme.spacing(0, 0, 0),
  },
}));

const services = [
  { title: 'Assistance with Outings', description: 'This Service aims for personal assistance for outside work', price: 'Charges: 499/day' },
  { title: 'Doctor Assistance', description: 'This service will offer in-house doctor assistance', price: 'Charges: 299/visit' },
  { title: 'Assistance without Outings', description: 'This Service aims for personal assistance for household work', price: 'Charges: 499/day' },
  { title: 'Simple Outdoors', description: 'This service will provide you great travel packages', price: 'Charges: 999/day' },
  { title: 'Meal Service', description: 'Need Homely Food, We offer custom meal service', price: 'Charges: 99/day' },
  { title: 'Caretacker', description: 'Need help if you are not well, then opt this service', price: 'Charges: 499/day' },
  { title: 'Easy Repairs', description: 'Carein assist you with fine technicians', price: 'Charges: 299/day' },
];



function AssistanceServiceCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} lg={4} sm={6}>
      <Card className={classes.card}
      style={{
        background: `linear-gradient(336deg, #C2E9F8, transparent)`,
      }}>
      {services.map((service) => (
        <CardActionArea>
          <CardMedia component="img" image={props.service.media.url} height="150" />
          <CardContent>
            <Typography
              className={classes.main}
              gutterBottom
              variant="h5"
              component="h6"
            >
            
            {/*props.service.title*/}
            {service.title}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              
            {/*props.service.description*/} 
            {service.description}
            </Typography>
            
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
             
              {/*props.service.price_per_day*/}
              {service.price}
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
              to="/ServiceDetails">
              More Details
            </Button>
          </CardActions>
        </CardActionArea>
        ))}
      </Card>
    </Grid>
  );
}

export default AssistanceServiceCard;
