import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import Subscription from "../components/Subscription";
import {useDispatch, useSelector} from "react-redux";
import {modalAction, pagesAction} from "../store/actions/siteActions";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import AppealModal from "../components/appeal/AppealModal";

const MainLayout = ({children, breadcrumbs}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      let timestamp = null
      let subscribed = null
      if (localStorage.getItem('timestamp')) {
        timestamp = JSON.parse(localStorage.getItem('timestamp'))
      }
      if (localStorage.getItem('subscribed')) {
        subscribed = JSON.parse(localStorage.getItem('subscribed'))
      }
      if ((!subscribed && !timestamp) || (!subscribed && (timestamp && Date.now() - timestamp > 432000000))) {
      // if ((!subscribed && !timestamp) || (!subscribed && (timestamp && Date.now() - timestamp > 432000000))) {
        dispatch(modalAction('subscription'))
        localStorage.setItem('timestamp', JSON.stringify(Date.now()));
      }
    }, 15000);
    return () => clearTimeout(timeout);
  }, [])

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
      <AppealModal/>
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