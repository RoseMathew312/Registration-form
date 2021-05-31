import React, { useState, useMemo } from "react";

import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import Select, { createFilter } from "react-select";
import countryList from "react-select-country-list";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, setValues,errors } = useForm(submitForm, validate);
  const [countries, setCountries] = useState("");
  const [intrestValue, setIntrestValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [inputFields, setInputFields] = useState([]);

  const changeHandler = (value) => {
    setCountries(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    values["country"] = countries.label;
    values["areaofInterests"] = inputFields;
    console.log(values);
    
    alert('Sucessfully registered');
    setValues({ username: '',
    email: '',
    password: '',
    password2: '',Dateofbirth:''});
    
    setCountries(['']);
   setInputFields(['']);
   
    
   



  };

  const handleAddFields = () => {
    let values = [...inputFields, intrestValue];
    console.log(values);
    setIntrestValue("");
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Hello!</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
          <div className="form-inputs">
            <label className="form-label">Date of Birth</label>
            <input
              className="form-input"
              type="date"
              name="Date of birth"
              placeholder="Date of birth"
              value={values.Dateofbirth}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">Area of Interests: </label>

            <input
              className="form-input"
              onChange={(event) => setIntrestValue(event.target.value)}
              value={intrestValue}
            />
            <button
              className="btn"
              type="button"
              onClick={() => handleAddFields()}
            >
              +
            </button>
            
              {inputFields?<ul>{inputFields.map((item, index) => (
                
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

                 
              
              ))}}
            </ul>: ""
            
          </div>
          <div className="form-inputs">
            <label className="form-label">Country</label>

            <Select
              options={options}
              optionFilterProp="children"
              value={countries}
              onChange={changeHandler}
              filterOption={createFilter({ matchFrom: "start" })}
            />
          </div>
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;