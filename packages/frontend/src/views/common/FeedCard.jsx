import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { List } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight:"100%",
    margin: theme.spacing(0, 40, 0),
  },
  main: {
    margin: theme.spacing(0, 0, 2),
  },
  profile: {
    margin: theme.spacing(-1, 0, 0),
  },
  text: {
    margin: theme.spacing(-2, 0, 0),
  },
  date: {
    margin: theme.spacing(-2, 0, 0),
  },
  icon: {
    margin: theme.spacing(2, 2, 2),
  },
}));

function FeedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
          <Grid container spacing={3} className={classes.main}>
          <Grid item md={1.5} className={classes.profile}>
            <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </Grid>
          <Grid item md={5} className={classes.text}>
          <Typography
          className={classes.main}
          gutterBottom
          variant="h6"
          component="h6"
        >
          Clara Kim
        </Typography>
        <Typography
          className={classes.date}
          gutterBottom
          variant="p"
          component="p"
        >
          20 August at 9:30 PM
        </Typography>
          </Grid>
          <Grid item md={1} className={classes.icon}>
            
          </Grid>
        </Grid>
        <Grid container>
        <Grid item md={12}>
        <Typography
          className={classes.main}
          gutterBottom
          variant="p"
          component="p"
        >
          Morning exercise makes you fit...!!!
        </Typography>
        </Grid>
        </Grid>
        <Grid container>
        <Grid item md={12}>
        <CardMedia
          component="img"
          image="./assets/media/bg/feed.jpg"
        />
        </Grid>
        </Grid>
        <Divider/>
        <Grid container>
        <Grid item md={4}>
        <List>
        <ListItem>
          <ListItemIcon>
            <ChatBubbleOutlineIcon/>
          </ListItemIcon>
          <ListItemText primary="Comments" />
        </ListItem>
        </List>
        </Grid>
        <Grid item md={4}>
        <List>
        <ListItem>
          <ListItemIcon>
            <FavoriteIcon/>
          </ListItemIcon>
          <ListItemText primary="Likes" />
        </ListItem>
        </List>
        </Grid>
        <Grid item md={4}>
        <List>
        <ListItem>
          <ListItemIcon>
            <BookmarkIcon/>
          </ListItemIcon>
          <ListItemText primary="Saved" />
        </ListItem>
        </List>
        </Grid>
        </Grid>
        <Grid container>
        <Grid item md={1} >
        <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
        </Grid>
        <Grid item md={11}>
        <TextField
        variant="filled"
        required
        fullWidth
        id="postfield"
        label="What's on your mind?"
        name="postfield"
        
      />
        </Grid>
        </Grid>
        
        
      </CardContent>
    </Card>
  );
}

export default FeedCard;
