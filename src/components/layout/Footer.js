import React from "react";
import "../../styles/Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook);

const Footer = () => (
  <div className="footer-container">
    <p className="icon-push">
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "blue" }} />
    </p>
    <p className="icon-push">
      <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "red" }} />
    </p>
  </div>
);

export default Footer;
