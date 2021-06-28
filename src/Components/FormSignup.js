import React, { useState, useMemo } from "react";
import styled from "styled-components";
import {
  Right,
  Form,
  FormGroup,
  Inputs,
  Input,
  Button,
  Label,
  Style,
} from "../Styled/Container";
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
    <Right>
      <Form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstname"
            placeholder="Enter your FirstName"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {firstnameErr && <Style>{firstnameErr}</Style>}
        </FormGroup>

        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastname"
            placeholder="Enter your LastName"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {lastnameErr && <Style>{lastnameErr}</Style>}
        </FormGroup>
        <Inputs>
          <Label>User Name</Label>
          <Input
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {usernameErr && <Style>{usernameErr}</Style>}
        </Inputs>
        <FormGroup>
          <Label>E-mail</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {emailErr && <Style>{emailErr}</Style>}
        </FormGroup>
        <FormGroup>
          <Label>Area of Interests</Label>
          <Input
            onChange={(event) => setIntrestValue(event.target.value)}
            value={intrestValue}
            onBlur={handleFormValidation}
          />
          {areaofInterestsErr && <Style>{areaofInterestsErr}</Style>}
        </FormGroup>
        <Button
          plus
          type="button"
          onClick={() => handleAddFields()}
          disabled={!intrestValue}
        >
          +
        </Button>

        {inputFields.length ? (
          <ul>
            {inputFields.map((item, index) => (
              <li key={`${item}~${index}`} style={{ color: "white" }}>
                <div>
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

        <FormGroup>
          <Label>Mobile</Label>
          <Input
            type="number"
            name="phone"
            placeholder="Enter your number"
            maxLength="10"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {phoneErr && <Style>{phoneErr}</Style>}
        </FormGroup>

        <FormGroup>
          <Label>Date of Birth</Label>
          <Input
            type="date"
            name="Date of birth"
            placeholder="Date of birth"
            value={values.Dateofbirth}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {dateofbirthErr && <Style>{dateofbirthErr}</Style>}
        </FormGroup>
        <FormGroup radio>
          <Label>Gender</Label>
          <Input
            radio1
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
          <Input
            radio1
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
          <Input
            radio1
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          Other
        </FormGroup>
        {genderErr && <Style>{genderErr}</Style>}

        <FormGroup>
          <Label>Pincode</Label>
          <Input
            type="number"
            name="pincode"
            value={values.pincode}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {pincodeErr && <Style>{pincodeErr}</Style>}
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleFormValidation}
          />
          {addressErr && <Style>{addressErr}</Style>}
        </FormGroup>
        <FormGroup>
          <Label>Country</Label>
          <Select
            options={options}
            optionFilterProp="children"
            value={value}
            onChange={changeHandler}
            filterOption={createFilter({ matchFrom: "start" })}
          />
          {countryListErr && <Style>{countryListErr}</Style>}
        </FormGroup>

        <Button signup>Sign up</Button>
      </Form>
    </Right>
  );
};

export default FormSignup;
