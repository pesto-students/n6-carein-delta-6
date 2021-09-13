import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addFeeds } from "../../actions/feedActions";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: 150,
    width: "100%",
  },
  main: {
    margin: theme.spacing(0, 0, 0),
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
}));

function PostCard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("");
  const dispatch = useDispatch();
  const selectFileref = useRef();
  const handleClose = () => {
    setOpen(false);
  };
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  console.log(user);
  const handleSubmit = () => {
    const userData = {
      description: description,
      postedBy: user.id,
    };

    const formData = new FormData();

    formData.append(`files.media`, file, filename);
    formData.append("data", JSON.stringify(userData));
    dispatch(addFeeds(formData));
    setOpen(false);
  };

  const selectFile = (e) => {
    selectFileref.current.click();
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.main} variant="h6" component="h6">
          Post Something
        </Typography>
        <Divider />

        <Grid container spacing={3} className={classes.main}>
          <Grid item md={1} className={classes.profile}>
            <Avatar alt="Remy Sharp" src={user.profilePic.url} />
          </Grid>
          <Grid item md={11} className={classes.text}>
            <TextField
              variant="outlined"
              disabled
              fullWidth
              multiline
              id="postfield"
              label="What's on your mind?"
              name="postfield"
              onClick={() => setOpen(true)}
            />
          </Grid>
          {/* <Grid item md={1} className={classes.icon}>
            <PhotoIcon />
          </Grid> */}
        </Grid>
      </CardContent>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Share Your Feelings</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Its good to share your day to day thoughts and gain users reactions
            over it.
          </DialogContentText>
          <OutlinedInput
            variant="outlined"
            required
            fullWidth
            multiline
            labelWidth={700}
            placeholder="What's on your mind?"
            id="postfield"
            label="What's on your mind?"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            onClick={() => setOpen(true)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => selectFile(e)}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <PhotoIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </DialogContent>
        <input
          type="file"
          name={file}
          ref={selectFileref}
          onChange={(e) => setFile(e.target.files[0])}
          id="fileUpload"
          style={{ display: "none" }}
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default PostCard;
