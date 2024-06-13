import React from 'react';
import required_img from '../../assets/img/required.svg'
import { useMask } from '@react-input/mask';

const Input = ({type, name, required, placeholder, label, data, handler}) => {


  const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });


  return (
    <div className="input-wrapper">
      <div className="input-label">
        {label}
        {required && <img src={required_img} className="input-required" alt="required"/>}
      </div>
      {(type === 'text' || type === 'email') && <input name={name} type={type} placeholder={placeholder} value={data} onChange={e => handler(e)}/>}
      {type === 'phone' && <input className="input-phone" name={name} ref={inputRef} type='text' placeholder={'+7 (___) ___-__-__'} value={data} onChange={e => handler(e)}/>}
      {type === 'textarea' && <textarea name={name} value={data} onChange={e => handler(e)}/>}
    </div>
  );
};

export default Input;