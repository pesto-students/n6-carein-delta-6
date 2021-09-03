import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Divider,
  FilledInput,
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
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: 150,
    width : '100%',
    margin: "10px 0px",
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
  const handleClose = () => {
    setOpen(false);
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
            <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
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
            name="postfield"
            onClick={() => setOpen(true)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <PhotoIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default PostCard;
