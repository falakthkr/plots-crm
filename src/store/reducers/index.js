// src/store/reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  // Add your reducers here if needed
  auth: authReducer,
});

export default rootReducer;
