export default function validateInfo(values) {
  let errors = {};

  //   Username
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  //   Email

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //   Password
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password is too short must be 6 characters or more";
  }

  //   confirmpassword
  if (!values.confirmpassword) {
    errors.confirmpassword = "Password required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Passwords do not match";
  }

  return errors;
}
