import React from 'react';
import MenuItem from "./MenuItem";
import {useSelector} from "react-redux";


const Menu = ({type, doc=false, items}) => {

  const { pages } = useSelector(state => state.site)

  return (
    <div className={`${type  === 'mob' ? `menu_container_mobile` : type === 'footer' ? `menu_container_footer` : `menu_container`}`}>
      {
        doc
          ?
          pages.filter(item => item.doc).map((d, k) => <MenuItem key={k} data={d}/>)
          :
          pages.filter(item => !item.doc).map((d, k) => <MenuItem key={k} data={d}/>)
      }

      {/*{pages?.map((d, k) => {*/}
      {/*  if(doc && d.doc) {*/}
      {/*    return <MenuItem key={k} data={d}/>*/}
      {/*  } else if(!doc && !d.doc) {*/}
      {/*    return <MenuItem key={k} data={d}/>*/}
      {/*  }*/}
      {/*})}*/}
    </div>
  );
};

export default Menu;