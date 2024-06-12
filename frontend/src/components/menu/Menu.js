import React from 'react';
import MenuItem from "./MenuItem";
import {useSelector} from "react-redux";


const Menu = ({type, items}) => {

  const { pages } = useSelector(state => state.site)

  return (
    <div className={`${type  === 'mob' ? `menu_container_mobile` : type === 'footer' ? `menu_container_footer` : `menu_container`}`}>
      {pages?.map((d, k) => (
        <MenuItem key={k} data={d}/>
      ))}
    </div>
  );
};

export default Menu;