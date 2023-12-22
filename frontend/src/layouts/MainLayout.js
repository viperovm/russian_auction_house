import React, {useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";

const MainLayout = ({children}) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
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
  );
};

export default MainLayout;