import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 500,
    margin: theme.spacing(0, 40, 2),
  },
  text: {
    margin: theme.spacing(0, 0, 0),
  },
  main: {
    margin: theme.spacing(0, 0, 2),   
  },
  buttonstyle: {
    margin: theme.spacing(0, 10, 2),   
  }
})
);

function WalkCard() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="./assets/media/bg/event.jpg"
        />
        <CardContent >
          <Typography className={classes.main} gutterBottom variant="h5" component="h6">
            Sat, 4 September
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            Morning Exercise Group
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            6:00 AM to 7:00 AM
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            Jayant Park, New Delhi
          </Typography>

          <CardActions >
        <Button size="small">
          Interested
        </Button>
        <Button size="small">
         Register
        </Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
   
    </>

    
  );
}

export default WalkCard