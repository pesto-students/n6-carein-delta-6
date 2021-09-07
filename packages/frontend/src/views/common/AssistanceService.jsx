import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight:"100%",
  margin: theme.spacing(0, 3, 0),
  backgroundColor:"#add8e6",
  },
  main: {
    margin: theme.spacing(0, 9, 0),
    marginBottom:20,
  },
  second: {
marginLeft:65,
  },
text: {
    marginBottom:20,
}
}));

function AssistanceService() {
  const classes = useStyles();
  var service = {};
  return (
    <Grid container spacing={5}>
    <Grid item md={12}>
    <Card className={classes.root}>
      <CardContent>
            <Grid container spacing={3}>
            <Grid item md={12}>
            <Typography className={classes.main} gutterBottom variant="h5" component="h6">
            {service.name}
          </Typography>
            </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item md={12}>
            <Typography className={classes.main} gutterBottom variant="p" component="p">
            We are providing services for your daily needs. Please fill the form and pay the amount, our team will get back to you.!!
          </Typography>
            </Grid>
            </Grid>
          <Grid container spacing={2}>
          <Grid item md={8}>
          <Card className={classes.second}>
          <CardContent>
          <Grid item md={12} className={classes.text}>
          <TextField
                  autoComplete="name"
                  name="Name"
                  variant="filled"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  //{...getFieldProps('Name')}
                  //error={Boolean(touched.Name && errors.Name)}
                  //helperText={touched.Name && errors.Name}
                />
          </Grid>
          <Grid item md={12} className={classes.text}>
          <TextField
                  autoComplete="number"
                  name="mobileNumber"
                  variant="filled"
                  required
                  fullWidth
                  id="mobileNumber"
                  label="Mobile Number"
                  //{...getFieldProps('mobileNumber')}
                  //error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                  //helperText={touched.mobileNumber && errors.mobileNumber}
                />
          </Grid>
          <Grid item md={12} className={classes.text}>
          <TextField
                  autoComplete="address"
                  name="address"
                  variant="filled"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  //{...getFieldProps('address')}
                  //error={Boolean(touched.address && errors.address)}
                  //helperText={touched.address && errors.address}
                />
          </Grid>
          <Grid container spacing={2} className={classes.text}>
          <Grid item md={6}>
          <TextField
                  autoComplete="startDate"
                  name="startDate"
                  variant="filled"
                  required
                  fullWidth
                  id="startDate"
                  type="date"
                  //{...getFieldProps('startDate')}
                  //error={Boolean(touched.startDate && errors.startDate)}
                  //helperText={touched.startDate && errors.startDate}
                />
          </Grid>
          <Grid item md={6}>
          <TextField
                  autoComplete="endDate"
                  name="endDate"
                  variant="filled"
                  required
                  fullWidth
                  id="endDate"
                  type="date"
                  //{...getFieldProps('endDate')}
                  //error={Boolean(touched.endDate && errors.endDate)}
                  //helperText={touched.endDate && errors.endDate}
                />
          </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={12}>
            <Typography className={classes.text} gutterBottom variant="p" component="p">
            Total Amount:
          </Typography>
            </Grid>
            </Grid>
      <Button size="small" className={classes.text}
        type="submit"
        fullWidth
        variant="contained"
        color="primary">
          Pay Now
        </Button>
          </CardContent>
          </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}

export default AssistanceService;
