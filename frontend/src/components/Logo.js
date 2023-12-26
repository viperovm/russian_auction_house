import React from 'react';
import dark from '../assets/img/logo_dark.svg'
import light from '../assets/img/logo_light.svg'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {activeAction} from "../store/actions/siteActions";

const Logo = ({theme, link=true, footer = false}) => {

  const dispatch = useDispatch()
  const { active_action } = useSelector(state => state.site)

  const clickHandler = () => {
    if(active_action === 'mobile_menu') {
      dispatch(activeAction(''))
    }
  }

  return (
    <>
      {
        link ?
          <Link
            to={'/'}
            onClick={clickHandler}
          >
            <img className={`${footer ? 'footer_logo' : 'logo'}`} src={theme === 'light' ? light : dark} alt=""/>
          </Link>
          :
          <img className={`${footer ? 'footer_logo' : 'logo'}`} src={theme === 'light' ? light : dark} alt=""/>
      }
    </>

  );
};

export default Logo;