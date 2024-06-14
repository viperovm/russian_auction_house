import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {modalAction, appealAction, subscribeAction} from "../../store/actions/siteActions";
import Modal from "../Modal";
import Input from "../Inputs/Input";

const AppealModal = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState(null)


  const submitHandler = (e) => {
    e.preventDefault()
    appealAction(data)
      .then(result => {
        if (result.status === 201) {
          dispatch(modalAction(''))
          setData(null)
        } else {
          console.error(result)
        }
      })
    subscribeAction(data).then(r => {
        if (r.status >= 300) {
          console.error(r)
        }
      })
  }

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Modal name="appeal_modal">
        <div className="subscription-wrapper">
          <h1>Обратная связь</h1>
          <p>Если у Вас остались вопросы, заполните форму и мы свяжемся с Вами.</p>
          <form onSubmit={submitHandler}>
            <Input type="text" name="name" label="Имя" placeholder="Введите Ваше имя" required={true} data={data?.name}
                   handler={changeHandler}/>
            <Input type="phone" name="phone" label="Номер телефона" placeholder="Введите Ваш номер телефона"
                   required={true} data={data?.phone}
                   handler={changeHandler}/>
            <Input type="email" name="email" label="Email" placeholder="Введите Ваш email" required={true}
                   data={data?.email}
                   handler={changeHandler}/>
            <Input type="textarea" name="message" label="Дополнительная информация" placeholder="Введите Ваш текст"
                   required={true}
                   data={data?.message}
                   handler={changeHandler}/>
            <input className="submit-button" type="submit"/>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default AppealModal;