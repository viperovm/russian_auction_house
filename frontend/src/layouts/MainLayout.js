import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import Subscription from "../components/Subscription";
import {useDispatch, useSelector} from "react-redux";
import {pagesAction} from "../store/actions/siteActions";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

const MainLayout = ({children, breadcrumbs}) => {

  const { pages } = useSelector(state => state.site)

  const dispatch = useDispatch()

  useEffect(() => {
    if(pages.length === 0){
      dispatch(pagesAction())
    }
  },[pages])

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Subscription/>
      <div className="main_layout">
        <Header/>
        <div className="content-wrapper">
          <div className="breadcrumbs container">
            <Breadcrumbs items={breadcrumbs}/>
          </div>
          <div className="content container">
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