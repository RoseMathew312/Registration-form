import React, { useState } from "react";
const [error, setError] = "useState";

function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.gender) {
    errors.gender = "required field";
  }
  if (!values.pincode) {
    errors.pincode = "Pincode required";
    return errors;
  }
}

export default validateInfo;
