import * as t from "../types"

const initialState = {
  active_action: '',
  modal: '',
  pages: [],
}

const siteReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case t.ACTIVE_ACTION:

      return {
        ...state,
        active_action: payload,
      }

    case t.SET_MODAL:

      return {
        ...state,
        modal: payload,
      }

    case t.GET_PAGES_SUCCESS:

      return {
        ...state,
        pages: payload,
      }

    case t.GET_PAGES_FAIL:

      return {
        ...state,
        pages: [],
      }

    default:
      return state
  }
}

export default siteReducer
