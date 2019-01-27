import React, { Component } from "react";
import axios from "axios";
import Pricing from "../components/layout/Pricing";

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
      maternity: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
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

    axios.post("http://localhost:4000/api/pricing", newPrices).then(result => {
      console.log(result);
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
      maternity
    } = this.state;
    return (
      <form className="signup-container" onSubmit={this.handleSubmit}>
        <h5 className="auth-title">Price Edit</h5>
        <div className="input-field">
          <label htmlFor="families" />
          <input
            type="text"
            name="families"
            value={families}
            placeholder="Family Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="extended" />
          <input
            type="text"
            name="extended"
            value={extended}
            placeholder="Extended Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="packageA" />
          <input
            type="text"
            name="packageA"
            value={packageA}
            placeholder="Package-A Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="packageB" />
          <input
            type="text"
            name="packageB"
            value={packageB}
            placeholder="Package-B Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="packageC" />
          <input
            type="text"
            name="packageC"
            value={packageC}
            placeholder="Package-C Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="newborn" />
          <input
            type="text"
            name="newborn"
            value={newborn}
            placeholder="Newborn Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="senior" />
          <input
            type="text"
            name="senior"
            value={senior}
            placeholder="Senior Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="maternity" />
          <input
            type="text"
            name="maternity"
            value={maternity}
            placeholder="Maternity Price ex. $350"
            onChange={this.handleChange}
            className="input-control"
          />
        </div>

        <div className="input-field">
          <button className="login">
            <span>Submit</span>
          </button>
        </div>
      </form>
    );
  }
}

export default PriceEdit;
