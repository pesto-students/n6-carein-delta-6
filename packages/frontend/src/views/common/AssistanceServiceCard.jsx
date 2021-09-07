import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    maxWidth: 250,
    minHeight: 250,
    margin: theme.spacing(0, 40, 2),
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

const AssistanceServiceCard = () => {
  const classes = useStyles();
  var service= {};
  return (
    <Grid xs={12} md={4} lg={3} sm={6}>
      <Card className={classes.card}>
        <CardMedia component="img" image="./assets/media/bg/assistance.jpg" />
        <CardContent>
          <Typography
            className={classes.main}
            gutterBottom
            variant="h5"
            component="h6"
          >
            {service.name}
          </Typography>
          <Button
            size="small"
            className={classes.buttonstyle}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/ServiceDetails"
          >
            More Details
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AssistanceServiceCard;
