import * as t from "../types"

export const activeAction = name => dispatch => {

  dispatch({
    type: t.ACTIVE_ACTION,
    payload: name,
  })
}

export const modalAction = name => dispatch => {

  dispatch({
    type: t.SET_MODAL,
    payload: name,
  })
}

