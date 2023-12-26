import React from 'react';
import MenuItem from "./MenuItem";


const Menu = ({type, items}) => {

  return (
    <div className={`${type  === 'mob' ? `menu_container_mobile` : type === 'footer' ? `menu_container_footer` : `menu_container`}`}>
      {items?.map((d, k) => (
        <MenuItem key={k} data={d}/>
      ))}
    </div>
  );
};

export default Menu;