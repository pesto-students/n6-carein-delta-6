import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    //minWidth:300,
    maxWidth: "100%",
   // minHeight:300,
    margin: theme.spacing(0, 2, 3),
    
  },
  text: {
    margin: theme.spacing(-2, 0, 0),
  },
  main: {
    margin: theme.spacing(0, 0, 2),   
  },
  buttonstyle: {
    margin: theme.spacing(3 , 0, 2),   
  },
  removebutton: {
    margin: theme.spacing(3 , 3, 2),   
  }
})
);

function FriendCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          image="./assets/media/bg/profile.jpg"
        />
        <CardContent >
          <Typography className={classes.main} gutterBottom variant="h5" component="h6">
            Sakshi Verma
          </Typography>
          <Typography className={classes.text} variant="p" color="textSecondary" component="p">
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
  );
}

export default FriendCard