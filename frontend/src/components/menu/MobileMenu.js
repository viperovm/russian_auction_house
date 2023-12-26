import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {activeAction} from "../../store/actions/siteActions";

const MobileMenu = () => {

  const dispatch = useDispatch()
  const { active_action } = useSelector(state => state.site)

  const [active, setActive] = useState(false)

  console.log(window.location.pathname)

  useEffect(() => {
    if(active_action === 'mobile_menu') {
      setActive(true)
    } else {setActive(false)}
  }, [active_action])

  useEffect(() => {
    if(active_action === 'mobile_menu') {
      dispatch(activeAction(''))
    }
  }, [window.location.pathname])

  const menuHandler = () => {
    if(active_action === 'mobile_menu') {
      dispatch(activeAction(''))
    } else {
      dispatch(activeAction('mobile_menu'))
    }
  }

  const hoverHandler = state => {
    if(state === 'out' && active_action !== 'mobile_menu') {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return (
    <svg onClick={menuHandler} onMouseOver={() => hoverHandler('in')} onMouseOut={() => hoverHandler('out')} className="mobile_menu_icon" width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.375 1.60229H24.625M1.375 9.00002H24.625M1.375 16.3977H24.625" stroke={`${active ? `#FD99B3` : `#163190`}`} stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default MobileMenu;