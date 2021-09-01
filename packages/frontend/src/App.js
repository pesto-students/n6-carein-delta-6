import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import UserList from './components/UserList/User';
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import PrivateRoute from "./views/private-route/PrivateRoute";
import "./App.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

//Pages
const Login = React.lazy(() => import("./views/components/Login/Login"));
const Forgotpassword = React.lazy(() => import("./views/components/Login/Forgotpassword"));
const Emailverify = React.lazy(() => import("./views/components/Login/Emailverify"));
const Signup = React.lazy(() => import("./views/components/Signup/Signup"));
const Homepage = React.lazy(() => import("./views/components/Homepage/Homepage"));
const Friends = React.lazy(() => import("./views/components/Homepage/Friends"));
const Events = React.lazy(() => import("./views/components/Homepage/Events"));
const Services = React.lazy(() => import("./views/components/Homepage/Services"));
const Subscription = React.lazy(() => import("./views/components/Homepage/Subscription"));
const ServiceDetails = React.lazy(() => import("./views/components/Homepage/ServiceDetails"));

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  // const currentTime = Date.now() / 1000;
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Login"
              render={(props) => <Login {...props} />}
            />
            <Route
            exact
            path="/signup"
            name="Signup"
            component={Signup}
            render={(props) => <Signup {...props} />}
            />

            <Route
            exact
            path="/forgotpassword"
            name="Forgotpassword"
            component={Forgotpassword}
            render={(props) => <Forgotpassword {...props} />}
            />

            <PrivateRoute
            exact
            path="/homepage"
            name="Homepage"
            component={Homepage}
            render={(props) => <Homepage {...props} />}
            />

            <Route
            exact
            path="/emailverify"
            name="Emailverify"
            component={Emailverify}
            render={(props) => <Emailverify {...props} />}
            />

            <PrivateRoute
            exact
            path="/Friends"
            name="Friends"
            component={Friends}
            render={(props) => <Friends {...props} />}
            />

            <PrivateRoute
            exact
            path="/Events"
            name="Events"
            component={Events}
            render={(props) => <Events {...props} />}
            />


            <PrivateRoute
            exact
            path="/Services"
            name="Services"
            component={Services}
            render={(props) => <Services {...props} />}
            />

            <PrivateRoute
            exact
            path="/Subscription"
            name="Subscription"
            component={Subscription}
            render={(props) => <Subscription {...props} />}
            />

            <PrivateRoute
            exact
            path="/Servicedetails"
            name="Servicedetails"
            component={ServiceDetails}
            render={(props) => <ServiceDetails {...props} />}
            />

            
            <Route component={NoMatchPage} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
