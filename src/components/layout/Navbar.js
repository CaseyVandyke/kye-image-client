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
      <nav>
        <ul>
          <li>
            <Link to="/uploads">Upload Image</Link>
          </li>
          <li>
            <Link to="/signup">New Admin</Link>
          </li>
          <li>
            <Link to="/price-edit">Pricing</Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={this.onLogoutClick.bind(this)}
              className="nav-link"
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );

    const guestLinks = (
      <ul className="nav-container">
        <li>
          <Link to="/blog">Blog/Gallery</Link>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar-container">
        <div className="container">
          <div className="navbar-logo">
            <img
              className="logo"
              src={require("./../../img/Kye-Image_Stamp1-03 (5).png")}
              alt="kye-logo"
            />
          </div>
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
