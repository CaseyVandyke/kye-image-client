import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "./../../actions/authActions";
import "./../../styles/Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/signup");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="signup-container">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <h5 className="auth-title">Create Admin</h5>
            <div className="input-field">
              <label htmlFor="email" />
              <input
                type="email"
                className={`input-control ${errors.email && "is-invalid"}`}
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="password" />
              <input
                type="password"
                className={classnames("input-control", {
                  "is-invalid": errors.password
                })}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="firstName" />
              <input
                type="text"
                className={classnames("input-control", {
                  "is-invalid": errors.firstName
                })}
                placeholder="First Name"
                name="firstName"
                value={this.state.email.firstName}
                onChange={this.handleChange}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="lastName" />
              <input
                type="text"
                className={classnames("input-control", {
                  "is-invalid": errors.lastName
                })}
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
            <div className="input-field">
              <button className="login">
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
        <div className="clear-content" />
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
