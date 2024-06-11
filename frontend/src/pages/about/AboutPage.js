import React, {useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import AboutGallery from "./AboutGallery";
import {useSelector} from "react-redux";

const AboutPage = () => {

  const { pages } = useSelector(state => state.site)

  const [page, setPage] = useState(null)

  console.log(page)

  useEffect(() => {
    pages.map(item => {
      if (item.url === 'about') {
        setPage(item)
      }
    })
  }, [pages])

  return (
    <MainLayout>

      {page && <div
        dangerouslySetInnerHTML={{__html: page?.description}}
      />}
      <AboutGallery/>

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
}

export default AboutPage