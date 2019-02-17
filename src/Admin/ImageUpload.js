import React, { Component } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SuccessAlert from "./SuccessAlert";

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      info: "",
      description: "",
      selectedFile: "",
      imagePath: "",
      alert_message: "",
      error_message: ""
    };
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

    const { description, selectedFile, title, info } = this.state;
    let formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("selectedFile", selectedFile);
    formData.append("info", info);

    axios.post(`${API_BASE_URL}/uploads`, formData).then(result => {
      console.log(">> (onSubmit) file upload result = ", result);
      this.setState({
        imagePath: result.data.path,
        alert_message: "success"
      });
    });
  };

  render() {
    const {
      description,
      selectedFile,
      title,
      info,
      alert_message
    } = this.state;
    return (
      <form className="signup-container" onSubmit={this.onSubmit}>
        <h5 className="auth-title">Upload an Image</h5>
        <div className="input-field">
          <label htmlFor="title" />
          <input
            type="text"
            className="input-control"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.onChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="description" />
          <input
            type="text"
            className="input-control"
            name="info"
            value={info}
            placeholder="Description"
            onChange={this.onChange}
            required
          />
        </div>
        <div className="file-button">
          <input type="file" name="selectedFile" onChange={this.onChange} />
          <br />
          <button className="login" type="submit">
            Submit
          </button>
        </div>
        {alert_message === "success" ? <SuccessAlert /> : null}
      </form>
    );
  }
}

export default ImageUpload;
