import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";
import dog_sitter from "..//../assets/dog_sitter.jpg";

const featuresData = [
  {
    title: "Create your profile",
    text: "We guide you through building a profile that showcases information pet owners care about.",
  },
  {
    title: "Accept requests",
    text: "Tell us the types of pets you want to care for and the dates that work for you. You make your own schedule.",
  },
  {
    title: "Have a fun working day",
    text: "Stay for free with adorable animals in unique homes around the world. Enoy your favourite company with new fluffy buddies. Earn their trust and connect with them.",
  },
  {
    title: "Get paid",
    text: "Payments are ready for withdrawal two days after you have completed a service.",
  },
];

const Features = () => (
  <div className="pm__features section__padding" id="sitters">
    <div className="pm__features-heading">
      <h1>Want to become a Sitter?</h1>
      <img className="dog_sitter" src={dog_sitter} />
    </div>

    <div className="pm__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
      <div className="__features-contact">
        <p className="__features_question">
          If you want a become a Pet Sitter, give us your contact :
        </p>
        <div className="features_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  </div>
);
export default Features;
