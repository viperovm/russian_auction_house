import React, {useEffect, useRef, useState} from 'react';
import Logo from "./Logo";
import Menu from "./menu/Menu";
import MobileMenu from "./menu/MobileMenu";
import Language from "./search/Language";
import Search from "./search/Search";
import { useSelector } from "react-redux"

const Header = () => {

  const { active_action } = useSelector(state => state.site)

  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  console.log(height)
  // console.log(ref.current.clientHeight)

  useEffect(() => {
    setHeight(ref.current.clientHeight * -1)
  }, [active_action])

  const menu_items = [
    // {
    //   id: 1,
    //   name: 'Главная',
    //   url: '/',
    // },
    // {
    //   id: 2,
    //   name: 'Покупка',
    //   url: '/',
    // },
    // {
    //   id: 3,
    //   name: 'Продажа',
    //   url: '/',
    // },
    // {
    //   id: 4,
    //   name: 'Разделы',
    //   url: '/',
    // },
    // {
    //   id: 5,
    //   name: 'Услуги',
    //   url: '/',
    // },
    {
      id: 6,
      name: 'О нас',
      url: '/about',
    },
  ]



  return (
    <div className="header">
      <div className={`header_container ${active_action === 'mobile_menu' ? `active` : ``}`}>
        <div className="header_logo">
          <Logo/>
        </div>
        <div className="header_menu">
          <Menu items={menu_items}/>
        </div>
        <div className="header_search">
          <Language/>
          <Search/>
          <MobileMenu/>
        </div>
      </div>
      <div className="mobile_menu_section">
        <div
          ref={ref}
          className={`mobile_menu_wrapper ${active_action === 'mobile_menu' ? `open` : ``}`}
          // style={{top: active_action === 'mobile_menu' ? 0 : height }}
        >
        <Menu type="mob" items={menu_items}/>
      </div>
      </div>
    </div>
  );
};

export default Header;