import React from 'react';
import {Link} from "react-router-dom"

const Breadcrumbs = ({items}) => {
  return (
    <>
      {items.length ? (
        <>
          {items.map((item, index) => (
            <Link
              key={index}
              className={item.url ? "breadcrumbs_item_link" : "breadcrumbs_item_link--disabled"}
              to={item.url}
            >
              {item.name}
            </Link>
          ))}
        </>
      ) : null}
    </>
  )
}

export default Breadcrumbs
