import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import Input from "./Inputs/Input";
import {useDispatch} from "react-redux";
import {modalAction} from "../store/actions/siteActions";
import axios from "axios";

const Subscription = (url, config) => {

  const dispatch = useDispatch()

  const [active, setActive] = useState(false)
  const [data, setData] = useState('')

  console.log(localStorage.getItem('timestamp'))
  console.log(active)
  console.log(data)

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(1)
      let timestamp = null
      let subscribed = null
      if(localStorage.getItem('timestamp')){
        timestamp = JSON.parse(localStorage.getItem('timestamp'))
      }
      if(localStorage.getItem('subscribed')){
        subscribed = JSON.parse(localStorage.getItem('subscribed'))
      }
      console.log(timestamp)
      console.log(subscribed)
      if ((!subscribed && !timestamp) || (!subscribed && (timestamp && Date.now() - timestamp > 30000))) {
        dispatch(modalAction('subscription'))
        localStorage.setItem('timestamp', JSON.stringify(Date.now()));
      } else {
        localStorage.setItem('subscribed', '')
      }
      // else {
      //   console.log(2)
      //   dispatch(modalAction('subscription'))
      //   setActive(true)
      //   localStorage.setItem('timestamp', JSON.stringify(Date.now()));
      // }
      // else if (!timestamp || (timestamp && Date.now() - timestamp > 432000000)) {
      //   console.log(2)
      //   setActive(true)
      //   localStorage.setItem('timestamp', JSON.stringify(Date.now()));
      // }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [])

  const subscribeHandler = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      params: {
        'email': data
      }
    };



    try {
      const res = await axios.get(`https://art-bid.ru/api/new_user/`, config);
      console.log('subscribed')
      console.log(res)
      // localStorage.setItem('subscribed', JSON.stringify(Date.now()));
      dispatch(modalAction(''))
    } catch (e) {
      console.error(e)
    }
  }

  const changeHandler = (v) => {
    setData(v)
  }

  return (
    <>
      <Modal name="subscription">
        <div className="subscription-wrapper">
          <h1>Подписаться на новости</h1>
          <p>Подпишитесь на наши новости, чтобы быть в курсе последних событий.</p>
          <form onSubmit={subscribeHandler}>
            <Input type="email" name="email" label="Email" placeholder="Введите Ваш email" required={true} data={data}
                   handler={changeHandler}/>
            <input className="subscription-submit" type="submit"/>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default Subscription;