import React, { Component } from "react";
import "../../styles/Landing.css";
import { Link } from "react-router-dom";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }
  /*componentDidMount() {
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
  } */
  render() {
    return (
      <div>
        <div className="welcome-container">
          <h2 className="welcome-message">Welcome to</h2>
          <p className="welcome-header">Kye Image</p>
          <p className="welcome-info">
            Hi there and welcome to Kye Image! I am a professionally trained
            Nebrasksa and Utah photographer.
          </p>
          <Link to="/blog" className="tour">
            Take the tour
          </Link>
          <div className="landing-logo">
            <img
              className="logo"
              src={require("../../img/Kye-Image_Stamp3-09-1.png")}
              alt="kye-logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
