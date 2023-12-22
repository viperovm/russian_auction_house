import * as t from "../types"

export const mobileMenu = active => dispatch => {

  dispatch({
    type: t.MOBILE_MENU,
    payload: active,
  })
}
