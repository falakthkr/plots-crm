import {
  GET_BOOKED_PLOTS_SUCCESS,
  GET_BOOKED_PLOTS_FAILURE,
  GET_BOOKED_PLOTS_PENDING,
} from "../actionTypes/plotActionTypes";
import axios from "axios";

const getBookedSlotsSuccess = (payload) => (dispatch) => {
  dispatch({
    type: GET_BOOKED_PLOTS_SUCCESS,
    payload,
  });
};

const getBookedSlotsPending = (payload) => (dispatch) => {
  dispatch({
    type: GET_BOOKED_PLOTS_PENDING,
    payload,
  });
};

const getBookedSlotsFailure = (payload) => (dispatch) => {
  dispatch({
    type: GET_BOOKED_PLOTS_FAILURE,
    payload,
  });
};

export const getBookedSlots = (payload) => async (dispatch) => {
  dispatch(getBookedSlotsPending());
  try {
    const response = await axios.get(
      "https://plots-crm-backend.vercel.app/api/enquiry/booking/booked"
    );
    if (response.data) {
      const finalResp = response.data.map((item) => Number(item));
      dispatch(getBookedSlotsSuccess(finalResp));
    }
  } catch (error) {
    dispatch(getBookedSlotsFailure(error));
  }
};
