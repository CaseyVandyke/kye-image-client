/*import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { contactUser } from "./../../actions/authActions";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      errors: {}
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message
    };
    this.props.contactUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="signup-container">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <h5 className="auth-title">Contact</h5>
          <div className="input-field">
            <label htmlFor="name" />
            <input
              type="name"
              className={classnames("input-control", {
                "is-invalid": errors.name
              })}
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="input-field">
            <label htmlFor="email" />
            <input
              type="email"
              className={classnames("input-control", {
                "is-invalid": errors.email
              })}
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
            <label htmlFor="phone" />
            <input
              type="phone"
              className={classnames("input-control", {
                "is-invalid": errors.phone
              })}
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>
          <div className="input-field">
            <label htmlFor="subject" />
            <input
              type="subject"
              className={classnames("input-control", {
                "is-invalid": errors.subject
              })}
              placeholder="Subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>
          <div className="input-field">
            <label htmlFor="message" />
            <input
              type="message"
              className={classnames("input-control", {
                "is-invalid": errors.message
              })}
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>
          <div className="input-field">
            <button className="login">
              <span>Send</span>
            </button>
          </div>
        </form>
        <div className="clear-content" />
      </div>
    );
  }
}

Contact.propTypes = {
  contactUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { contactUser }
)(withRouter(Contact));
*/
