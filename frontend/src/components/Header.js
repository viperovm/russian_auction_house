import React from 'react';
import Logo from "./Logo";
import Menu from "./menu/Menu";
import MobileMenu from "./menu/MobileMenu";
import Language from "./search/Language";
import Search from "./search/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_logo">
          <Logo/>
        </div>
        <div className="header_menu">
          <Menu/>
        </div>
        <div className="header_search">
          <Language/>
          <Search/>
          <MobileMenu/>
        </div>
      </div>
      <div className="mobile_menu">
      </div>
    </div>
  );
};

export default Header;