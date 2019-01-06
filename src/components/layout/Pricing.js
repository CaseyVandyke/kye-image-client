import React from "react";
import "./../../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="families-price">
        <h2>Families</h2>
        <p>1 hour sessions Immediate family $350</p>
        <p>Extended family (bigger groups) $425</p>
      </div>
      <div className="families-price">
        <h2>Wedding</h2>
        <p>
          *Package A: includes engagements, bridals (separate day pictures of
          you in your dress), and full wedding day coverage (7 hours) $2,100
        </p>
        <p>
          Package B: Includes engagements, full wedding day coverage (7 hours)
          $1850
        </p>
        <p>Package C: Includes full wedding day coverage (7 hours) $1650</p>
      </div>
      <div className="families-price">
        <h2>Newborns/babies</h2>
        <p>1 hour sessions $350 </p>
      </div>
      <div className="families-price">
        <h2>Seniors</h2>
        <p>1 hour sessions $300</p>
      </div>
      <div className="families-price">
        <h2>Maternity</h2>
        <p>1 hour sessions $350</p>
      </div>
      <div className="extra-info">
        <p>
          Prices may vary depending on the size of the group, studio fee's, and
          travel expenses.
        </p>
        <p>
          Contact me with any questions, I would be happy to personalize a
          package just for YOU! With each session you receive all rights to your
          images, and are guaranteed them back and edited in 7-14 days.{" "}
        </p>
      </div>
    </div>
  );
};

export default Pricing;
