// src/store/reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import enquiryReducer from "./enquiryReducer";
import plotsReducer from "./plotReducer";

const rootReducer = combineReducers({
  // Add your reducers here if needed
  auth: authReducer,
  enquiry: enquiryReducer,
  plots: plotsReducer,
});

export default rootReducer;
