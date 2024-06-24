import React, {useRef, useLayoutEffect, useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {streamAction} from "../../store/actions/siteActions";
import Iframe from 'react-iframe'

const Stream = () => {

  const dispatch = useDispatch()

  const { stream } = useSelector(state => state.site)

  useEffect(() => {
    if(!stream){
      dispatch(streamAction())
    }
  },[stream])

  const targetRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  }, [targetRef]);

  return (
    <>
      {stream &&
      <div ref={targetRef} className="stream-wrapper">

        <Iframe url={`https://vk.com/video_ext.php?oid=${stream}`}
        width={width ? width : '1190'}
        height={width ? width/1.8 : '661'}
        id=""
        className=""
        display="block"
        position="relative"/>

        {/*<iframe*/}
        {/*  src={`https://vk.com/video_ext.php?oid=${stream}`}*/}
        {/*  width="853"*/}
        {/*  height="480"*/}
        {/*  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0"*/}
        {/*  allowFullScreen/>*/}
      {/*<iframe*/}
      {/*  width={width ? width : '1190'}*/}
      {/*  height={width ? width/1.8 : '661'}*/}
      {/*  src={`https://www.youtube.com/embed/${stream}`}*/}
      {/*  title="YouTube video player" frameBorder="0"*/}
      {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
      {/*  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>*/}
    </div>}
    </>
  )
}

export default Stream