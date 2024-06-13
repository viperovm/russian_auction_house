import React from 'react';
import {getProperPrice} from "../../functions/price";

const ShopItem = ({data}) => {
  return (
    <div className="shop-item-description-wrapper">
      <div className="shop-item-description-artist">{data?.artist}</div>
      <div className="shop-item-description-name">{data?.name}</div>
      <div className="shop-item-short-description">{data?.short_description}</div>
      <div className="shop-item-price-wrapper">
        <div className="shop-item-price">{getProperPrice(data?.price)}</div>
        <button className="buy-button">купить</button>
      </div>
    </div>
  );
};

export default ShopItem;