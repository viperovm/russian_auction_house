import * as t from "../types"
import axios from "axios";

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

export const pagesAction = () => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.patch(`https://art-bid.ru/api/pages/`, config);

    dispatch({
      type: SEND_ORDER_STATUS_SUCCESS
    })
  } catch (err) {

    dispatch({
      type: SEND_ORDER_STATUS_FAIL
    })
  }

  dispatch({
    type: t.SET_MODAL,
    payload: name,
  })
}

