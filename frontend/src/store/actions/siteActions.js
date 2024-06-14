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
    const res = await axios.get(`https://art-bid.ru/api/pages/`, config);

    dispatch({
      type: t.GET_PAGES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {

    dispatch({
      type: t.GET_PAGES_FAIL
    })
  }
}

export const paintingsAction = () => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.get(`https://art-bid.ru/api/painting/`, config);

    dispatch({
      type: t.GET_PAINTINGS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {

    dispatch({
      type: t.GET_PAINTINGS_FAIL
    })
  }
}

export const singlePaintingAction = (slug) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.get(`https://art-bid.ru/api/painting/${slug}/`, config);

    dispatch({
      type: t.GET_PAINTING_SUCCESS,
      payload: res.data,
    })
  } catch (err) {

    dispatch({
      type: t.GET_PAINTING_FAIL
    })
  }
}

export const paintingRequestsAction = async (data) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  const body = JSON.stringify(data)

  try {
    return await axios.post(`https://art-bid.ru/api/painting_request/`, body, config);

  } catch (err) {
    return err
  }
}

export const appealAction = async (data) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  const body = JSON.stringify(data)

  try {
    return await axios.post(`https://art-bid.ru/api/appeal/`, body, config);

  } catch (err) {
    return err
  }
}

export const subscribeAction = async (data) => {

  const getPhone = () => {
    if (data?.phone) {
      return `+${data.phone.replace(/[^0-9]/g,"")}`
    } else {
      return ''
    }
  }

  const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      params: {
        'email': data?.email,
        'name': data?.name,
        'phone': getPhone(),
      }
    };
  try {
    return await axios.get(`https://art-bid.ru/api/new_user/`, config);
  } catch (err) {
    return err
  }
}

