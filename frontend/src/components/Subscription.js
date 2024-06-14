import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import Input from "./Inputs/Input";
import {useDispatch} from "react-redux";
import {modalAction, subscribeAction} from "../store/actions/siteActions";
import axios from "axios";

const Subscription = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState(null)


  useEffect(() => {
    const timeout = setTimeout(() => {
      let timestamp = null
      let subscribed = null
      if (localStorage.getItem('timestamp')) {
        timestamp = JSON.parse(localStorage.getItem('timestamp'))
      }
      if (localStorage.getItem('subscribed')) {
        subscribed = JSON.parse(localStorage.getItem('subscribed'))
      }
      if ((!subscribed && !timestamp) || (!subscribed && (timestamp && Date.now() - timestamp > 432000000))) {
      // if ((!subscribed && !timestamp) || (!subscribed && (timestamp && Date.now() - timestamp > 432000000))) {
        dispatch(modalAction('subscription'))
        localStorage.setItem('timestamp', JSON.stringify(Date.now()));
      }
    }, 15000);
    return () => clearTimeout(timeout);
  }, [])

  const subscribeHandler = (e) => {
    e.preventDefault()
    subscribeAction(data).then(r => {
        if (r.status >= 200 && r.status < 300) {
          localStorage.setItem('subscribed', JSON.stringify(Date.now()));
          dispatch(modalAction(''))
        } else {
          console.error(r)
        }
      })
  }

  const changeHandler = (e) => {
    setData({email: e.target.value})
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
            <input className="submit-button" type="submit"/>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default Subscription;