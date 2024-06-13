import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Gallery from "../../components/gallery/Gallery";
import {singlePaintingAction} from "../../store/actions/siteActions";
import ImageGallery from "react-image-gallery";

const ShopPage = () => {

  const dispatch = useDispatch()

  const { pages, painting } = useSelector(state => state.site)

  const [page, setPage] = useState(null)
  const [img, setImg] = useState([])

  let { lot } = useParams();

  useEffect(() => {
    if(lot && painting?.slug!==lot) {
      dispatch(singlePaintingAction(lot))
    } else {
      pages.map(p => {
      if(p.slug === 'shop'){
        setPage(p)
      }
    })
    }
  }, [lot, pages])

  console.log(img)

  useEffect(() => {
    const arr = []
    if(painting && Array.isArray(painting?.painting_gallery) && painting?.painting_gallery.length>0){
      painting?.painting_gallery.map(i => {
        console.log(i)
        console.log(i.image)
        arr.push(i.image)
        console.log(arr)
        return [...arr, i.image]
      })
    }
    console.log(arr)
  }, [painting])

  const breadcrumbs = [
    {
      name: 'Главная',
      url: '/'
    },
    {
      name: 'Магазин',
      url: lot? '/shop' : ''
    },
    {
      name: lot? painting?.artist + ' | ' + painting?.name : '',
    },
  ]

  console.log(painting)

  return (
    <MainLayout breadcrumbs={breadcrumbs}>

      {!lot && page && <div
        dangerouslySetInnerHTML={{__html: page?.description}}
      />}
      {!lot && <Gallery shop={true}/>}
      {lot && <ImageGallery items={img}/>}

      {/*<>*/}
      {/*  <h1>*/}
      {/*    Русский аукционный дом – это системный аукцион новой формации*/}
      {/*  </h1>*/}
      {/*  <p>*/}
      {/*    Сочетаем в себе классические аукционные традиции с новым подходом, отвечающим современным реалиям и тенденциям*/}
      {/*    рынка.<br/>*/}
      {/*    Одним из основных направлений мы выбрали современное искусство, включая новые направления Street art, Digital*/}
      {/*    Art, Nft и другие. Также мы проводим торги по старому искусству как российскому, так и европейскому.*/}
      {/*  </p>*/}
      {/*  <h2>*/}
      {/*    Наша миссия –*/}
      {/*  </h2>*/}
      {/*  <p>*/}
      {/*    делать искусство доступным, безопасным и привлекательным инвестиционным инструментом, а наш сервис удобным для*/}
      {/*    наших клиентов, продавцов и покупателей.*/}
      {/*  </p>*/}
      {/*  */}
      {/*</>*/}
    </MainLayout>

  );
};

export default ShopPage;