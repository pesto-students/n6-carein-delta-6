import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:250,
    maxWidth: 250,
    minHeight:250,
    maxHeight:250,
    margin: theme.spacing(0, 40, 2),
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



const DedicatedServiceCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardMedia
          component="img"
          image="./assets/media/bg/dedicated.jpg"
        />
        <CardContent >
          <Typography className={classes.main} gutterBottom variant="h5" component="h6">
            Dedicated Assistance Service
          </Typography>
        <Button size="small" className={classes.buttonstyle}
        type="submit"
        fullWidth
        variant="contained"
        color="primary">
          More Details
        </Button>
        </CardContent>
    </Card>  
    )
}

export default DedicatedServiceCard