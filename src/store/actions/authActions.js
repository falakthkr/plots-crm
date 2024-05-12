// src/store/actions/authActions.js
import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
} from "../actionTypes/authActionTypes";

const userLoginSuccess = (payload) => (dispatch) => {
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload,
  });
};

const userLoginFailure = (payload) => (dispatch) => {
  dispatch({
    type: USER_LOGIN_FAILURE,
    payload,
  });
};

const userLoginPending = () => (dispatch) => {
  dispatch({
    type: USER_LOGIN_PENDING,
  });
};

export const userLogin = (credentials) => async (dispatch) => {
  dispatch(userLoginPending());
  try {
    const response = await axios.post(
      "https://plots-crm-backend.vercel.app/api/auth/login",
      credentials
    );
    if (response.data.token) {
      dispatch(userLoginSuccess(response));
      return response;
    }
  } catch (error) {
    dispatch(userLoginFailure(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://plots-crm-backend.vercel.app/api/auth/logout"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addUser = (userData) => async (dispatch) => {
  try {
    await axios.post(
      "https://plots-crm-backend.vercel.app/api/auth/register",
      userData
    );
    // You might want to dispatch additional actions or update state here
  } catch (error) {
    throw error;
  }
};

// export const getUserDetails = (email) => async (dispatch) => {
//   try {
//     // Make an API call to fetch user details using the authToken
//     const response = await axios.post("https://plots-crm-backend.vercel.app/api/auth/user", {
//       email: localStorage.getItem("userEmail"),
//     });

//     setUserData(response.data);
//   } catch (error) {
//     message.error("Failed to fetch user details.");
//   }
// };
