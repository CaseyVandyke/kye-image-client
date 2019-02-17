import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
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
        <ul className="nav-container">
          <li>
            <NavLink
              to="/uploads"
              activeClassName="active"
              className="nav-link"
            >
              Upload Image
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="active" className="nav-link">
              New Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price-edit"
              activeClassName="active"
              className="nav-link"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              onClick={this.onLogoutClick.bind(this)}
              activeClassName="active"
              className="nav-link"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    );

    const guestLinks = (
      <ul className="nav-container">
        <li>
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active" className="nav-link">
            Blog/Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-me" activeClassName="active" className="nav-link">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" activeClassName="active" className="nav-link">
            Pricing
          </NavLink>
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

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar)
);
