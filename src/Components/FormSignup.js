import { useDispatch, useSelector } from "react-redux";
import { registrationActions } from "../store/index";
import { Right, Form, Inputs, Input, Button, Label } from "../Styled/Container";
import Select, { createFilter } from "react-select";
import countryList from "react-select-country-list";

const FormSignup = () => {
  // const [values, setValues] = useState({
  //   firstname: "",
  //   lastname: "",
  //   username: "",
  //   email: "",
  //   dateofbirth: "",
  //   phone: "",
  //   pincode: "",
  //   address: "",
  //   countryList: "",
  //   areaofInterests: "",
  //   gender: "",
  // });
  //const [error, setError] = useState({});
  const formdata = useSelector((state) => state.values);
  const error = useSelector((state) => state.error);
  const interests = useSelector((state) => state.interests);
  const inputFields = useSelector((state) => state.inputFields);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();
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
  } = formdata;

  const handler = (event) => {
    dispatch(
      registrationActions.changeHandler({ countryList: event.target.innerText })
    );
    dispatch(registrationActions.countryList());
    dispatch(registrationActions.errorHandler({ countryErr: null }));
  };

  const eventChangeHandler = (event) => {
    dispatch(
      registrationActions.handleChange({
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleAddFields = () => {
    let values = [...interests, inputFields];

    dispatch(registrationActions.onChangeHandler({ areaofInterests: "" }));
  };

  const handleRemoveFields = (index) => {
    const values = [...interests, inputFields];
    values.splice(index, 1);
    dispatch(registrationActions.areaofInterestRemove(values));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  const handleFormValidation = () => {
    // const {
    //   firstname,
    //   lastname,
    //   username,
    //   email,
    //   dateofbirth,
    //   phone,
    //   pincode,
    //   address,
    //   countryList,
    //   areaofInterests,
    //   gender,
    // } = values;
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

    error(formErrors);
    return formIsValid;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (handleFormValidation()) {
  //     alert("successfully submitted");
  //   }
  // };
  //const [value, setValue] = useState("");
  //const options = useMemo(() => countryList().getData(), []);

  // const changeHandler = (value) => {
  //   setValue(value);
  // };

  //const [inputFields, setInputFields] = useState([]);
  //const [intrestValue, setIntrestValue] = useState("");
  // const handleAddFields = () => {
  //   let values = [...inputFields, intrestValue];

  //   setIntrestValue("");
  //   setInputFields(values);
  // };
  // const handleRemoveFields = (index) => {
  //   const values = [...inputFields];
  //   values.splice(index, 1);
  //   setInputFields(values);
  // };
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
      <Form onSubmit={submitHandler}>
        <h1>Registration Form</h1>
        <Inputs>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstname"
            placeholder="Enter your FirstName"
            value={firstname}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {firstnameErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {firstnameErr}
            </div>
          )}
        </Inputs>

        <Inputs>
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastname"
            placeholder="Enter your LastName"
            value={lastname}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {lastnameErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {lastnameErr}
            </div>
          )}
        </Inputs>
        <Inputs>
          <Label>User Name</Label>
          <Input
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {usernameErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {usernameErr}
            </div>
          )}
        </Inputs>
        <Inputs>
          <Label>E-mail</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {emailErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {emailErr}
            </div>
          )}
        </Inputs>
        <Inputs>
          <Label>Area of Interests</Label>
          <Input
            onChange={(event) => interests(event.target.value)}
            value={areaofInterests}
            onBlur={handleFormValidation}
          />
          {areaofInterestsErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {areaofInterestsErr}
            </div>
          )}
        </Inputs>
        <Button
          plus
          type="button"
          onClick={() => handleAddFields()}
          disabled={!interests}
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

        <Inputs>
          <Label>Mobile</Label>
          <Input
            type="number"
            name="phone"
            placeholder="Enter your number"
            maxLength="10"
            value={phone}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {phoneErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {phoneErr}
            </div>
          )}
        </Inputs>

        <Inputs>
          <Label>Date of Birth</Label>
          <Input
            type="date"
            name="Date of birth"
            placeholder="Date of birth"
            value={dateofbirth}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {dateofbirthErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {dateofbirthErr}
            </div>
          )}
        </Inputs>
        <Inputs radio>
          <Label>Gender</Label>
          <Input
            radio1
            type="radio"
            name="gender"
            value="male"
            onChange={eventChangeHandler}
          />
          Male
          <Input
            radio1
            type="radio"
            name="gender"
            value="female"
            onChange={eventChangeHandler}
          />
          Female
          <Input
            radio1
            type="radio"
            name="gender"
            value="other"
            onChange={eventChangeHandler}
          />
          Other
        </Inputs>
        {genderErr && (
          <div
            style={{
              color: "red",
              marginTop: "10px",
              fontSize: 13,
              marginRight: "10em",
            }}
          >
            {genderErr}
          </div>
        )}

        <Inputs>
          <Label>Pincode</Label>
          <Input
            type="number"
            name="pincode"
            value={pincode}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {pincodeErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {pincodeErr}
            </div>
          )}
        </Inputs>
        <Inputs>
          <Label>Address</Label>
          <Input
            name="address"
            value={address}
            onChange={eventChangeHandler}
            onBlur={handleFormValidation}
          />
          {addressErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {addressErr}
            </div>
          )}
        </Inputs>
        <Inputs>
          <Label>Country</Label>
          <Select
            options={options}
            optionFilterProp="children"
            value={countryList}
            onChange={handler}
            filterOption={createFilter({ matchFrom: "start" })}
          />
          {countryListErr && (
            <div style={{ color: "red", fontSize: 13, marginTop: "1vh" }}>
              {countryListErr}
            </div>
          )}
        </Inputs>

        <Button signup>Sign up</Button>
      </Form>
    </Right>
  );
};

export default FormSignup;
