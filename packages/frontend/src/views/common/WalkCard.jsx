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
import StarIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    width: "calc(100% - 10px) !important",
    margin: "0px 0px !important",
  },
  card: {
    margin: "4px 6px",
    marginBottom: "10",
  },
  text: {
    margin: theme.spacing(0, 0, 0),
    fontSize: "14px",
  },
  main: {
    margin: theme.spacing(0, 0, 1),
    fontSize: "18px",
  },
}));
const events = [
  {
    description: "Yoga Classes",
    date: "Sep, 15 2021",
    time: "8:00 AM to 9:00 AM",
    address: "Pashchim Vihar, New Delhi",
    price: "Rs.50/day",
    seats: "Max:20 members",
  },
  {
    description: "Morning Walk",
    date: "Sep, 15 2021",
    time: "6:00 AM to 7:00 AM",
    address: "Vasant Kunj, New Delhi",
    price: "Free of Cost",
    seats: "Max:20 members",
  },
  {
    description: "Shopping",
    date: "Sep, 18 2021",
    time: "4:00 PM to 7:00 PM",
    address: "Lajpat Nagar, New Delhi",
    price: "Free of Cost",
    seats: "Max:5 members",
  },
  {
    description: "Temple Buddies",
    date: "Sep, 25 2021",
    time: "6:00 AM",
    address: "Akshardham, New Delhi",
    price: "Rs.400/entry",
    seats: "Max:20 members",
  },
  {
    description: "Buffet",
    date: "Oct, 10 2021",
    time: "2:00 PM to 3:00 PM",
    address: "Barbeque Nation, New Delhi",
    price: "Rs. 499/person",
    seats: "Max:20 members",
  },
];

function WalkCard(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("Interest");
  const [reg, setReg] = useState("Register");

  return (
    <Grid item xs={12} md={4} lg={4} sm={6}>
      <Card className={classes.card}>
        {events.map((event, index) => (
          <CardActionArea key={index}>
            <CardMedia
              component="img"
              image={props.event.media.url}
              height="150"
            />
            <CardContent>
              <Typography
                className={classes.main}
                gutterBottom
                variant="h5"
                component="h6"
              >
                {/*props.event.startDate ? fDate(props.event.startDate) : ""*/}
                {event.description}
              </Typography>
              <Typography className={classes.text} color="textSecondary">
                {/*props.event.description*/}
                {event.date}
              </Typography>
              <Typography
                className={classes.text}
                color="textSecondary"
              >
                {/*props.event.startDate ? fTime(props.event.startDate) : ""} to{" "}
      {props.event.endDate ? fTime(props.event.endDate) : ""*/}
                {event.time}
              </Typography>
              <Typography
                className={classes.text}
                color="textSecondary"
              >
                {/*props.event.addressLine1*/}
                {event.address}
              </Typography>
              <Typography
                className={classes.text}
                color="textSecondary"
              >
                {/*props.event.addressLine1*/}
                {event.price}
              </Typography>
              <Typography
                className={classes.text}
                color="textSecondary"
              >
                {/*props.event.addressLine1*/}
                {event.seats}
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
                onClick={() => setReg("Registered")}
              >
                {reg}
              </Button>
            </CardActions>
          </CardActionArea>
        ))}
      </Card>
    </Grid>
  );
}

export default WalkCard;
