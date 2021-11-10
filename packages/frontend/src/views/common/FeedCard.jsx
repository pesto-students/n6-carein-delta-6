import React, { useState} from "react";
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
import { List } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { addComment } from "../../actions/feedActions";
import { addLikes } from "../../actions/feedActions";
import { TextField } from "@material-ui/core";
import { fToNow } from "../../utils/formatTime";
//import { LIKES_ADD_ERROR } from "../../actions/types";

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
    color: "#5c3d85",
    fontSize: "12px",
  },
  comments: {
    "align-items": "center",
    margin: "10px 0px",
  },
  commentsTextBox: {
    padding: "7px 8px",
    color: "#5c3d85",
    fontWeight: 600,
    marginBottom: 0,
  },
  comentBox: {
    display: "flex",
    background: "#f0e4fe",
    borderRadius: "6px 6px 6px 6px",
  },
  commentInnerAvatar: {
    justifyContent: "flex-start",
    position: "relative",
    left: "6px",
    top: "1px",
  },
  liked: {
    color: "rgb(255 0 0 / 54%)",
  },
  Notliked: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  loadMore: {
    marginBottom: "0px",
    color: "#5c3d85",
    cursor: "pointer",
    fontSize: "12px",
    marginTop: "5px",
  },
}));

function FeedCard(props) {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(3);
  const dispatch = useDispatch();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

 // let commentsLength = props.feed.comments.length;

  const userSubmit = (e) => {
    setComment("");
    const userData = {
      comment: comment,
      user: user.id,
      feed: props.feed.id,
    };
    dispatch(addComment(userData));
  };

  const likedTest = () => {
    let liked = {
      isLiked: false,
      class: classes.Notliked,
    };
    let index = props.feed.likes.findIndex((e) => {
      return e.user === user.id;
    });

    if (index >= 0) {
      liked = {
        isLiked: true,
        class: classes.liked,
      };
      // setLikedClass(classes.liked)
    }

    return liked.isLiked;
  };

  const submitLike = (id) => {
    dispatch(addLikes(id));
  };
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      userSubmit();
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3} className={classes.main}>
          <Grid item md={1} className={classes.profile}>
            <Avatar
              alt={props.feed?.postedBy?.firstName}
              src={props.feed?.postedBy?.profilePic?.url}
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
              variant="body1"
              component="p"
            >
              {props.feed.createdAt ? fToNow(props.feed.createdAt) : ""}
            </Typography>
          </Grid>
          <Grid item md={1} className={classes.icon}></Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <Typography
              className={classes.main}
              gutterBottom
              variant="body1"
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
              <ListItem
                onClick={() =>
                  likedTest()
                    ? ""
                    : submitLike(props?.feed?.id)
                }
              >
                <ListItemIcon
                  className={likedTest() ? classes.liked : classes.Notliked}
                >
                  <FavoriteIcon />
                </ListItemIcon>
                <p className={classes.textBox}>
                  Likes ({props?.feed?.likes?.length})
                </p>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container>
          <Grid className={classes.avatar} item md={1}>
            <Avatar
              alt={props?.user?.firstName}
              src={props?.user?.profilePic?.url}
            />
          </Grid>
          <Grid item md={11}>
            <TextField
              variant="outlined"
              fullWidth
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              id="postfield"
              placeholder="What you say on this..."
              onKeyPress={_handleKeyDown}
            />
            {props.feed.comments.length > 3 ? (
              <p
                className={classes.loadMore}
                onClick={() => setShowComment(showComment + 3)}
              >
                Load Previous Comments
              </p>
            ) : (
              ""
            )}
          </Grid>
          {/* <button onClick={userSubmit}>send</button> */}
        </Grid>

        {props.feed.comments.length
          ? props.feed.comments
              .slice(Math.max(props.feed.comments.length - showComment, 0))
              .map((comment, index) => (
                <span key={index}>
                  {comment["comment"] ? (
                    <Grid key={index} container className={classes.comments}>
                      <Grid className={classes.avatar} item md={1}></Grid>
                      <Grid item className={classes.comentBox} md={11}>
                        <Grid
                          className={classes.commentInnerAvatar}
                          item
                          md={1}
                        >
                          <Avatar
                            style={{ borderRadius: "6px" ,margin: '6px'}}
                            alt={props?.user?.firstName}
                            src={comment?.user?.profilePic?.url}
                          />
                        </Grid>
                        <Grid item md={12}>
                          <p className={classes.commentsTextBox}>
                            {comment?.comment}
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>
                  ) : (
                    ""
                  )}
                </span>
              ))
          : ""}
      </CardContent>
    </Card>
  );
}

export default FeedCard;
