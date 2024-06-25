import React, {useState} from 'react';
import Modal from "./Modal";
import Input from "./Inputs/Input";
import {useDispatch} from "react-redux";
import {modalAction, subscribeAction} from "../store/actions/siteActions";

const Subscription = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState(null)


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