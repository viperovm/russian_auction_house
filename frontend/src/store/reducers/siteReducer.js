import * as t from "../types"

const initialState = {
  active_action: '',
  modal: '',
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

    default:
      return state
  }
}

export default siteReducer
