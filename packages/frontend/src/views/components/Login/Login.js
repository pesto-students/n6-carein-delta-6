import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { loginUser  } from '../../../actions/authActions';
import { useDispatch } from 'react-redux';


const Copyright = () => {
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
    backgroundImage: 'url(https://images.unsplash.com/photo-1504004030892-d06adf9ffbcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  logo: {
    margin: theme.spacing(-21, 0, -17),
	
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
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  
  // const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const userData = {
	// 		identifier: email,
	// 		password: password
	// 	};
	// 	// this.props.loginUser(userData);
  //   if (email && password) {
  //     // get return url from location state or default to home page
  //     // const { from } = location.state || { from: { pathname: "/" } };
  //     dispatch(loginUser(userData));
  // }
		
	// };    

  const LoginSchema = Yup.object().shape({
    identifier: Yup.string()
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Too short")
      .max(15, "Too Long")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
      remember: true,
    },
    
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    }
  });

  const { errors, touched, values, isSubmitting, getFieldProps,handleSubmit } =
    formik;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
          <div>
          <img className={classes.logo} src="./assets/media/bg/carelogo2.png" alt="logo" />
          </div>
          </Typography>
          <FormikProvider value={formik}>
          <Form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="identifier"
            autoComplete="email"
            type="email"
            {...getFieldProps("identifier")}
            error={Boolean(touched.identifier && errors.identifier)}
            helperText={touched.identifier && errors.identifier}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
                color="primary"
              />
            }
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            loading={isSubmitting}
            className={classes.submit}
          >
            SIGN IN
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="/Forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/Signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            </Grid>
            </Form>
          </FormikProvider>
        </div>
    </Grid>
    </Grid>
  );
};

export default Login;
