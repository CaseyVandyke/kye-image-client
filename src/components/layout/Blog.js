import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./../../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./../../actions/authActions";

import store from "../../store";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Landing from "./Landing";
import Login from "../auth/Login";
import SignUp from "../auth/Register";
import Pricing from "./Pricing";
import Contact from "../layout/Contact";
import UserForm from "../layout/UserForm";

// Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info for exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    //Redirect to login
    window.location.href = "/login";
  }
}
class Blog extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="Blog">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/about-me" component={AboutMe} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/uploads" component={UserForm} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Blog;
