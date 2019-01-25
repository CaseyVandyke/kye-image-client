import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./../../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./../../actions/authActions";

import Footer from "../layout/Footer";
import store from "../../store";
import Blog from "../layout/Blog";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Landing from "./Landing";
import Admin from "../auth/Admin";
import SignUp from "../auth/Register";
import Pricing from "./Pricing";
import PriceEdit from "../../Admin/PriceEdit";
//import Contact from "../layout/Contact";
import ImageUpload from "../../Admin/ImageUpload";

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
    window.location.href = "/admin";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/about-me" component={AboutMe} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/uploads" component={ImageUpload} />
              <Route exact path="/price-edit" component={PriceEdit} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
