import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { List } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { TextField } from "@material-ui/core";
import { fToNow } from "../../utils/formatTime";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "10px 0px",
  },
  main: {
    margin: theme.spacing(0, 0, 1),
    "text-transform": "capitalize",
  },
  profile: {
    margin: theme.spacing(-1, 0, 0),
  },
  text: {
    margin: theme.spacing(-2, 0, 0),
  },
  date: {
    margin: theme.spacing(-1, 0, 0),
    "font-size": "14px",
    color: "gray",
  },
  icon: {
    margin: theme.spacing(2, 2, 1),
  },
  media: {
    "object-fit": "cover",
    "max-height": "300px",
    width: "100% !important",
  },
  avatar: {
    margin: "auto",
    display: "flex",
    flexWrap: "nowrap",
    alignContent: "flex-start",
    justifyContent: "center",
  },
  box: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  textBox: {
    cursor: "pointer",
    marginBottom: 0,
  },
  comments: {
    "align-items": "center",
    margin: "10px 0px",
  },
  commentsTextBox: {
    background: "#a2cbff",
    padding: "7px 8px",
    "border-radius": "20px 20px 20px 1px",
  },
}));

function FeedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3} className={classes.main}>
          <Grid item md={0.5} className={classes.profile}>
            <Avatar
              alt={props.feed.postedBy.firstName}
              src={props.feed.postedBy.profilePic.url}
            />
          </Grid>
          <Grid item md={5} className={classes.text}>
            <Typography
              className={classes.main}
              gutterBottom
              variant="h6"
              component="h6"
            >
              {props?.feed?.postedBy?.firstName}{" "}
              {props?.feed?.postedBy?.lastName}
            </Typography>
            <Typography
              className={classes.date}
              gutterBottom
              variant="p"
              component="p"
            >
              {props.feed.postedBy.createdAt ? fToNow(props.feed.postedBy.createdAt) : ""}
            </Typography>
          </Grid>
          <Grid item md={1} className={classes.icon}></Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <Typography
              className={classes.main}
              gutterBottom
              variant="p"
              component="p"
            >
              {props?.feed?.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <CardMedia
              component="img"
              className={classes.media}
              image={props?.feed?.media[0]?.url}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container className={classes.box}>
          <Grid item>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChatBubbleOutlineIcon />
                </ListItemIcon>
                <p className={classes.textBox}>
                  Comments ({props?.feed?.comments?.length})
                </p>
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <p className={classes.textBox}>Likes</p>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container>
          <Grid className={classes.avatar} item md={1}>
            <Avatar
              alt={props?.user?.firstName}
              src={props?.user?.profilePic.url}
            />
          </Grid>
          <Grid item md={11}>
            <TextField
              variant="outlined"
              fullWidth
              id="postfield"
              label="What you say on this..."
              name="postfield"
            />
          </Grid>
        </Grid>
        {props.feed.comments.length
          ? props.feed.comments.map((comment, index) => (
              <>
                {comment["comment"] ? (
                  <Grid key={index} container className={classes.comments}>
                    <Grid className={classes.avatar} item md={1}>
                      <Avatar
                        alt={props?.user?.firstName}
                        src={props?.user?.profilePic?.url}
                      />
                    </Grid>
                    <Grid item md={11}>
                      <p className={classes.commentsTextBox}>
                        {comment?.comment}
                      </p>
                    </Grid>
                  </Grid>
                ) : (
                  ""
                )}
              </>
            ))
          : ""}
      </CardContent>
    </Card>
  );
}

export default FeedCard;
