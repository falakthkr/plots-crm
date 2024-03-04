import {
  ADD_ENQUIRY_FAILURE,
  ADD_ENQUIRY_SUCCESS,
  ADD_ENQUIRY_PENDING,
  GET_ALL_ENQUIRIES_SUCCESS,
  GET_ALL_ENQUIRIES_FAILURE,
  GET_ALL_ENQUIRIES_PENDING,
  DELETE_ENQUIRY_FAILURE,
  DELETE_ENQUIRY_PENDING,
  DELETE_ENQUIRY_SUCCESS,
} from "../actionTypes/enquiryActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  allEnquiries: [],
};

const enquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENQUIRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_ENQUIRY_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_ENQUIRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case GET_ALL_ENQUIRIES_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_ENQUIRIES_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case GET_ALL_ENQUIRIES_SUCCESS:
      return {
        ...state,
        allEnquiries: action.payload.data,
        isError: false,
        isLoading: false,
      };
    case DELETE_ENQUIRY_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case DELETE_ENQUIRY_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_ENQUIRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default enquiryReducer;
