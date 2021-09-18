import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { useFormik, FormikProvider, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { signupUser } from "../../../actions/authActions";
import { addUsers } from "../../../actions/usersActions";
import { FormControl, InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { useState } from "react";

import { Modal } from "react-bootstrap";
import { Input } from "@mui/material";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Carein
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://media.istockphoto.com/photos/two-senior-men-discussing-on-park-bench-picture-id1289142883?b=1&k=20&m=1289142883&s=170667a&w=0&h=fQnvJBfG3QiNLLmRFx2jrGG8mEfjMEjktTWARPnkCzE=)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    margin: theme.spacing(-26, 0, -17),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Sign = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Too short")
      .max(15, "Too Long")
      .required("Password is required"),
    mobnumber: Yup.number()
      .min(1000000000, "Mobile number should be 10 digits")
      .max(10000000000, "Mobile number should be 10 digits")
      .required("Mobile number is required"),
    addressLine1: Yup.string().required("Address is required"),
    dob: Yup.string().required("Date of Birth is required"),
    city: Yup.string().required("City is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      username: "",
      addressLine1: "",
      city: "Delhi",
      dob: "1962-01-01",
      mobnumber: null,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log("submit");
      values.username = values.mobnumber;
      values.phone = values.mobnumber;
      delete values.mobnumber;
      console.log(values);
      if (values.dob) {
        let today = new Date().setHours(0);
        let dob = new Date(values.dob).setHours(0);
        let diff = today - dob;

        let years = diff / (1000 * 60 * 60 * 24 * 365);
        console.log(years);
        if (years > 55) {
          dispatch(addUsers(values));
          setOpen(true);
        } else {
          setErrors({ dob: "Minimum age should be more than 55 years" });
        }
      }
    },
  });

  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var date = curr.toISOString().substr(0, 10);

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    setErrors,
  } = formik;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
            <div>
              <img
                className={classes.logo}
                src="./assets/media/bg/carelogo2.png"
                alt="logo"
              />
            </div>
          </Typography>
          <FormikProvider value={formik}>
            <Form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    {...getFieldProps("firstName")}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    {...getFieldProps("lastName")}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
                <Grid item lg={24} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="mobnumber"
                    label="Mobile Number"
                    name="mobnumber"
                    autoComplete="mobnumber"
                    {...getFieldProps("mobnumber")}
                    error={Boolean(touched.mobnumber && errors.mobnumber)}
                    helperText={touched.mobnumber && errors.mobnumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    {...getFieldProps("addressLine1")}
                    error={Boolean(touched.addressLine1 && errors.addressLine1)}
                    helperText={touched.addressLine1 && errors.addressLine1}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    variant="outlined"
                    style={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="City"
                    {...getFieldProps("city")}
                  >
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                    <MenuItem value="Banglore">Banglore</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="date"
                    id="dob"
                    label="Date of birth"
                    name="dob"
                    autoComplete="dob"
                    defaultValue={date}
                    {...getFieldProps("dob")}
                    error={Boolean(touched.dob && errors.dob)}
                    helperText={touched.dob && errors.dob}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      style={{ display: "none" }}
                    />
                    <Button variant="contained" component="span">
                      Upload Identity Proof
                    </Button>
                  </label>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                loading={isSubmitting}
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{ color: "text.secondary", mt: 3 }}
              >
                Already have an account?&nbsp;
                <Link to="/" underline="always" sx={{ color: "text.primary" }}>
                  Sign In
                </Link>
                .
              </Typography>
            </Form>
          </FormikProvider>

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 3 }}
          >
            By registering, I agree to Carein&nbsp;
            <Link href="#" underline="always" sx={{ color: "text.primary" }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link href="#" underline="always" sx={{ color: "text.primary" }}>
              Privacy Policy
            </Link>
            .
          </Typography>
        </div>
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
              <p>
                {" "}
                Our Team will verify your account details and confirm it. After
                confirmation you will recieve mail from team regarding your
                account details.{" "}
              </p>
            </div>
            <div className="alert-footer-box">
              <Button variant="danger" onClick={() => setOpen(false)}>
                Dismiss
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Sign;
