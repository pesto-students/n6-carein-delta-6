import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "auto",
  },
  main: {
    margin: theme.spacing(0, 4, 2),
    fontWeight: 600,
  },
  content: {
    margin: theme.spacing(0, 4, 2),
    color: "#656464",
  },
  second: {
    marginTop: 20,
  },
  text: {
    marginBottom: 20,
  },
}));

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })

}

const __DEV__ = document.domain === 'localhost'

function AssistanceService(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [addressLine1, setAddressLine1] = useState("")
  const [addressLine2, setAddressLine2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  console.log(firstName)

    async function displayRazorpay() {

      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      if(!res){
        alert('Razorpay SDK failed to load')
        return
      }

      const options = {
        "key": __DEV__ ? "rzp_test_7tOAQOJbQxdBNt" : "rzp_test_7tOAQOJbQxdBNt", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Rs.500
        "currency": "INR",
        "name": "Carein",
        "description": "Test Transaction",
        //"image": "https://example.com/your_logo",
        //"order_id": 'order_Hx323PZJBFKPQS', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);

        },
        "prefill": {
            firstName
        },
        
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    }
 
  return (
    <Grid container spacing={5}>
      <Grid item md={12}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Typography
                  className={classes.main}
                  gutterBottom
                  variant="h5"
                  component="h6"
                >
                  {props.service.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Typography
                  className={classes.content}
                  gutterBottom
                  variant="body1"
                  component="p"
                >
                  {props.service.description}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.second}>
          <CardContent>
            <Typography gutterBottom variant="p" component="p">
              Quick Registration
            </Typography>
              <form className={classes.form}>
                <Grid container spacing={2} className={classes.text}>
                  <Grid item md={6}>
                    <TextField
                      autoComplete="firstName"
                      name="firstName"
                      variant="filled"
                      className="inputText"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      autoComplete="lastName"
                      name="lastName"
                      variant="filled"
                      required
                      className="inputText"
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid item md={12} className={classes.text}>
                  <TextField
                    autoComplete="addressLine1"
                    name="addressLine1"
                    variant="filled"
                    required
                    fullWidth
                    className="inputText"
                    id="addressLine1"
                    label="Address Line1"
                    onChange={(e) => setAddressLine1(e.target.value)}
                  />
                </Grid>
                <Grid item md={12} className={classes.text}>
                  <TextField
                    autoComplete="addressLine2"
                    name="addressLine2"
                    variant="filled"
                    className="inputText"
                    fullWidth
                    id="addressLine2"
                    label="Address Line2"
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                </Grid>
                <Grid container spacing={2} className={classes.text}>
                  <Grid item md={4}>
                    <TextField
                      autoComplete="city"
                      name="city"
                      variant="filled"
                      required
                      className="inputText"
                      fullWidth
                      id="city"
                      label="City"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      autoComplete="state"
                      name="state"
                      variant="filled"
                      required
                      fullWidth
                      className="inputText"
                      id="state"
                      label="State"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      autoComplete="pincode"
                      name="pincode"
                      variant="filled"
                      required
                      fullWidth
                      className="inputText"
                      id="pincode"
                      label="Pincode"
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.text}>
                  <Grid item md={6}>
                    <TextField
                      autoComplete="from"
                      name="from"
                      variant="filled"
                      className="inputText"
                      required
                      fullWidth
                      id="from"
                      type="date"
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      autoComplete="to"
                      name="to"
                      variant="filled"
                      required
                      className="inputText"
                      fullWidth
                      id="to"
                      type="date"
                      onChange={(e) => setTo(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item md={12}>
                    <Typography
                      className={classes.text}
                      gutterBottom
                      variant="body1"
                      component="p"
                    >
                      Total Amount: Rs{props.service.price_per_day}/-
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  size="small"
                  className={classes.text}
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={!firstName || !lastName || !addressLine1 || !city || !state || !pincode || !from || !to}
                  onClick={displayRazorpay}
                >
                  Pay Now
                </Button>
              </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AssistanceService;
