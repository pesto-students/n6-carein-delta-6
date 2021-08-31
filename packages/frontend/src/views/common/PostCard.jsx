import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: 150,
    margin: theme.spacing(-3, 40, 2),
  },
  main: {
    margin: theme.spacing(0, 0, 2),   
  },
  profile: {
    margin: theme.spacing(1, 0, 2),   
  },
  text: {
    margin: theme.spacing(0, -2, 2),   
  },
  icon: {
    margin: theme.spacing(2, 2, 2),   
  },
})
);

function PostCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent >
          <Typography className={classes.main} gutterBottom variant="h6" component="h6">
            Post Something
          </Typography>
          <Divider/>

          <Grid container spacing={3} className={classes.main}>         
          <Grid item xs={1} className={classes.profile}>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </Grid>
          <Grid item xs={10} className={classes.text}>
          <TextField
          variant="filled"
          required
          fullWidth
          id="postfield"
          label="What's on your mind?"
          name="postfield"
        />
          </Grid>
          <Grid item xs={1} className={classes.icon}>
            <PhotoIcon/>
          </Grid>
        </Grid>
  
        </CardContent>
    </Card>
  );
}

export default PostCard