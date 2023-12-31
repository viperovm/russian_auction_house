import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {activeAction} from "../../store/actions/siteActions";

const MenuItem = ({data}) => {

  const dispatch = useDispatch()
  const { active_action } = useSelector(state => state.site)

  const clickHandler = () => {
    if(active_action === 'mobile_menu') {
      dispatch(activeAction(''))
    }
  }

  return (
    <Link
      onClick={clickHandler}
      className={`menu_item${(data.url === window.location.pathname) ? ' active' : ''} `}
      to={data.url}
    >
      {data.name}
    </Link>
  );
};

export default MenuItem;
