import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import Subscription from "../components/Subscription";

const MainLayout = ({children}) => {

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Subscription/>
      <div className="main_layout">
        <Header/>

        <div className="content">
          <div className="content_container">
            {children}
          </div>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default MainLayout;