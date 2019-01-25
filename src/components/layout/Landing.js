import React, { Component } from "react";
import axios from "axios";
import "../../styles/Landing.css";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/uploads")
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
          <div className="image-container" key={i}>
            <span className="image-inline">
              <img className="image-size" src={image.image} alt="" />
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
