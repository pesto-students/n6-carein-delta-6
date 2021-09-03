import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight:"100%",
    marginLeft: 310,
  margin: theme.spacing(0, 3, 0),
  //backgroundColor:"#add8e6",
  },
  main: {
    margin: theme.spacing(0, 9, 0),
  },
  second: {
marginLeft:65,
  },
text: {
    marginBottom:20,
},
content: {
    margin: theme.spacing(0, 40, 0),
},
large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(2, 0, 4),
    display: "flex",
  },
}));

function ProfilePage() {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
    <Grid item md={12}>
    <Card className={classes.root}>
      <CardContent className={classes.main}>
            <Grid container spacing={3}>
            <Grid item md={12}>
            <Typography gutterBottom variant="h5" component="h6">
            Edit Profile
          </Typography>
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item md={12}>
            <Avatar alt="M" src="./assets/media/bg/pp8.jpg" className={classes.large}/>
            </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.text}>
          <Grid item md={6}>
          <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  label="First Name"
                  required
                  fullWidth
                  id="firstname"
                />
          </Grid>
          <Grid item md={6}>
          <TextField
                  autoComplete="lname"
                  name="lastname"
                  variant="outlined"
                  label="Last Name"
                  required
                  fullWidth
                  id="lastname"
                />
          </Grid>
          </Grid>

          <Grid container spacing={2}>
          <Grid item md={12} className={classes.text}>
          <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                />
          </Grid>
          <Grid item md={12} className={classes.text}>
          <TextField
                  autoComplete="number"
                  name="mobileNumber"
                  variant="outlined"
                  required
                  fullWidth
                  id="mobileNumber"
                  label="Mobile Number"
                />
          </Grid>
          <Grid item md={12} className={classes.text}>
          <TextField
                  autoComplete="address"
                  name="address"
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                />
          </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.text}>
          <Grid item md={6}>
          <TextField
                  autoComplete="pincode"
                  name="pincode"
                  variant="outlined"
                  label="Pin Code"
                  required
                  fullWidth
                  id="pincode"
                />
          </Grid>
          <Grid item md={6}>
          <TextField
                  autoComplete="state"
                  name="state"
                  variant="outlined"
                  label="State"
                  required
                  fullWidth
                  id="state"
                />
          </Grid>
          </Grid>

      <Button size="small" className={classes.text}
        type="submit"
        fullWidth
        variant="contained"
        color="primary">
          SAVE
        </Button>
    
      </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}

export default ProfilePage;
