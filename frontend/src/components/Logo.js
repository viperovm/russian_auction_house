import React from 'react';
import dark from '../assets/img/logo_dark.svg'
import light from '../assets/img/logo_light.svg'
import {Link} from "react-router-dom";

const Logo = ({theme, link=true, footer = false}) => {

  return (
    <>
      {
        link ?
          <Link to={'/'}>
            <img className={`${footer ? 'footer_logo' : 'logo'}`} src={theme === 'light' ? light : dark} alt=""/>
          </Link>
          :
          <img className={`${footer ? 'footer_logo' : 'logo'}`} src={theme === 'light' ? light : dark} alt=""/>
      }
    </>

  );
};

export default Logo;