import * as t from "../types"

const initialState = {
  active_action: '',
  modal: '',
  pages: [],
  banner: null,
  paintings: [],
  painting: null,
  stream: null,
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

    case t.GET_BANNER_SUCCESS:

      return {
        ...state,
        banner: payload,
      }

    case t.GET_BANNER_FAIL:

      return {
        ...state,
        banner: null,
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

    case t.GET_PAINTING_SUCCESS:

      return {
        ...state,
        painting: payload,
      }

    case t.GET_PAINTING_FAIL:

      return {
        ...state,
        painting: null,
      }

    case t.GET_STREAM_SUCCESS:

      return {
        ...state,
        stream: payload,
      }

    case t.GET_STREAM_FAIL:

      return {
        ...state,
        stream: null,
      }

    default:
      return state
  }
}

export default siteReducer
