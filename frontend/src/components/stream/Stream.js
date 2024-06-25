import React, {useRef, useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import Iframe from 'react-iframe'

const Stream = () => {

  const {stream} = useSelector(state => state.site)

  const observedDiv = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!observedDiv.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (observedDiv.current.offsetWidth !== width) {
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

        {stream?.source === 'vk' &&

        <Iframe url={`https://vk.com/video_ext.php?oid=${stream.url}`}
                width='100%'
                height={width ? width / 1.8 : '661'}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0"
                allowFullScreen
                display="block"
                position="relative"/>

        }

        {stream?.source === 'youtube' &&

        <Iframe url={`https://www.youtube.com/embed/${stream.url}`}
                width='100%'
                height={width ? width / 1.8 : '661'}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                display="block"
                position="relative"/>

        }
      </div>}
    </>
  )
}

export default Stream