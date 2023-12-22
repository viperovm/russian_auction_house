import * as t from "../types"

const initialState = {
  mobileMenu: false,
}

const siteReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.MOBILE_MENU:

      return {
        ...state,
        mobileMenu: payload,
      }

    default:
      return state
  }
}

export default siteReducer
