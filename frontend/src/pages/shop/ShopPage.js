import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Gallery from "../../components/gallery/Gallery";
import {singlePaintingAction} from "../../store/actions/siteActions";
import ImageGallery from "react-image-gallery";
import ShopItem from "../../components/shop/ShopItem";

const ShopPage = () => {

  const dispatch = useDispatch()

  const {pages, painting} = useSelector(state => state.site)

  const [page, setPage] = useState(null)
  const [img, setImg] = useState([])

  let {lot} = useParams();

  useEffect(() => {
    if (lot && painting?.slug !== lot) {
      dispatch(singlePaintingAction(lot))
    } else {
      pages.map(p => {
        if (p.slug === 'shop') {
          setPage(p)
        }
      })
    }
  }, [lot, pages])

  useEffect(() => {
    if (painting && Array.isArray(painting?.painting_gallery) && painting?.painting_gallery?.length) {
      setImg(painting?.painting_gallery?.map(item => {
        return {
          original: item.image,
          thumbnail: item.image,
        }
      }))
    }
  }, [painting])

  const breadcrumbs = [
    {
      name: 'Главная',
      url: '/'
    },
    {
      name: 'Магазин',
      url: lot ? '/shop' : ''
    },
    {
      name: lot ? painting?.artist + ' | ' + painting?.name : '',
    },
  ]

  return (
    <MainLayout breadcrumbs={breadcrumbs} page={page}>

      {!lot && page && <div
        dangerouslySetInnerHTML={{__html: page?.description}}
      />}
      {!lot && <Gallery shop={true}/>}
      {lot &&
      <>
        <div className="shop-item-wrapper">
          <div className="shop-item-column">
            <div className="shop-item-gallery-wrapper">
              <ImageGallery items={img}/>
            </div>
          </div>
          <div className="shop-item-column">
            <ShopItem data={painting}/>
          </div>
        </div>
        <div className="shop-item-description"
          dangerouslySetInnerHTML={{__html: painting?.description}}
        />
      </>
      }
    </MainLayout>

  );
};

export default ShopPage;