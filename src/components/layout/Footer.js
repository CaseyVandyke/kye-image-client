import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook);

const Footer = () => (
  <div className="footer-container">
    <Link to="https://m.facebook.com/kyeimage/" className="icon-push">
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "blue" }} />
    </Link>
    <Link to="/" className="icon-push">
      <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "red" }} />
    </Link>
  </div>
);

export default Footer;
