import React from "react";
import "./Form.css";
import mail_leti from "..//..//assets/Mail_leti.png";
import { Link } from "react-router-dom";

const FormSuccess = () => {
  return (
    <div>
      <h1 className="form-success">Your request has been sent!</h1>
      <img className="form-img-2" src={mail_leti} alt="success-image" />
      <Link to="/">
        <button className="form-input-btn3">
          Home page <i class="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default FormSuccess;
