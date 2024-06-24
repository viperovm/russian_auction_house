import React, {useRef, useLayoutEffect, useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {streamAction} from "../../store/actions/siteActions";

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
  }, []);

  return (
    <div ref={targetRef} className="stream-wrapper">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${stream}`}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    </div>
  )
}

export default Stream