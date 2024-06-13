import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {modalAction} from "../../store/actions/siteActions";
import axios from "axios";
import Modal from "../Modal";
import Input from "../Inputs/Input";

const ShopModal = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState(null)

  console.log(data)


  const submitHandler = async (e) => {
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
      localStorage.setItem('subscribed', JSON.stringify(Date.now()));
      dispatch(modalAction(''))
    } catch (e) {
      console.error(e)
    }
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
            <Input type="text" name="name" label="Имя" placeholder="Введите Ваше имя" required={true} data={data.name}
                   handler={changeHandler}/>
            <Input type="phone" name="phone" label="Номер телефона" placeholder="Введите Ваш номер телефона"
                   required={true} data={data.phone}
                   handler={changeHandler}/>
            <Input type="email" name="email" label="Email" placeholder="Введите Ваш email" required={true}
                   data={data.email}
                   handler={changeHandler}/>
            <Input type="textarea" name="extra" label="Дополнительная информация" placeholder="" required={false}
                   data={data.extra}
                   handler={changeHandler}/>
            <input className="submit-button" type="submit"/>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default ShopModal;