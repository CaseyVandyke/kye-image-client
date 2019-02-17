import React, { Component } from "react";
import axios from "axios";
import Pricing from "../components/layout/Pricing";
import { API_BASE_URL } from "../config";
import FormValidator from "./FormValidator";

class PriceEdit extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "familiesError",
        method: "isEmpty",
        validWhen: false,
        message: "Families price is required."
      },
      {
        field: "extendedError",
        method: "isEmpty",
        validWhen: false,
        message: "Extended price is required."
      },
      {
        field: "packageAError",
        method: "isEmpty",
        validWhen: false,
        message: "Package-A price is required."
      },
      {
        field: "packageBError",
        method: "isEmpty",
        validWhen: false,
        message: "Package-B price is required."
      },
      {
        field: "packageCError",
        method: "isEmpty",
        validWhen: false,
        message: "Package-C price is required."
      },
      {
        field: "newbornError",
        method: "isEmpty",
        validWhen: false,
        message: "Newborn price is required."
      },
      {
        field: "seniorError",
        method: "isEmpty",
        validWhen: false,
        message: "Senior price is required."
      },
      {
        field: "maternityError",
        method: "isEmpty",
        validWhen: false,
        message: "Maternity price is required."
      }
    ]);

    this.state = {
      families: "",
      familiesError: "",
      extended: "",
      extendedError: "",
      packageA: "",
      packageAError: "",
      packageB: "",
      packageBError: "",
      packageC: "",
      packageCError: "",
      newborn: "",
      newbornError: "",
      senior: "",
      seniorError: "",
      maternity: "",
      maternityError: "",
      validation: this.validator.valid()
    };
    this.submitted = false;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // handle actual form submission here
    }

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

    axios.post(`${API_BASE_URL}/pricing`, newPrices).then(result => {
      console.log(result);
    });
  };
  render() {
    let validation = this.submitted // if the form has been submitted at least once
      ? this.validator.validate(this.state) // then check validity every time we render
      : this.state.validation; // otherwise just use what's in state
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
            className={`input-control ${validation.familiesError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.familiesError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="extended" />
          <input
            type="text"
            name="extended"
            value={extended}
            placeholder="Extended Price ex. $350"
            onChange={this.handleChange}
            className={`input-control ${validation.extendedError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.extendedError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="packageA" />
          <input
            type="text"
            name="packageA"
            value={packageA}
            placeholder="Package-A Price ex. $350"
            onChange={this.handleChange}
            className={`input-control ${validation.packageAError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.packageAError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="packageB" />
          <input
            type="text"
            name="packageB"
            value={packageB}
            placeholder="Package-B Price ex. $350"
            onChange={this.handleChange}
            className={`input-control ${validation.packageBError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.packageBError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="packageC" />
          <input
            type="text"
            name="packageC"
            value={packageC}
            placeholder="Package-C Price ex. $350"
            onChange={this.handleChange}
            className={`input-control ${validation.packageCError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.packageCError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="newborn" />
          <input
            type="text"
            name="newborn"
            value={newborn}
            placeholder="Newborn Price ex. $350"
            onChange={this.handleChange}
            className={`input-control ${validation.newbornError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.newbornError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="senior" />
          <input
            type="text"
            name="senior"
            value={senior}
            placeholder="Senior Price ex. $350"
            onChange={this.handleChange}
            className={`input-control ${validation.seniorError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.seniorError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="maternity" />
          <input
            type="text"
            name="maternity"
            value={maternity}
            placeholder="Maternity Price ex. $350"
            onChange={this.handleChange}
            className={`input-control ${validation.maternityError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.maternityError.message}
          </div>
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
