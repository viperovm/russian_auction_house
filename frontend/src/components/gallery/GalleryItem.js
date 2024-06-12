import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import {useNavigate} from "react-router";

const GalleryItem = ({img, mob, shop}) => {

  let navigate = useNavigate();

  const targetRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(null);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if(mob) {
      setHeight(width/1.2)
    } else {
      setHeight(width*1.2)
    }
  }, [width, mob])

  const clickHandler = () => {
    return navigate(`/shop/${img.id}`);
  }

  return (
    <div className="about_gallery_item_wrapper" onClick={clickHandler}>
      <img className="about_gallery_item" ref={targetRef} src={img?.painting_gallery[0]?.image} alt="" height={height}/>
      {shop && <div className="about_gallery_item_description">
        {img?.name && <div className="about_gallery_item_name">{img?.name}</div>}
        {img?.price && <div className="about_gallery_item_price">{img?.price} ₽</div>}
      </div>}
    </div>

  );
};

export default GalleryItem;