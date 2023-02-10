import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import FormDogSize from "./FormDogSize";
import DogInformation from "./DogInformation";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="full-form">
        <div className="form-container">
          {!isSubmitted ? (
            <>
              <div className="form-content-left">
                <DogInformation />
                <FormDogSize />
              </div>
              <FormSignup submitForm={submitForm} />
            </>
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
