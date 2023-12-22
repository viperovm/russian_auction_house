import React from 'react';
import {Link} from "react-router-dom";

const MenuItem = ({data}) => {

  return (
    <Link
      className={`menu_item${(data.url === window.location.pathname) ? ' active' : ''} `}
      to={data.url}
    >
      {data.name}
    </Link>
  );
};

export default MenuItem;
