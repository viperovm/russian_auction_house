import * as t from "../types"

const initialState = {
  active_action: '',
  modal: '',
  pages: [],
  paintings: [],
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

    case t.GET_PAINTINGS_SUCCESS:

      return {
        ...state,
        paintings: payload,
      }

    case t.GET_PAINTINGS_FAIL:

      return {
        ...state,
        paintings: [],
      }

    default:
      return state
  }
}

export default siteReducer
