import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {modalAction, paintingRequestsAction} from "../../store/actions/siteActions";
import axios from "axios";
import Modal from "../Modal";
import Input from "../Inputs/Input";

const ShopModal = () => {

  const {painting} = useSelector(state => state.site)

  const dispatch = useDispatch()

  const [data, setData] = useState(null)

  console.log(data)

  useEffect(() => {
    if(painting) {
      setData({
      ...data,
      requested_painting: painting?.id
    })
    }
  }, [painting])


  const submitHandler = (e) => {
    e.preventDefault()

    paintingRequestsAction(data)
      .then(result => {
        if (result.status === 201) {
          dispatch(modalAction(''))
          setData(null)
        } else {
          console.error(result)
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
      <Modal name="shop_modal">
        <div className="subscription-wrapper">
          <h1>Покупка</h1>
          <p>Для приобретения предмета искусства, заполните форму и мы свяжемся с Вами.</p>
          <form onSubmit={submitHandler}>
            <Input type="text" name="name" label="Имя" placeholder="Введите Ваше имя" required={true} data={data?.name}
                   handler={changeHandler}/>
            <Input type="phone" name="phone" label="Номер телефона" placeholder="Введите Ваш номер телефона"
                   required={true} data={data?.phone}
                   handler={changeHandler}/>
            <Input type="email" name="email" label="Email" placeholder="Введите Ваш email" required={true}
                   data={data?.email}
                   handler={changeHandler}/>
            <Input type="textarea" name="extra" label="Дополнительная информация" placeholder="Введите Ваш текст"
                   required={false}
                   data={data?.extra}
                   handler={changeHandler}/>
            <input className="submit-button" type="submit"/>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default ShopModal;