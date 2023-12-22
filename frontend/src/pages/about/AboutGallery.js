import React, {useRef, useLayoutEffect, useState, useEffect} from 'react'
import img1 from '../../assets/img/aboutGallery/1.png'
import img2 from '../../assets/img/aboutGallery/2.png'
import img3 from '../../assets/img/aboutGallery/3.png'
import img4 from '../../assets/img/aboutGallery/4.png'
import GalleryItem from "./GalleryItem";

const AboutGallery = () => {

  const gal = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ]

  const targetRef = useRef();
  const [width, setWidth] = useState(0);
  const [mob, setMob] = useState(false);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if(width < 992) {
      setMob(true)
    } else {
      setMob(false)
    }
  }, [width])

  return (
    <div ref={targetRef} className="about_gallery">
      {gal?.map((d, k) => <GalleryItem key={k} img={d.img} mob={mob} />)}
    </div>
  )
}

export default AboutGallery