import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
//import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
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
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function AssistanceService(props) {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  //const dispatch = useDispatch();
  const classes = useStyles();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [addressLine1, setAddressLine1] = useState(user.addressLine1);
  const [addressLine2, setAddressLine2] = useState(user.addressLine2);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [pincode, setPincode] = useState(user.pincode);
  const [from, setFrom] = useState(new Date());
  //const [to, setTo] = useState("");
  const [open, setOpen] = useState(false);
  const [d, setD] = useState("");
  const history = useHistory();
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      setD("Razorpay SDK failed to load");
      setOpen(true);
      return;
    }

    const options = {
      key: __DEV__ ? "rzp_test_7tOAQOJbQxdBNt" : "rzp_test_7tOAQOJbQxdBNt", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Rs.500
      currency: "INR",
      name: "Carein",
      description: "Test Transaction",
      //"image": "https://example.com/your_logo",
      //"order_id": 'order_Hx323PZJBFKPQS', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        setD(
          "Razorpay Payment Success : Payment Id - " +
            response.razorpay_payment_id
        );
        setOpen(true);
      },
      prefill: {
        firstName,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const confirmPayment = () => {
    setOpen(false);
    history.push("/homepage");
  };
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
            <Typography
              gutterBottom
              variant="p"
              style={{ marginBottom: 20 }}
              component="p"
            >
              Quick Registration
            </Typography>
            <form className={classes.form}>
              <Grid container spacing={2} className={classes.text}>
                <Grid item md={6}>
                  <TextField
                    autoComplete="firstName"
                    name="firstName"
                    variant="outlined"
                    className="inputText"
                    required
                    fullWidth
                    value={firstName}
                    id="firstName"
                    label="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    autoComplete="lastName"
                    name="lastName"
                    variant="outlined"
                    required
                    value={lastName}
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
                  variant="outlined"
                  required
                  fullWidth
                  value={addressLine1}
                  className="inputText"
                  id="addressLine1"
                  label="Address"
                  onChange={(e) => setAddressLine1(e.target.value)}
                />
              </Grid>

              <Grid container spacing={2} className={classes.text}>
                <Grid item md={4}>
                  <TextField
                    autoComplete="city"
                    name="city"
                    variant="outlined"
                    required
                    value={city}
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
                    variant="outlined"
                    required
                    fullWidth
                    value={state}
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
                    variant="outlined"
                    required
                    value={pincode}
                    fullWidth
                    className="inputText"
                    id="pincode"
                    label="Pincode"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item md={12} className={classes.text}>
                <TextField
                  name="addressLine1"
                  variant="outlined"
                  className="inputText"
                  fullWidth
                  id="addressLine2"
                  label="Describe your requirement"
                  onChange={(e) => setAddressLine2(e.target.value)}
                />
              </Grid>
              <Grid container spacing={2} className={classes.text}>
                <Grid item md={12}>
                  <TextField
                    autoComplete="from"
                    name="from"
                    variant="outlined"
                    className="inputText"
                    required
                    value={from}
                    fullWidth
                    id="from"
                    type="date"
                    onChange={(e) => setFrom(e.target.value)}
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
                    Starting From Rs{props.service.price_per_day}/-
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography
                    className="dumyCard"
                    gutterBottom
                    variant="body1"
                    component="p"
                  >
                    For Test Purpose use following
                    <ul>
                      <li>Card No : 4111-1111-1111-1111</li>
                      <li>CVV No : Any 3 Digit No</li>
                      <li>Date To : Any Future Date</li>
                      <li>Mobile : Your Mobile No</li>
                    </ul>
                    Verify your OTP
                  </Typography>
                </Grid>
              </Grid>
              <Button
                size="small"
                className={classes.text}
                fullWidth
                variant="contained"
                color="primary"
                disabled={
                  !firstName ||
                  !lastName ||
                  !addressLine1 ||
                  !city ||
                  !state ||
                  !pincode ||
                  !from
                }
                onClick={displayRazorpay}
              >
                Pay Now
              </Button>
            </form>
          </CardContent>
        </Card>
        <Modal
          show={open}
          onHide={() => setOpen(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Body>
            <div className="alert-body">
              <h2> Thank You for Registering </h2>
              <p>{d}</p>
            </div>
            <div className="alert-footer-box">
              <Button variant="danger" onClick={() => confirmPayment()}>
                Dismiss
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Grid>
    </Grid>
  );
}

export default AssistanceService;
