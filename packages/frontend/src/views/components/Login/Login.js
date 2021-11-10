import React from "react";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider} from "formik";
import { loginUser } from "../../../actions/authActions";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1504004030892-d06adf9ffbcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80)",
    backgroundRepeat: "no-repeat",
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
  //const LoginData = useSelector((state) => state.auth);
  

  const LoginSchema = Yup.object().shape({
    identifier: Yup.string().required("Email or Mobile Number is required"),
    password: Yup.string()
      .min(4, "Too short")
      .max(15, "Too Long")
      .required("Password is required"),
  });

  var formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
      remember: true,
    },

    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  const {
    errors,
    touched,
    //values,
    //isSubmitting,
    getFieldProps,
    handleSubmit,
    setFieldValue
    //setErrors
  } = formik;

  const dummyAccount = () => {
    setFieldValue("identifier", "carein@gmail.com");
    setFieldValue("password", "vinitborole");
  };
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
              <Button
                style={{ background: "#8fe3d98f" }}
                onClick={() => dummyAccount()}
                variant="outlined"
              >
                Sign In With Test Account
              </Button>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address or Mobile Number"
                name="identifier"
                autoComplete="email"
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

              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                loading
                className={classes.submit}
              >
                SIGN IN
              </LoadingButton>

              <Grid container></Grid>
              <Grid container>
                <Grid item xs></Grid>
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
