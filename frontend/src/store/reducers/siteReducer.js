import * as t from "../types"

const initialState = {
  active_action: '',
}

const siteReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.ACTIVE_ACTION:

      return {
        ...state,
        active_action: payload,
      }

    default:
      return state
  }
}

export default siteReducer
