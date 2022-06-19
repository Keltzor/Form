import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling the
          information bellow.
        </h1>
        {/* username  */}
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          ></input>
          {errors.username && <p>{errors.username}</p>}
        </div>
        {/* Email */}
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p>{errors.email}</p>}
        </div>
        {/* Password */}
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/* confirm password */}
        <div className="form-inputs">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm password
          </label>
          <input
            id="confirmpassword"
            type="password"
            name="confirmpassword"
            className="form-input"
            placeholder="Enter your password again"
            value={values.confirmpassword}
            onChange={handleChange}
          ></input>
          {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
        </div>
        {/* button */}
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
