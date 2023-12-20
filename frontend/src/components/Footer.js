import React from 'react';
import Logo from "./Logo";
import {Link} from "react-router-dom";
import tg from "../assets/img/tg.svg"
import whatsapp from "../assets/img/whatsapp.svg"

const Footer = () => {

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

  const doc_items = [
    {
      id: 1,
      name: 'Правила аукционной торговли',
      url: '/trading-rules',
    },
    {
      id: 2,
      name: 'Политика конфиденциальности',
      url: '/personal-agreement',
    },
  ]

  return (
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
            <div className="navi_section">
              {menu_items?.map((d, k) => (
                <Link to={d.url} key={k} className="navi_section_item">{d.name}</Link>
              ))}
            </div>
          </div>
          <div className="docs">
            <div className="navi_header">
              Документы
            </div>
            <div className="navi_section">
              {doc_items?.map((d, k) => (
                <Link to={d.url} key={k} className="navi_section_item">{d.name}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact_items">
            <div className="contact_item">
              <img src={tg} alt="tg"/>
              <img src={whatsapp} alt="whatsapp"/>
            </div>
            <div className="contact_item contact_item_text">
              info@art-bid.ru
            </div>
            <div className="contact_item contact_item_text">
              +7 977 273-60-62
            </div>
          </div>
          <div className="contact_item_button">
            Связаться с нами
          </div>
        </div>
      </div>
      <div className="all_rights_r">
        2023 © Все права защищены
      </div>
    </div>
  );
};

export default Footer;