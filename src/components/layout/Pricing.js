import React, { Component } from "react";
import axios from "axios";
import "./../../styles/Pricing.css";
import { API_BASE_URL } from "../../config";

class Pricing extends Component {
  constructor() {
    super();
    this.state = {
      pricing: {
        families: 0,
        extended: 0,
        packageA: 0,
        packageB: 0,
        packageC: 0,
        newborn: 0,
        senior: 0,
        maternity: 0
      }
    };
  }

  componentDidMount() {
    axios
      .get(`${API_BASE_URL}/pricing`)
      .then(response => {
        const pricing = response.data;
        this.setState({
          pricing
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
      <div className="pricing-container">
        <div>
          <div className="families-price">
            <h2>Families</h2>
            <p>
              1 hour sessions Immediate family - {this.state.pricing.families}
            </p>
            <p>
              Extended family (bigger groups) - {this.state.pricing.extended}
            </p>
          </div>
          <div className="families-price">
            <h2>Wedding</h2>
            <p>
              *Package A: includes engagements, bridals (separate day pictures
              of you in your dress), and full wedding day coverage (7 hours) -{" "}
              {this.state.pricing.packageA}
            </p>
            <p>
              Package B: Includes engagements, full wedding day coverage (7
              hours) - {this.state.pricing.packageB}
            </p>
            <p>
              Package C: Includes full wedding day coverage (7 hours) -{" "}
              {this.state.pricing.packageC}
            </p>
          </div>
          <div className="families-price">
            <h2>Newborns/babies</h2>
            <p>1 hour sessions - {this.state.pricing.newborn} </p>
          </div>
          <div className="families-price">
            <h2>Seniors</h2>
            <p>1 hour sessions - {this.state.pricing.senior}</p>
          </div>
          <div className="families-price">
            <h2>Maternity</h2>
            <p>1 hour sessions - {this.state.pricing.maternity}</p>
          </div>
          <div className="extra-info">
            <p>
              Prices may vary depending on the size of the group, studio fee's,
              and travel expenses.
            </p>
            <p>
              Contact me with any questions, I would be happy to personalize a
              package just for YOU! With each session you receive all rights to
              your images, and are guaranteed them back and edited in 7-14 days.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
