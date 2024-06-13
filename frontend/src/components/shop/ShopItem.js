import React from 'react';

const ShopItem = ({data}) => {
  return (
    <div className="shop-item-wrapper">
      <h2>{data.artist}</h2>
      <h1>{data.name}</h1>
    </div>
  );
};

export default ShopItem;