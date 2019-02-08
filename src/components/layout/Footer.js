import React from "react";
import "../../styles/Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook);

const Footer = () => (
  <div className="footer-container">
    <div className="icon-push">
      <a href="https://m.facebook.com/kyeimage/" className="a-style">
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          style={{ color: "blue" }}
        />
      </a>
    </div>
    <div className="icon-push">
      <a href="https://www.instagram.com/kyeimage/" className="a-style">
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          style={{ color: "red" }}
        />
      </a>
    </div>
  </div>
);

export default Footer;
