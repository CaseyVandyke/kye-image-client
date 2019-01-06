import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../../actions/authActions";
import "../../styles/Navbar.css";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul>
        <li>
          <Link to="/">Blog/Gallery</Link>
        </li>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link
            to="/Landing"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </Link>
        </li>
        <li>
          <Link to="/" className="login-initials">
            KW
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav-container">
        <li>
          <Link to="/">Blog/Gallery</Link>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar-container">
        <div className="container">
          <Link className="navbar-logo" to="/">
            <img
              src={require("./../../img/Kye-Image_Stamp1-03 (2).png")}
              alt="kye-logo"
            />
          </Link>
          <div className="navlinks">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
