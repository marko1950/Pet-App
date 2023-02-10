import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatpm.css";
import search_client from "..//..//assets/search_client.png";
import booking_icon from "..//..//assets/booking_icon.png";
import pas_igranje from "..//..//assets/pas_igranje.png";

const Whatpm = () => (
  <div className="pm__whatpm section__margin" id="wpm">
    <div className="pm__whatpm-heading">
      <h1 className="gradient__text2">How does PetMe work ?</h1>
    </div>

    <div className="pm__whatpm-container">
      <Feature
        title="Search for a Sitter"
        text="Contact vetted, quality Pet Sitters that meet your pet’s needs."
        img={search_client}
      />
      <Feature
        title="Make a Booking"
        text="Book through our platform once you’ve found the right Sitter."
        img={booking_icon}
      />
      <Feature
        title="Enjoy Peace of Mind"
        text="Receive regular photo updates of your pet while you’re away."
        img={pas_igranje}
      />
    </div>
  </div>
);

export default Whatpm;
