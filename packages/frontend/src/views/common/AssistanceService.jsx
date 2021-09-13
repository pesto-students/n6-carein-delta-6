import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useDispatch } from "react-redux";

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

function AssistanceService(props) {
  const classes = useStyles();

  const serviceSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    addressLine1: Yup.string().required("Address Line1 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("Pincode is required"),
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string().required("End Date is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      from: "",
      to: "",
    },
    validationSchema: serviceSchema,
    onSubmit: (values) => {
      let body = {
        firstName: values.firstName,
        lastName: values.lastName,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        state: values.state,
        pincode: values.pincode,
        from: values.from,
        to: values.to,
      };
      console.log(body);
    },
  });

  const { errors, touched, values, isSubmitting, getFieldProps, handleSubmit } =
    formik;

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
            <FormikProvider value={formik}>
              <Form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                      {...getFieldProps("firstName")}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
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
                      {...getFieldProps("lastName")}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
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
                    {...getFieldProps("addressLine1")}
                    error={Boolean(touched.addressLine1 && errors.addressLine1)}
                    helperText={touched.addressLine1 && errors.addressLine1}
                  />
                </Grid>
                <Grid item md={12} className={classes.text}>
                  <TextField
                    autoComplete="addressLine2"
                    name="addressLine2"
                    variant="filled"
                    required
                    className="inputText"
                    fullWidth
                    id="addressLine2"
                    label="Address Line2"
                    {...getFieldProps("addressLine2")}
                    error={Boolean(touched.addressLine2 && errors.addressLine2)}
                    helperText={touched.addressLine2 && errors.addressLine2}
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
                      {...getFieldProps("city")}
                      error={Boolean(touched.city && errors.city)}
                      helperText={touched.city && errors.city}
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
                      {...getFieldProps("state")}
                      error={Boolean(touched.state && errors.state)}
                      helperText={touched.state && errors.state}
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
                      {...getFieldProps("pincode")}
                      error={Boolean(touched.pincode && errors.pincode)}
                      helperText={touched.pincode && errors.pincode}
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
                      {...getFieldProps("from")}
                      error={Boolean(touched.from && errors.from)}
                      helperText={touched.from && errors.from}
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
                      {...getFieldProps("to")}
                      error={Boolean(touched.to && errors.to)}
                      helperText={touched.to && errors.to}
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
                      Total Amount:
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  size="small"
                  className={classes.text}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Pay Now
                </Button>
              </Form>
            </FormikProvider>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AssistanceService;
