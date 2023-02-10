import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="pm__footer section__padding">
    <div className="pm__footer-links">
      <div className="pm__footer-links_logo">
        <h1 className="footer_main_heading">PetMe</h1>
        <p>
          Vukovarska ulica 125., <br /> All Rights Reserved
        </p>
      </div>
      <div className="pm__footer-links_div">
        <h4>Links</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Linked In</p>
      </div>
      <div className="pm__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="pm__footer-links_div">
        <h4>Get in touch</h4>
        <p>Vukovarska ulica 125.</p>
        <p>096 233 4500</p>
        <p>petmeinfo@gmail.com</p>
      </div>
    </div>

    <div className="pm__footer-copyright">
      <p>@2022 PetMe. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
