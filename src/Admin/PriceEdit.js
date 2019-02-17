import React, { Component } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SuccesAlert from "./SuccessAlert";

class PriceEdit extends Component {
  constructor() {
    super();
    this.state = {
      families: "",
      extended: "",
      packageA: "",
      packageB: "",
      packageC: "",
      newborn: "",
      senior: "",
      maternity: "",
      alert_message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ alert_message: "successful" });

    const newPrices = {
      families: this.state.families,
      extended: this.state.extended,
      packageA: this.state.packageA,
      packageB: this.state.packageB,
      packageC: this.state.packageC,
      newborn: this.state.newborn,
      senior: this.state.senior,
      maternity: this.state.maternity
    };

    axios.post(`${API_BASE_URL}/pricing`, newPrices).then(res => {
      this.setState({
        alert_message: "success"
      });
      console.log(res);
    });
  };
  render() {
    const {
      families,
      extended,
      packageA,
      packageB,
      packageC,
      newborn,
      senior,
      maternity,
      alert_message
    } = this.state;
    return (
      <form className="signup-container" onSubmit={this.handleSubmit}>
        <h5 className="auth-title">Price Edit</h5>
        <div className="input-field">
          <label htmlFor="families" />
          <input
            type="text"
            className="input-control"
            name="families"
            value={families}
            placeholder="Family Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="extended" />
          <input
            type="text"
            className="input-control"
            name="extended"
            value={extended}
            placeholder="Extended Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="packageA" />
          <input
            type="text"
            className="input-control"
            name="packageA"
            value={packageA}
            placeholder="Package-A Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="packageB" />
          <input
            type="text"
            className="input-control"
            name="packageB"
            value={packageB}
            placeholder="Package-B Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="packageC" />
          <input
            type="text"
            className="input-control"
            name="packageC"
            value={packageC}
            placeholder="Package-C Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="newborn" />
          <input
            type="text"
            className="input-control"
            name="newborn"
            value={newborn}
            placeholder="Newborn Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="senior" />
          <input
            type="text"
            className="input-control"
            name="senior"
            value={senior}
            placeholder="Senior Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="maternity" />
          <input
            type="text"
            className="input-control"
            name="maternity"
            value={maternity}
            placeholder="Maternity Price ex. $350"
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="input-field">
          <button className="login">
            <span>Submit</span>
          </button>
        </div>
        {alert_message === "success" ? <SuccesAlert /> : null}
      </form>
    );
  }
}

export default PriceEdit;
