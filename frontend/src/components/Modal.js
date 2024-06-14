import React, {useEffect, useState} from 'react';
import close from '../assets/img/icons/close.svg'
import {useDispatch, useSelector} from "react-redux";
import {modalAction} from "../store/actions/siteActions";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Modal = ({children, name}) => {

  const dispatch = useDispatch()
  const { modal } = useSelector(state => state.site)

  const closeHandler = () => {
    dispatch(modalAction(''))
  }

  useOnClickOutside(ref, () => dispatch(modalAction('')))

  return (
    <>
      {name === modal &&
      <div className="modal-overlay">
        <div ref={ref} className="modal-body">
          <img src={close} className="modal-close" onClick={closeHandler} alt="close button"/>
          {children}
        </div>
      </div>
      }
    </>
  );
};

export default Modal;