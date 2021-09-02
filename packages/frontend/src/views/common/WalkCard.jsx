import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    width: "calc(100% - 10px) !important",
    margin: "10px 5px !important",
  },
  card : {
    margin :'5px 5px'
  },
  text: {
    margin: theme.spacing(0, 0, 0),
  },
  main: {
    margin: theme.spacing(0, 0, 2),
  },
  buttoninterested: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonregister: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function WalkCard() {
  const classes = useStyles();

  return (
    <Grid xs={12} md={4} lg={3} sm={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" image="./assets/media/bg/event.jpg" />
          <CardContent>
            <Typography
              className={classes.main}
              gutterBottom
              variant="h5"
              component="h6"
            >
              Sat, 4 September
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              Morning Exercise Group
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              6:00 AM to 7:00 AM
            </Typography>
            <Typography
              className={classes.text}
              variant="p"
              color="textSecondary"
              component="p"
            >
              Jayant Park, New Delhi
            </Typography>

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
                className={classes.buttonregister}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default WalkCard;
