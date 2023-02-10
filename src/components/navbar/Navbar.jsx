import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import dog_logo from "../../assets/Dog-Leash.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pm__navbar">
      <div className="pm__navbar-links_logo">
        <img src={dog_logo} />
        <h1 className="logo">PetMe</h1>
      </div>
      <div className="pm__navbar-links">
        <div className="pm__navbar-links_container">
          <p>
            <a href="#POS">Pet Owner Services</a>
          </p>
          <p>
            <a href="#sitters">Sitters</a>
          </p>
          <p>
            <a href="#CR">Customer Reviews</a>
          </p>
          <p>
            <a href="#Questions">Questions</a>
          </p>
        </div>
      </div>
      <div className="pm__navbar-sign">
        <p>Are you new?</p>
        <Link to="/sign-up">
          <button type="button">Sign up</button>
        </Link>
      </div>
      <div className="pm__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="pm__navbar-menu_container scale-up-center">
            <div className="pm__navbar-menu_container-links">
              <p>
                <a href="#POS">Pet Owner Services</a>
              </p>
              <p>
                <a href="#sitters">Sitters</a>
              </p>
              <p>
                <a href="#CR">Customer Reviews</a>
              </p>
              <p>
                <a href="#Questions">Questions</a>
              </p>
            </div>
            <div className="pm__navbar-menu_container-links-sign">
              <Link to="/sign-up">
                <button type="button">Sign up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
