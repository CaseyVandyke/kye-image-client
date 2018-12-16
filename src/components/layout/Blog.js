import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

class Blog extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Blog">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default Blog;
