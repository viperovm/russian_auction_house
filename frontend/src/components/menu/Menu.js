import React from 'react';
import MenuItem from "./MenuItem";


const Menu = () => {

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
    <>
      <div className="menu_container">
        {menu_items?.map((d, k) => (
          <MenuItem key={k} data={d}/>
        ))}
      </div>
    </>
  );
};

export default Menu;