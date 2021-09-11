import React, { useState } from "react";
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
import StarIcon from '@material-ui/icons/StarBorder';

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
    marginBottom: "10"
    
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



function WalkCard(props) {
  const classes = useStyles();
  const [reg, setReg] = useState("Register");

  

  return (
    <Grid item xs={12} md={4} lg={4} sm={6}>
      <Card className={classes.card}>
        <CardActionArea>
        
          <CardMedia component="img" image={props.event.media.url} height="150"/>
          <CardContent>
          
            <Typography
              className={classes.main}
              gutterBottom
              variant="h5"
              component="h4"
              width="50ch"
            >
              {props.event.title}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {props.event.startDate ? fDate(props.event.startDate) : ""}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {props.event.startDate ? fTime(props.event.startDate) : ""} to{" "}
      {props.event.endDate ? fTime(props.event.endDate) : ""}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {props.event.addressLine1}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {props.event.fee}
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              {props.event.capacity} Max
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
              onClick={() => setReg("Registered")}>
              {reg}
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default WalkCard;
