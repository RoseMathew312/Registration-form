import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  values: {
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
  },
  error: {
    firstnameErr: "",
    lastnameErr: "",
    usernameErr: "",
    emailErr: "",
    dateofbirthErr: "",
    phoneErr: "",
    pincodeErr: "",
    addressErr: "",
    areaofInterestsErr: "",
    countryListErr: "",
    genderErr: "",
  },
  inputFields: [],
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      state.formdata = { ...state.formdata, ...action.payload };
    },

    changeHandler: (state, action) => {
      state.countryList = action.payload;
    },
    errorHandler: (state, action) => {
      state.error = { ...state.error, ...action.payload };
    },
    handleAddFields: (state, action) => {
      state.interests.push(action.payload);
    },
    handleRemoveFields: (state, action) => {
      state.interests = [...action.payload];
    },
  },
});

const store = configureStore({
  reducer: registrationSlice.reducer,
});

export const registrationActions = registrationSlice.actions;
export default store;
