import React, { Component } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import FormValidator from "./FormValidator";

class ImageUpload extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "titleError",
        method: "isEmpty",
        validWhen: false,
        message: "Title is required."
      },
      {
        field: "infoError",
        method: "isEmpty",
        validWhen: false,
        message: "Description is required."
      },
      {
        field: "imageError",
        method: "isEmpty",
        validWhen: false,
        message: "Please select image."
      }
    ]);

    this.state = {
      title: "",
      titleError: "",
      info: "",
      infoError: "",
      description: "",
      selectedFile: "",
      imagePath: "",
      imageError: "",
      validationMessage: "",
      validation: this.validator.valid()
    };
    this.submitted = false;
  }

  onChange = e => {
    switch (e.target.name) {
      case "selectedFile":
        this.setState({ selectedFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // handle actual form submission here
    }

    const { description, selectedFile, title, info } = this.state;
    let formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("selectedFile", selectedFile);
    formData.append("info", info);

    axios.post(`${API_BASE_URL}/uploads`, formData).then(result => {
      console.log(">> (onSubmit) file upload result = ", result);
      this.setState({
        imagePath: result.data.path
      });
    });
  };

  render() {
    let validation = this.submitted // if the form has been submitted at least once
      ? this.validator.validate(this.state) // then check validity every time we render
      : this.state.validation; // otherwise just use what's in state
    const { description, selectedFile, title, info } = this.state;
    return (
      <form className="signup-container" onSubmit={this.onSubmit}>
        <h5 className="auth-title">Upload an Image</h5>
        <div className="input-field">
          <label htmlFor="title" />
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.onChange}
            className={`input-control ${validation.titleError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">
            {validation.titleError.message}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="description" />
          <input
            type="text"
            name="info"
            value={info}
            placeholder="Description"
            onChange={this.onChange}
            className={`input-control ${validation.infoError.message &&
              "is-invalid"}`}
            required
          />
          <div className="invalid-feedback">{validation.infoError.message}</div>
        </div>
        <div className="file-button">
          <input type="file" name="selectedFile" onChange={this.onChange} />
          <div className="invalid-feedback">
            {validation.imageError.message}
          </div>
          <br />
          <button className="login" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default ImageUpload;
