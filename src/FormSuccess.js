import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">We have received your request!</div>
      <img
        className="form-img-ii"
        src="img/astro.svg"
        alt="success-image"
      ></img>
    </div>
  );
};

export default FormSuccess;
