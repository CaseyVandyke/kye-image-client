import React, { Component } from "react";
import axios from "axios";

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      info: "",
      description: "",
      selectedFile: "",
      imagePath: ""
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

    axios.post("http://localhost:4000/uploads", formData).then(result => {
      console.log(">> (onSubmit) file upload result = ", result);
      this.setState({
        imagePath: result.data.path
      });
    });
  };

  render() {
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
            className="input-control"
          />
        </div>
        <div className="input-field">
          <label htmlFor="description" />
          <input
            type="text"
            name="info"
            value={info}
            placeholder="Description"
            onChange={this.onChange}
            className="input-control"
          />
        </div>
        <div className="file-button">
          <input type="file" name="selectedFile" onChange={this.onChange} />
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
