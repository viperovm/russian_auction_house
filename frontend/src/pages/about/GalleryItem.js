import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

const GalleryItem = ({img, mob}) => {

  const targetRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(null);

  console.log(width)
  console.log(height)
  console.log(mob)

  useLayoutEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if(mob) {
      console.log(1)
      setHeight(width/1.2)
    } else {
      console.log(1)
      setHeight(width*1.2)
    }
  }, [width, mob])

  return (
    <img className="about_gallery_item" ref={targetRef} src={img} alt="" height={height}/>
  );
};

export default GalleryItem;