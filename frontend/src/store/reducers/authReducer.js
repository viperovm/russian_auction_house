import * as t from "../types"

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case t.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }
    case t.LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh
      }
    case t.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      }
    case t.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload
      }
    case t.AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false
      }
    case t.USER_LOADED_FAIL:
      return {
        ...state,
        user: null
      }
    case t.LOGIN_FAIL:
    case t.SIGNUP_FAIL:
    case t.LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null
      }
    case t.PASSWORD_RESET_SUCCESS:
    case t.PASSWORD_RESET_FAIL:
    case t.PASSWORD_RESET_CONFIRM_SUCCESS:
    case t.PASSWORD_RESET_CONFIRM_FAIL:
    case t.ACTIVATION_SUCCESS:
    case t.ACTIVATION_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}

export default authReducer