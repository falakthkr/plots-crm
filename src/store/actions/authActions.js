// src/store/actions/authActions.js
import axios from "axios";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://plots-crm-backend.vercel.app/api/auth/login",
      credentials
    );
    // You might want to dispatch user data or token to the Redux store here
    return response.data;
  } catch (error) {
    throw error;
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
