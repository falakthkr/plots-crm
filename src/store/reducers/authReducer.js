import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_PENDING,
} from "../actionTypes.js/authActionTypes";

const initialState = {
  isAuth: true,
  userData: null,
  isError: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isError: false,
        isLoading: false,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        isError: true,
        isLoading: false,
      };
    case USER_LOGIN_PENDING:
      return {
        ...state,
        isAuth: false,
        isError: false,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
