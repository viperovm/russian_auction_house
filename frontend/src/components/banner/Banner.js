import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bannerAction} from "../../store/actions/siteActions";
import {nToBr} from "../../functions/text";

const Banner = () => {

  const dispatch = useDispatch()

  const {banner} = useSelector(state => state.site)

  useEffect(() => {
    if (!banner) {
      dispatch(bannerAction())
    }
  }, [banner])

  return (
    <>
      {banner &&
      <div className={`home-banner ${banner?.text_position}`}
           style={{backgroundImage: `url(${banner?.image})`}}>
        <div className="home-banner-info">
          <div className="home-banner-title">{banner?.title}</div>
          {banner?.subtitle && <div className="home-banner-subtitle">{banner?.subtitle}</div>}
          {banner?.text && <div className="home-banner-text" dangerouslySetInnerHTML={{__html: nToBr(banner?.text)}}/>}
          {banner?.link_1_url &&
          <a href={banner?.link_1_url} className="home-banner-link" target='_blank' rel="noreferrer">{banner?.link_1_name}</a>}
          {banner?.link_2_url &&
          <a href={banner?.link_2_url} className="home-banner-link" target='_blank' rel="noreferrer">{banner?.link_2_name}</a>}
        </div>
      </div>
      }
    </>
  )
}

export default Banner;