import React from 'react';
import {getProperPrice} from "../../functions/price";

const ShopItem = ({data}) => {
  return (
    <div className="shop-item-description-wrapper">
      <h2>{data?.artist}</h2>
      <h1>{data?.name}</h1>
      <div className="shop-item-short-description">
        {data?.short_description}
      </div>
      <div className="shop-item-price">
        <div>{getProperPrice(data?.price)}</div>
        <button className="submit-button">купить</button>
      </div>
    </div>
  );
};

export default ShopItem;