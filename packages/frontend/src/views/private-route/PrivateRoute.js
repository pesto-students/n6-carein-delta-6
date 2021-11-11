import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, layout: Layout, auth, ...rest }) => (
  // <Route
  //   {...rest}
  //   render={(props) =>
  //     !!auth.isAuthenticated ? (
  //       <Component {...props} /> 
  //     ) : (
  //       <Redirect to="/" />
  //     )
  //   }
  // />

  <Route {...rest} render={(props) =>
    !!auth.isAuthenticated ? (
    <Layout {...props}>
      <Component {...props} />
    </Layout>
     ) : (
      <Redirect to="/" />
    )
  } />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
