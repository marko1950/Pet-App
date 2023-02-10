import React from "react";
import people from "../../assets/people.png";
import "./header.css";
import Pas_gleda from "../../assets/woman_dog.png";

const Header = () => (
  <div className="pm__header section__padding">
    <div className="pm__header-content">
      <h1 className="gradient__text">Need to take care of your buddy?</h1>
      <p>
        Enjoy peace of mind – the tranquility that comes with knowing that your
        loved one is being well cared for. Whether you’re going away on a
        holiday or on a business trip, why not leave the dog sitting to us?
      </p>

      <div>
        <h2 className="header-content__heading">Sign in here:</h2>
        <div className="pm__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <div className="pm__header-password">
            <input type="password" placeholder="Password" />

            <button type="button">Sign In</button>
          </div>
        </div>
      </div>

      <div className="pm__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="pm__header-image">
      <img src={Pas_gleda} />
    </div>
  </div>
);

export default Header;
