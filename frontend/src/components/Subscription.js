import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import Input from "./Inputs/Input";

const Subscription = () => {

  const [active, setActive] = useState(false)
  const [data, setData] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      const timestamp = JSON.parse(localStorage.getItem('timestamp'))
      const subscribed = JSON.parse(localStorage.getItem('subscribed'))
      if (subscribed) {
        setActive(false)
      } else if (!timestamp || (timestamp && Date.now() - timestamp > 432000000)) {
        setActive(true)
        localStorage.setItem('timestamp', JSON.stringify(Date.now()));
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [])

  const subscribeHandler = async () => {

  }

  const changeHandler = (v) => {
    setData(v)
  }

  return (
    <>
      {active && <Modal name="subscription">
        <div className="subscription-wrapper">
          <h1>Подписаться на новости</h1>
          <p>Подпишитесь на наши новости, чтобы быть в курсе последних событий.</p>
          <form onSubmit={subscribeHandler}>
            <Input type="email" name="email" label="Email" placeholder="Введите Ваш email" required={true} data={data}
                   handler={changeHandler}/>
            <input className="subscription-submit" type="submit"/>
          </form>
        </div>
      </Modal>}
    </>
  )
}

export default Subscription;