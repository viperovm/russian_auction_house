import React, {useRef, useLayoutEffect, useState, useEffect} from 'react'
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