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
    maxWidth: "100%",
    height: 70,
    margin: theme.spacing(-3, 40, 2),
  },
  main: {
    margin: theme.spacing(0, 0, 2),   
  },
})
);

function EventHead() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent >
          <Typography className={classes.main} gutterBottom variant="h4" component="h6">
            Discover Events Near you
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default EventHead