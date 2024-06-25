import React from 'react';
import Logo from "./Logo";
import TextButton from "./Buttons/TextButton";
import IconButton from "./Buttons/IconButton";
import WhatsApp from "./icons/WhatsApp";
import Tg from "./icons/Tg";
import Menu from "./menu/Menu";
import {modalAction} from "../store/actions/siteActions";
import {useDispatch} from "react-redux";

const Footer = () => {

  const dispatch = useDispatch()

  const clickHandler = (type) => {
    if(type === 'appeal') {
    dispatch(modalAction('appeal_modal'))
    } else {
      dispatch(modalAction('subscription'))
    }
  }

  return (
    <>
      <div className="footer_container">
      <div className="footer_data">
        <div className="info">
          <Logo theme="light" link={false} footer={true}/>
          <div className="info_text">
            <div>ИНН 360202152443</div>
            <div>Москва, ул. Сергия Радонежского, дом 15-17 стр. 13</div>
          </div>
        </div>
        <div className="navi_container">
          <div className="navi">
            <div className="navi_header">
              Навигация
            </div>
            <Menu type="footer"/>
          </div>
          <div className="docs">
            <div className="navi_header">
              Документы
            </div>
            <Menu type="footer" doc={true}/>
          </div>
        </div>
        <div className="contact">
          <div className="contact_items">
            <div className="contact_item">
              <IconButton>
                <Tg/>
              </IconButton>
              <IconButton>
                <WhatsApp/>
              </IconButton>
            </div>
            <a href="mailto:info@art-bid.ru" className="contact_item contact_item_text">
              info@art-bid.ru
            </a>
            <a href="tel:+79772736062" className="contact_item contact_item_text">
              +7 977 273-60-62
            </a>
            <div className="contact_item contact_item_text hover-pink" onClick={() => {clickHandler('subscribe')}}>
              Подписаться на новости
            </div>
          </div>
          <TextButton text="Связаться с нами" action={() => clickHandler('appeal')}/>
        </div>
      </div>
      <div className="all_rights_r">
        {`${new Date().getFullYear()} © Все права защищены`}
      </div>
    </div>
    </>

  );
};

export default Footer;