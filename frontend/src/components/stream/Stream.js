import React, {useRef, useLayoutEffect, useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import Iframe from 'react-iframe'

const Stream = () => {

  const { stream } = useSelector(state => state.site)

  const observedDiv = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!observedDiv.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if(observedDiv.current.offsetWidth !== width) {
        setWidth(observedDiv.current.offsetWidth);
      }
    });
    resizeObserver.observe(observedDiv.current);
    return function cleanup() {
      resizeObserver.disconnect();
    }
  }, [observedDiv.current])

  return (
    <>
      {stream &&
      <div ref={observedDiv} className="stream-wrapper">

        <Iframe url={`https://vk.com/video_ext.php?oid=${stream.url}`}
        width='100%'
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