import React from "react";
import "./feature.css";

const Feature = ({ title, text, img }) => (
  <div className="pm__features-container__feature">
    <div className="pm__features-container_feature-img">
      <img src={img} style={{ width: 90 }} />
    </div>

    <div className="pm__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="pm__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
