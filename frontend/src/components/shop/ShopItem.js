import React from 'react';
import {getProperPrice} from "../../functions/price";

const ShopItem = ({data}) => {
  return (
    <div className="shop-item-description-wrapper">
      <h2>{data?.artist}</h2>
      <h1>{data?.name}</h1>
      <p>{data?.short_description}</p>
      <div className="shop-item-price">
        <div>{getProperPrice(data?.price)}</div>
        <button className="buy-button">купить</button>
      </div>
    </div>
  );
};

export default ShopItem;