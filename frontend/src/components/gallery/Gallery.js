import React, {useRef, useLayoutEffect, useState, useEffect} from 'react'
import img1 from '../../assets/img/aboutGallery/1.jpg'
import img2 from '../../assets/img/aboutGallery/2.jpg'
import img3 from '../../assets/img/aboutGallery/3.jpg'
import img4 from '../../assets/img/aboutGallery/4.jpg'
import GalleryItem from "./GalleryItem";
import {useDispatch, useSelector} from "react-redux";
import {paintingsAction} from "../../store/actions/siteActions";

const Gallery = ({shop=false}) => {

  const dispatch = useDispatch()

  const { paintings } = useSelector(state => state.site)

  useEffect(() => {
    if(paintings.length === 0){
      dispatch(paintingsAction())
    }
  },[paintings])

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
    {
      id: 5,
      img: img1,
    },
    {
      id: 6,
      img: img2,
    },
    {
      id: 7,
      img: img3,
    },
    {
      id: 8,
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
      {paintings?.map((d, k) => {
        if (!shop && k<=3) {
          return <GalleryItem key={k} img={d} mob={mob} shop={shop}/>
        } else if(shop) {
          return <GalleryItem key={k} img={d} mob={mob} shop={shop}/>
        }
      })}
    </div>
  )
}

export default Gallery