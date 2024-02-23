import axios from "axios";

import {
  ADD_ENQUIRY_FAILURE,
  ADD_ENQUIRY_SUCCESS,
  ADD_ENQUIRY_PENDING,
  GET_ALL_ENQUIRIES_SUCCESS,
  GET_ALL_ENQUIRIES_FAILURE,
  GET_ALL_ENQUIRIES_PENDING,
  DELETE_ENQUIRY_FAILURE,
  DELETE_ENQUIRY_SUCCESS,
  DELETE_ENQUIRY_PENDING,
} from "../actionTypes.js/enquiryActionTypes";

const addEnquirySuccess = (payload) => (dispatch) => {
  dispatch({
    type: ADD_ENQUIRY_SUCCESS,
    payload,
  });
};

const addEnquiryPending = (payload) => (dispatch) => {
  dispatch({
    type: ADD_ENQUIRY_PENDING,
    payload,
  });
};

const addEnquiryFailure = (payload) => (dispatch) => {
  dispatch({
    type: ADD_ENQUIRY_FAILURE,
    payload,
  });
};

export const addEnquiryCall = (data) => async (dispatch) => {
  dispatch(addEnquiryPending());
  try {
    const response = await axios.post(
      "https://plots-crm-backend.vercel.app/api/enquiry/add-enquiry",
      data
    );
    if (response.data) {
      dispatch(addEnquirySuccess(response));
    }
  } catch (error) {
    dispatch(addEnquiryFailure(error));
  }
};

const getAllEnquiriesSuccess = (payload) => (dispatch) => {
  dispatch({
    type: GET_ALL_ENQUIRIES_SUCCESS,
    payload,
  });
};

const getAllEnquiriesFailure = (payload) => (dispatch) => {
  dispatch({
    type: GET_ALL_ENQUIRIES_FAILURE,
    payload,
  });
};

const getAllEnquiriesPending = (payload) => (dispatch) => {
  dispatch({
    type: GET_ALL_ENQUIRIES_PENDING,
    payload,
  });
};

export const getAllEnquiries = () => async (dispatch) => {
  dispatch(getAllEnquiriesPending());
  try {
    const response = await axios.get(
      "https://plots-crm-backend.vercel.app/api/enquiry/"
    );
    if (response.status === 200) {
      dispatch(getAllEnquiriesSuccess(response));
    }
  } catch (error) {
    dispatch(getAllEnquiriesFailure(error));
  }
};

const deleteEnquiryPending = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_ENQUIRY_PENDING,
    payload,
  });
};

const deleteEnquiryFailure = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_ENQUIRY_FAILURE,
    payload,
  });
};

const deleteEnquirySuccess = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_ENQUIRY_SUCCESS,
    payload,
  });
};

export const deleteEnquiry = (id) => async (dispatch) => {
  dispatch(deleteEnquiryPending());
  try {
    const response = await axios.delete(
      `https://plots-crm-backend.vercel.app/api/enquiry/${id}`
    );
    if (response.status === 200) {
      dispatch(deleteEnquirySuccess(response));
    }
  } catch (error) {
    dispatch(deleteEnquiryFailure(error));
  }
};
