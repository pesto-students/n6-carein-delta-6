import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    height: 600,
    margin: theme.spacing(10, 65, 2),
  },
  text: {
    margin: theme.spacing(0, 10, 0),
  },
  main: {
    margin: theme.spacing(0, 23, 2),   
  },
  buttonstyle: {
    margin: theme.spacing(5, 25, 2),   
  }
})
);

export default function Emailverify() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="./assets/media/bg/verified.jpg"
        />
        <CardContent >
          <Typography className={classes.main} gutterBottom variant="h3" component="h2">
            Verified!!
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            Voila! You have successfully verified the account.
          </Typography>

          <Button className={classes.buttonstyle} size="large" color="secondary" href="/">
          Login Now
        </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
