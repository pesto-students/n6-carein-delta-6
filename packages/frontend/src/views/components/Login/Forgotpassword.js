import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import { useFormik, FormikProvider } from 'formik';


 function Copyright() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright © '}
       <Link color="inherit" href="#">
         Carein
       </Link>{' '}
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   );
 }


 const useStyles = makeStyles((theme) => ({
   paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.secondary.main,
   },
   form: {
     width: '100%', 
     marginTop: theme.spacing(3),
   },
   logo: {
    margin: theme.spacing(-21, 0, -15),
	
  },
   submit: {
     margin: theme.spacing(3, 0, 2),
   },
 }));

 export default function SignUp() {
   const classes = useStyles();

   const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;

   const RegisterSchema = Yup.object().shape({
     email: Yup.string().email('Email must be a valid email address').required('Email is required'),
     password: Yup.string().min(4, 'Too short').max(15, 'Too Long').required('Password is required'),
     confirmpassword: Yup.string().min(4, 'Too short').max(15, 'Too Long').required('Password is required'),
   });

   const formik = useFormik({
     initialValues: {
       email: '',
       password: '',
       confirmpassword: '',
     },
     validationSchema: RegisterSchema
   });

   const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

   return (

     <div
 				className="auth-wrapper"
 				style={{
 				backgroundImage: `url(${toAbsoluteUrl('./assets/media/bg/bg-7.jpg')})`,         
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
 				}}
 			>

     <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div className={classes.paper}>
       <Typography component="h1" variant="h2">
       <div>
       <img className={classes.logo} src="./assets/media/bg/carelogo2.png" alt="logo" />
       </div>
       </Typography>

         <Typography component="h1" variant="h5">
           Reset your password
         </Typography>
         <FormikProvider value={formik}>
         <form className={classes.form} noValidate onSubmit={handleSubmit}>
           <Grid container spacing={2}>
             
            
             <Grid item lg={24} sm={12}>
               <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="email"
                 label="Email Address"
                 name="email"
                 autoComplete="email"
                 {...getFieldProps('email')}
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
                 label="New Password"
                 type="password"
                 id="password"
                 autoComplete="current-password"
                 {...getFieldProps('password')}
                 error={Boolean(touched.password && errors.password)}
                 helperText={touched.password && errors.password}
               />
             </Grid>

             <Grid item xs={12}>
             <TextField
               variant="outlined"
               required
               fullWidth
               name="confirmpassword"
               label="Confirm New Password"
               type="confirmpassword"
               id="confirmpassword"
               {...getFieldProps('confirmpassword')}
               error={Boolean(touched.confirmpassword && errors.confirmpassword)}
               helperText={touched.confirmpassword && errors.confirmpassword}
             />
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
            Reset my password
          </Button>
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
             Go back to&nbsp;
            <Link href="/" underline="always" sx={{ color: 'text.primary' }}>
              Sign In
            </Link>
             .
          </Typography>
          
        </form>
        </FormikProvider>
        </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
 }
