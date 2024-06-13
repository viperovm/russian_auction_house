import React from 'react';

const ShopItem = ({data}) => {
  return (
    <div className="shop-item-description-wrapper">
      <h2>{data?.artist}</h2>
      <h1>{data?.name}</h1>
      <div className="shop-item-short-description">
        {data?.short_description}
      </div>
    </div>
  );
};

export default ShopItem;