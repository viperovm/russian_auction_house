import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

const GalleryItem = ({img, mob, shop}) => {

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

  return (
    <div className="about_gallery_item_wrapper">
      <img className="about_gallery_item" ref={targetRef} src={img?.painting_gallery[0]?.image} alt="" height={height}/>
      {shop && <div className="about_gallery_item_description">
        <div className="about_gallery_item_name">{img?.name}</div>
        <div className="about_gallery_item_price">{img?.price} ₽</div>
      </div>}
    </div>

  );
};

export default GalleryItem;