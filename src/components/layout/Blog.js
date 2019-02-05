import React, { Component } from "react";
import axios from "axios";
import "../../styles/Blog.css";
import { API_BASE_URL } from "../../config";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    axios
      .get(`${API_BASE_URL}/uploads`)
      .then(response => {
        console.log(response.data);
        const images = response.data;
        this.setState({
          images
        });
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }
  render() {
    return (
      <div className="blog-container">
        {this.state.images.map((image, i) => (
          <div className="image-center" key={i}>
            <h1 className="image-title">{image.title}</h1>
            <p className="date">{image.date}</p>
            <p className="image-info">{image.info}</p>
            <div className="image-container">
              <img className="image-size" src={image} alt="" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
