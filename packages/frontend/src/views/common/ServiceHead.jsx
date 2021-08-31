import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: 70,
    margin: theme.spacing(-7, 0, 2),
  },
  main: {
    margin: theme.spacing(1, 40, 2),   
  },
})
);

function ServiceHead() {
  const classes = useStyles();

  return (
    <Grid container>
    <Grid item md={12}>
    <Card className={classes.root}>
        <CardContent >
          <Typography className={classes.main} gutterBottom variant="h5" component="h6">
            Services
          </Typography>
        </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}

export default ServiceHead