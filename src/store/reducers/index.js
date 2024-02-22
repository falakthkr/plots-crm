// src/store/reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import enquiryReducer from "./enquiryReducer";

const rootReducer = combineReducers({
  // Add your reducers here if needed
  auth: authReducer,
  enquiry: enquiryReducer,
});

export default rootReducer;
