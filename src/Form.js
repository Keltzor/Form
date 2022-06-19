import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitting] = useState(false);

  function submitForm() {
    setIsSubmitting(true);
  }
  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">+</span> */}
        <div className="form-content-left">
          <img
            className="form-img-i"
            src="img/rocket.svg"
            alt="spaceship"
          ></img>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        {/* <FormSuccess></FormSuccess> */}
      </div>
    </>
  );
};

export default Form;
