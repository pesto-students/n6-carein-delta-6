import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//import Box from "@material-ui/core/Box";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Carein
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(0, 0, 3),
  },
  cardHeader: {
    backgroundColor: "#5c3d85",
    color: "white",
    fontWeight: 800,
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "LITE",
    price: "499",
    description: [
      "1 Year Services",
      "Access to all features",
      "Unlimited Services",
      "Unlimited Events",
      "Emergency Services",
    ],
    buttonText: "Pay Rs.499",
    buttonVariant: "outlined",
  },
  {
    title: "PRO",
    subheader: "Most popular",
    price: "999",
    description: [
      "3 Year Services",
      "Access to all features",
      "Unlimited Services",
      "Unlimited Events",
      "Emergency Services",
    ],
    buttonText: "Pay Rs.999",
    buttonVariant: "contained",
  },
  {
    title: "PREMIUM",
    price: "1499",
    description: [
      "5 Year Services",
      "Access to all features",
      "Unlimited Services",
      "Unlimited Events",
      "Emergency Services",
    ],
    buttonText: "Pay Rs.1499",
    buttonVariant: "outlined",
  },
];

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


export default function SubscriptionCard() {
  const classes = useStyles();
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load");
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
        alert(response.razorpay_payment_id);
      },
      // prefill: {
      //   firstName,
      // },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }


  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "PREMIUM" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "PRO" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h4" color="textPrimary">
                      Rs.{tier.price}/-
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                    onClick={displayRazorpay}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
