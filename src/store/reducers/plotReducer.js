import {
  GET_BOOKED_PLOTS_SUCCESS,
  GET_BOOKED_PLOTS_FAILURE,
  GET_BOOKED_PLOTS_PENDING,
} from "../actionTypes/plotActionTypes";

const initialState = {
  isLoading: true,
  plotsData: null,
  isError: false,
};

const plotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKED_PLOTS_SUCCESS:
      return {
        ...state,
        plotsData: action.payload,
        isError: false,
        isLoading: false,
      };
    case GET_BOOKED_PLOTS_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        plotsData: null,
      };
    case GET_BOOKED_PLOTS_PENDING:
      return {
        ...state,
        plotsData: null,
        isError: false,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default plotsReducer;
