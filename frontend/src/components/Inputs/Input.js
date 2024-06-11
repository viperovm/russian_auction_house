import React from 'react';
import required_img from '../../assets/img/required.svg'

const Input = ({type, name, required, placeholder, label, data, handler}) => {



  return (
    <div className="input-wrapper">
      <div className="input-label">
        {label}
        {required && <img src={required_img} className="input-required" alt="required"/>}
      </div>
      <input type={type} placeholder={placeholder} value={data} onChange={e => handler(e.target.value)}/>
    </div>
  );
};

export default Input;