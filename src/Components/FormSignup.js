import React, { useState, useMemo } from "react";

import "./Form.css";
import Select, { createFilter } from "react-select";
import countryList from "react-select-country-list";

const FormSignup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    dateofbirth: "",
    phone: "",
    pincode: "",
    address: "",
    countryList: "",
    areaofInterests: "",
    gender: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormValidation = () => {
    const {
      firstname,
      lastname,
      username,
      email,
      dateofbirth,
      phone,
      pincode,
      address,
      countryList,
      areaofInterests,
      gender,
    } = values;
    let formErrors = {};
    let formIsValid = true;
    //First name
    if (!firstname) {
      formIsValid = false;
      formErrors["firstnameErr"] = "First Name is required.";
    }
    //Last name
    if (!lastname) {
      formIsValid = false;
      formErrors["lastnameErr"] = "Last Name is required.";
    }
    //User name
    if (!username) {
      formIsValid = false;
      formErrors["usernameErr"] = "User Name is required.";
    }
    //Email
    if (!email) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Invalid email id.";
    }

    //DOB
    if (!dateofbirth) {
      formIsValid = false;
      formErrors["dateofbirthErr"] = "Date of birth is required.";
    }
    if (!areaofInterests) {
      formIsValid = false;
      formErrors["areaofInterestsErr"] = "Area of Interests is required.";
    }
    //Gender
    if (!gender) {
      formIsValid = false;
      formErrors["genderErr"] = "Gender is required.";
    }

    //Phone number
    if (!phone) {
      formIsValid = false;
      formErrors["phoneErr"] = "Phone number is required.";
    }
    //Pincode
    if (!pincode) {
      formIsValid = false;
      formErrors["pincodeErr"] = "Pincode is required.";
    }
    //Address
    if (!address) {
      formIsValid = false;
      formErrors["addressErr"] = "Address is required.";
    }
    //Country
    if (!countryList) {
      formIsValid = false;
      formErrors["countryListErr"] = "Country is required.";
    }

    setError(formErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleFormValidation()) {
      alert("successfully submitted");
    }
  };
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const [inputFields, setInputFields] = useState([]);
  const [intrestValue, setIntrestValue] = useState("");
  const handleAddFields = () => {
    let values = [...inputFields, intrestValue];

    setIntrestValue("");
    setInputFields(values);
  };
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const {
    firstnameErr,
    lastnameErr,
    usernameErr,
    emailErr,
    dateofbirthErr,
    phoneErr,
    pincodeErr,
    addressErr,
    areaofInterestsErr,
    countryListErr,
    genderErr,
  } = error;
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>Hello!</h1>
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="firstname"
            placeholder="Enter your FirstName"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {firstnameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {firstnameErr}
            </div>
          )}
        </div>

        <div className="form-inputs">
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="lastname"
            placeholder="Enter your LastName"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {lastnameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>{lastnameErr}</div>
          )}
        </div>
        <div className="form-inputs">
          <label className="form-label">User Name</label>
          <input
            className="form-input"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {usernameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>{usernameErr}</div>
          )}
        </div>
        <div className="form-inputs">
          <label className="form-label">E-mail</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {emailErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
          )}
        </div>
        <div className="form-inputs">
          <label className="form-label">Area of Interests</label>
          <input
            className="form-input"
            onChange={(event) => setIntrestValue(event.target.value)}
            value={intrestValue}
            onBlur={handleFormValidation}
          />
          {areaofInterestsErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {areaofInterestsErr}
            </div>
          )}
        </div>
        <button
          className="btn"
          type="button"
          onClick={() => handleAddFields()}
          disabled={!intrestValue}
        >
          +
        </button>

        {inputFields.length ? (
          <ul>
            {inputFields.map((item, index) => (
              <li key={`${item}~${index}`} style={{ color: "white" }}>
                <div className="form-group col-sm-2">
                  {item}{" "}
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}

        <div className="form-inputs">
          <label className="form-label">Mobile</label>
          <input
            className="form-input"
            type="number"
            name="phone"
            placeholder="Enter your number"
            maxLength="10"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Date of Birth</label>
          <input
            className="form-input"
            type="date"
            name="Date of birth"
            placeholder="Date of birth"
            value={values.Dateofbirth}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {dateofbirthErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {dateofbirthErr}
            </div>
          )}
        </div>
        <div className="form-inputs">
          <label className="form-label">Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          Other
        </div>
        {genderErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>
        )}

        <div className="form-inputs">
          <label className="form-label">Pincode</label>
          <input
            className="form-input"
            type="number"
            name="pincode"
            value={values.pincode}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {pincodeErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>{pincodeErr}</div>
          )}
        </div>
        <div className="form-inputs">
          <label className="form-label">Address</label>
          <input
            className="form-input"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {addressErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>
          )}
        </div>
        <div className="form-inputs">
          <label className="form-label">Country</label>
          <Select
            options={options}
            optionFilterProp="children"
            value={value}
            onChange={changeHandler}
            filterOption={createFilter({ matchFrom: "start" })}
          />
          {countryListErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {countryListErr}
            </div>
          )}
        </div>

        <button className="form-input-btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
