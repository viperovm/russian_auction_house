import React from 'react';
import required_img from '../../assets/img/required.svg'
import {useMask} from '@react-input/mask';

const Input = ({type, name, required, placeholder, label, data, handler}) => {


  const inputRef = useMask({mask: '+7 (___) ___-__-__', replacement: {_: /\d/}});

  const phoneHandler = e => {
    console.log(e.target.value)
    handler(e)
    // if(!data?.phone) {
    //   if(e.target.value[0] !== '9') {
    //     let d = {
    //       target: {
    //         name: 'phone',
    //         value: e.target.value.slice(1)
    //       }
    //     }
    //     handler(d)
    //   }
    // }
  }


  return (
    <div className="input-wrapper">
      <div className="input-label">
        {label}
        {required && <img src={required_img} className="input-required" alt="required"/>}
      </div>
      {(type === 'text' || type === 'email') &&
      <input name={name} type={type} placeholder={placeholder} value={data} onChange={e => handler(e)}/>}
      {/*{type === 'phone' && <div className="input-phone-wrapper">*/}
      {/*  /!*<div className="input-phone-placeholder">+7 (___) ___-__-__</div>*!/*/}
      {/*  <input className="input-phone" name={name} ref={inputRef} type="text" placeholder="+7 (___) ___-__-__"*/}
      {/*         value={data} onChange={e => handler(e)}/>*/}
      {/*</div>}*/}
      {type === 'phone' &&
      <input className="input-phone" name={name} ref={inputRef} type="text" placeholder="+7 (___) ___-__-__"
             value={data} onChange={phoneHandler}/>}
      {type === 'textarea' && <textarea name={name} value={data} onChange={e => handler(e)}/>}
    </div>
  );
};

export default Input;